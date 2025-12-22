#!/usr/bin/env python3
"""
Comprehensive JSON Resource Audit System
Validates schema compliance, language consistency, and bilingual parity
"""

import json
import re
import sys
from pathlib import Path
from typing import Dict, List, Tuple, Any

# Common English words that shouldn't appear in Spanish content
ENGLISH_INDICATORS = [
    'the', 'and', 'you', 'your', 'this', 'that', 'with', 'from', 'have', 'will',
    'what', 'when', 'where', 'why', 'how', 'can', 'should', 'would', 'could',
    'example', 'situation', 'content', 'title', 'description', 'action', 'avoid'
]

# Spanish indicators to confirm it's actually Spanish
SPANISH_INDICATORS = [
    'el', 'la', 'los', 'las', 'de', 'que', 'en', 'es', 'por', 'para',
    'con', 'su', 'al', 'del', 'un', 'una', 'cómo', 'qué', 'cuándo', 'dónde',
    'ejemplo', 'situación', 'contenido', 'título', 'descripción', 'acción', 'evitar'
]

class ResourceAuditor:
    def __init__(self):
        self.errors = []
        self.warnings = []
        self.info = []
        
    def audit_file(self, filepath: Path) -> Dict[str, Any]:
        """Run all audits on a single file"""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                data = json.load(f)
        except json.JSONDecodeError as e:
            return {
                'file': filepath.name,
                'valid': False,
                'errors': [f"JSON parse error: {e}"]
            }
        except Exception as e:
            return {
                'file': filepath.name,
                'valid': False,
                'errors': [f"File read error: {e}"]
            }
        
        self.errors = []
        self.warnings = []
        self.info = []
        
        # Run all checks
        self._check_schema_compliance(data, filepath.name)
        self._check_language_consistency(data, filepath.name)
        self._check_bilingual_parity(data, filepath.name)
        self._check_required_fields(data, filepath.name)
        self._check_content_quality(data, filepath.name)
        
        return {
            'file': filepath.name,
            'valid': len(self.errors) == 0,
            'errors': self.errors,
            'warnings': self.warnings,
            'info': self.info
        }
    
    def _check_schema_compliance(self, data: Dict, filename: str):
        """Check for legacy keys and schema violations"""
        legacy_keys = ['letter', 'name', 'description', 'tip', 'template', 'type', 
                      'mistakes', 'days', 'tasks', 'scripts', 'scenarios', 'steps', 
                      'subsections', 'formula', 'dont', 'scenario', 'wrong']
        
        for lang in ['en', 'es']:
            if lang not in data or 'sections' not in data[lang]:
                continue
            
            for section in data[lang]['sections']:
                # Check section-level legacy keys
                for key in legacy_keys:
                    if key in section:
                        self.errors.append(
                            f"{lang.upper()} section '{section.get('id', 'unknown')}' has legacy key: '{key}'"
                        )
                
                # Check items
                if 'items' in section:
                    for idx, item in enumerate(section['items']):
                        # Check for legacy keys in items
                        for key in legacy_keys:
                            if key in item:
                                self.errors.append(
                                    f"{lang.upper()} section '{section.get('id', 'unknown')}' item {idx+1} has legacy key: '{key}'"
                                )
                        
                        # Check required fields
                        if 'number' not in item:
                            self.warnings.append(
                                f"{lang.upper()} section '{section.get('id', 'unknown')}' item {idx+1} missing 'number'"
                            )
                        
                        if 'title' not in item and 'phrase' not in item and 'mistake' not in item:
                            self.warnings.append(
                                f"{lang.upper()} section '{section.get('id', 'unknown')}' item {idx+1} missing 'title' (or phrase/mistake)"
                            )
    
    def _check_language_consistency(self, data: Dict, filename: str):
        """Check for English text in Spanish sections and vice versa"""
        
        def detect_language(text: str) -> str:
            """Simple language detection based on common words"""
            if not text or not isinstance(text, str):
                return 'unknown'
            
            text_lower = text.lower()
            words = re.findall(r'\b\w+\b', text_lower)
            
            if len(words) < 3:  # Too short to determine
                return 'unknown'
            
            english_count = sum(1 for word in words if word in ENGLISH_INDICATORS)
            spanish_count = sum(1 for word in words if word in SPANISH_INDICATORS)
            
            # If we find significant English indicators in what should be Spanish
            if english_count > 2 and spanish_count == 0:
                return 'english'
            elif spanish_count > 2 and english_count == 0:
                return 'spanish'
            
            return 'unknown'
        
        def check_text_fields(obj: Any, path: str, expected_lang: str):
            """Recursively check all text fields"""
            if isinstance(obj, dict):
                for key, value in obj.items():
                    if key in ['title', 'content', 'description', 'subtitle', 'headline', 
                              'valueProposition', 'paragraph', 'principle']:
                        if isinstance(value, str) and len(value) > 20:
                            detected = detect_language(value)
                            if expected_lang == 'es' and detected == 'english':
                                # Extract first 50 chars for context
                                preview = value[:50] + '...' if len(value) > 50 else value
                                self.errors.append(
                                    f"Spanish section contains English text at {path}.{key}: '{preview}'"
                                )
                            elif expected_lang == 'en' and detected == 'spanish':
                                preview = value[:50] + '...' if len(value) > 50 else value
                                self.warnings.append(
                                    f"English section contains Spanish text at {path}.{key}: '{preview}'"
                                )
                    else:
                        check_text_fields(value, f"{path}.{key}", expected_lang)
            elif isinstance(obj, list):
                for idx, item in enumerate(obj):
                    check_text_fields(item, f"{path}[{idx}]", expected_lang)
        
        # Check each language section
        for lang in ['en', 'es']:
            if lang in data:
                check_text_fields(data[lang], lang, lang)
    
    def _check_bilingual_parity(self, data: Dict, filename: str):
        """Check that English and Spanish sections have matching structure"""
        
        if 'en' not in data or 'es' not in data:
            self.warnings.append("Missing English or Spanish section")
            return
        
        # Check sections count
        en_sections = data['en'].get('sections', [])
        es_sections = data['es'].get('sections', [])
        
        if len(en_sections) != len(es_sections):
            self.errors.append(
                f"Section count mismatch: EN has {len(en_sections)}, ES has {len(es_sections)}"
            )
            return
        
        # Check each section has matching structure
        for idx, (en_sec, es_sec) in enumerate(zip(en_sections, es_sections)):
            en_id = en_sec.get('id', f'section-{idx}')
            es_id = es_sec.get('id', f'section-{idx}')
            
            if en_id != es_id:
                self.warnings.append(
                    f"Section {idx} ID mismatch: EN='{en_id}', ES='{es_id}'"
                )
            
            # Check items count
            en_items = en_sec.get('items', [])
            es_items = es_sec.get('items', [])
            
            if len(en_items) != len(es_items):
                self.errors.append(
                    f"Section '{en_id}' item count mismatch: EN has {len(en_items)}, ES has {len(es_items)}"
                )
    
    def _check_required_fields(self, data: Dict, filename: str):
        """Check that all required metadata fields are present"""
        required_root = ['metadata', 'classification', 'targeting', 'conversion', 'seo', 'slugEn', 'slugEs']
        
        for field in required_root:
            if field not in data:
                self.warnings.append(f"Missing required root field: '{field}'")
        
        # Check language sections
        for lang in ['en', 'es']:
            if lang not in data:
                self.errors.append(f"Missing '{lang}' language section")
                continue
            
            required_lang = ['title', 'subtitle', 'description']
            for field in required_lang:
                if field not in data[lang]:
                    self.warnings.append(f"Missing required {lang.upper()} field: '{field}'")
    
    def _check_content_quality(self, data: Dict, filename: str):
        """Check for common content quality issues"""
        
        def check_text_quality(text: str, path: str):
            if not isinstance(text, str):
                return
            
            # Check for placeholder text
            placeholders = ['TODO', 'TBD', 'FIXME', 'XXX', '[INSERT', '[ADD']
            for placeholder in placeholders:
                # Only flag standalone tokens, not substrings inside real words
                # e.g. avoid flagging 'método' (METODO) as containing 'TODO'
                if re.search(r"\\b" + re.escape(placeholder) + r"\\b", text.upper()):
                    self.warnings.append(f"Placeholder text found at {path}: '{placeholder}'")
            
            # Check for excessive length (likely copy-paste errors)
            if len(text) > 5000:
                self.warnings.append(f"Unusually long text at {path} ({len(text)} chars)")
            
            # Check for empty strings
            if text.strip() == '':
                self.warnings.append(f"Empty string at {path}")
        
        def check_object(obj: Any, path: str):
            if isinstance(obj, dict):
                for key, value in obj.items():
                    if isinstance(value, str):
                        check_text_quality(value, f"{path}.{key}")
                    else:
                        check_object(value, f"{path}.{key}")
            elif isinstance(obj, list):
                for idx, item in enumerate(obj):
                    check_object(item, f"{path}[{idx}]")
        
        check_object(data, 'root')


def main():
    """Run audit on all resource JSON files"""
    auditor = ResourceAuditor()
    
    # Find all JSON files
    data_dir = Path('src/data/free')
    json_files = [f for f in data_dir.glob('*.json') if f.name != 'schema.json']
    
    print("\n" + "="*60)
    print("📋 COMPREHENSIVE JSON RESOURCE AUDIT")
    print("="*60 + "\n")
    
    results = []
    for filepath in sorted(json_files):
        result = auditor.audit_file(filepath)
        results.append(result)
        
        # Print results
        if result['valid']:
            print(f"✅ {result['file']}")
        else:
            print(f"❌ {result['file']}")
            for error in result['errors']:
                print(f"  ❌ {error}")
        
        # Show warnings
        if result['warnings']:
            for warning in result['warnings']:
                print(f"  ⚠️  {warning}")
    
    # Summary
    print("\n" + "="*60)
    print("SUMMARY")
    print("="*60)
    
    valid_count = sum(1 for r in results if r['valid'])
    total_errors = sum(len(r['errors']) for r in results)
    total_warnings = sum(len(r['warnings']) for r in results)
    
    print(f"Total Files: {len(results)}")
    print(f"✅ Valid: {valid_count}")
    print(f"❌ Invalid: {len(results) - valid_count}")
    print(f"❌ Total Errors: {total_errors}")
    print(f"⚠️  Total Warnings: {total_warnings}")
    
    if valid_count == len(results) and total_warnings == 0:
        print("\n🎉 All files pass audit with no warnings!")
        return 0
    elif valid_count == len(results):
        print("\n✅ All files pass audit (with warnings)")
        return 0
    else:
        print("\n❌ Some files failed audit")
        invalid_files = [r['file'] for r in results if not r['valid']]
        print("\n⚠️  Files needing fixes:")
        for f in invalid_files:
            print(f"   - {f}")
        return 1


if __name__ == '__main__':
    sys.exit(main())
