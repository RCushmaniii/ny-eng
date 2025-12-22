"""
Generate PDFs for all free resources
Reads all JSON files from src/data/free/ and generates corresponding PDFs.
STRICT VERSION: Assumes all JSON files comply with the 'StandardItem' schema.
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT
import os
import json
import glob

# Paths
SCRIPT_DIR = os.path.dirname(__file__)
ROOT_DIR = os.path.join(SCRIPT_DIR, '..')
DATA_DIR = os.path.join(ROOT_DIR, 'src', 'data', 'free')
OUTPUT_DIR = os.path.join(ROOT_DIR, 'public', 'assets', 'documents')

# Ensure output directory exists
os.makedirs(OUTPUT_DIR, exist_ok=True)

def get_styles():
    """Define consistent PDF styles"""
    styles = getSampleStyleSheet()
    
    return {
        'Title': ParagraphStyle('CustomTitle', parent=styles['Heading1'], fontSize=24, textColor=colors.HexColor('#0f172a'), spaceAfter=6, alignment=TA_CENTER, fontName='Helvetica-Bold'),
        'Subtitle': ParagraphStyle('CustomSubtitle', parent=styles['Normal'], fontSize=14, textColor=colors.HexColor('#64748b'), spaceAfter=20, alignment=TA_CENTER, fontName='Helvetica'),
        'SectionTitle': ParagraphStyle('SectionTitle', parent=styles['Heading2'], fontSize=16, textColor=colors.HexColor('#0f172a'), spaceAfter=12, spaceBefore=20, fontName='Helvetica-Bold'),
        'Heading3': ParagraphStyle('Heading3', parent=styles['Heading3'], fontSize=13, textColor=colors.HexColor('#0f172a'), spaceAfter=8, fontName='Helvetica-Bold'),
        'Body': ParagraphStyle('Body', parent=styles['Normal'], fontSize=11, textColor=colors.HexColor('#334155'), spaceAfter=12, leading=16),
        'Label': ParagraphStyle('Label', parent=styles['Normal'], fontSize=9, textColor=colors.HexColor('#475569'), spaceAfter=2, fontName='Helvetica-Bold'),
        'Detail': ParagraphStyle('Detail', parent=styles['Normal'], fontSize=10, textColor=colors.HexColor('#334155'), spaceAfter=8, leading=14),
        'Footer': ParagraphStyle('Footer', parent=styles['Normal'], fontSize=9, textColor=colors.HexColor('#64748b'), alignment=TA_CENTER),
        'Number': ParagraphStyle('Number', fontSize=36, textColor=colors.HexColor('#cbd5e1'), fontName='Times-Roman', spaceAfter=2)
    }

def create_language_badge(lang_name):
    """Create a language badge paragraph"""
    return Paragraph(
        f"<b>{lang_name}</b>",
        ParagraphStyle(
            'LangLabel',
            fontSize=10,
            textColor=colors.white,
            backColor=colors.HexColor('#2563eb'),
            borderPadding=6,
            alignment=TA_CENTER,
            fontName='Helvetica-Bold',
            spaceAfter=20
        )
    )

def render_example_block(example_data, elements, styles):
    """Renders the standard example object"""
    if not example_data:
        return

    # Case A: Complex Dictionary (Wrong/Right/Why)
    if isinstance(example_data, dict):
        if example_data.get('wrong'):
            elements.append(Paragraph("❌ AVOID / INCORRECTO", styles['Label']))
            elements.append(Paragraph(example_data['wrong'], styles['Detail']))
        
        if example_data.get('right'):
            elements.append(Paragraph("✅ BETTER / CORRECTO", styles['Label']))
            elements.append(Paragraph(example_data['right'], styles['Detail']))
            
        if example_data.get('why'):
            elements.append(Paragraph("💡 WHY / POR QUÉ", styles['Label']))
            elements.append(Paragraph(example_data['why'], styles['Detail']))

    # Case B: Simple String
    elif isinstance(example_data, str):
        elements.append(Paragraph("📝 EXAMPLE / EJEMPLO", styles['Label']))
        elements.append(Paragraph(example_data, styles['Detail']))

def render_items(items, elements, styles):
    """Iterates through a list of Standard Items"""
    for item in items:
        
        # Handle simple string list (fallback)
        if isinstance(item, str):
            elements.append(Paragraph(f"• {item}", styles['Body']))
            elements.append(Spacer(1, 0.1 * inch))
            continue
        
        item_block = []

        # 1. Number
        if item.get('number'):
            item_block.append(Paragraph(f"{item.get('number'):02d}", styles['Number']))

        # 2. Title (The Universal Header)
        if item.get('title'):
            # If it looks like dialogue or a phrase, add quotes
            text = item['title']
            if item.get('phrase'): # Logic for specific emphasis
                text = f'"{text}"'
            item_block.append(Paragraph(text, styles['Heading3']))
        elif item.get('phrase'):
             item_block.append(Paragraph(f'"{item["phrase"]}"', styles['Heading3']))

        # 3. Content (The Universal Body)
        if item.get('content'):
            item_block.append(Paragraph(item['content'], styles['Body']))

        # 4. Context Fields (Standard Keys)
        if item.get('situation'):
            item_block.append(Paragraph("📍 SITUATION", styles['Label']))
            item_block.append(Paragraph(item['situation'], styles['Detail']))
        
        if item.get('when'):
            item_block.append(Paragraph("⏰ WHEN TO USE", styles['Label']))
            item_block.append(Paragraph(item['when'], styles['Detail']))

        if item.get('why'):
            item_block.append(Paragraph("🧠 WHY IT WORKS", styles['Label']))
            item_block.append(Paragraph(item['why'], styles['Detail']))

        # 5. Action Item (The Fix/Task)
        if item.get('actionItem'):
            item_block.append(Paragraph("🚀 ACTION / THE FIX", styles['Label']))
            item_block.append(Paragraph(item['actionItem'], styles['Detail']))

        # 6. Variations
        if item.get('variations'):
            item_block.append(Paragraph("🔀 VARIATIONS", styles['Label']))
            vars_data = item['variations']
            if isinstance(vars_data, list):
                for var in vars_data:
                    item_block.append(Paragraph(f"• {var}", styles['Detail']))
            else:
                item_block.append(Paragraph(str(vars_data), styles['Detail']))

        # 7. Do Not Say / Say This
        if item.get('doNotSay'):
            item_block.append(Paragraph("🚫 AVOID", styles['Label']))
            item_block.append(Paragraph(item['doNotSay'], styles['Detail']))

        if item.get('howToSay'):
            item_block.append(Paragraph("🗣️ SAY THIS", styles['Label']))
            item_block.append(Paragraph(item['howToSay'], styles['Detail']))

        # 8. Example Block (Only looks for 'example')
        if item.get('example'):
            render_example_block(item['example'], item_block, styles)

        item_block.append(Spacer(1, 0.15 * inch))
        elements.extend(item_block)

def render_content_structure(data_node, elements, styles, lang_label):
    """Recursively renders a language node (en or es)."""
    if not data_node:
        return

    # Language Badge
    elements.append(create_language_badge(lang_label))

    # 1. Main Title & Subtitle
    if data_node.get('title'):
        elements.append(Paragraph(data_node['title'], styles['Title']))
    if data_node.get('subtitle'):
        elements.append(Paragraph(data_node['subtitle'], styles['Subtitle']))

    # 2. Intro
    intro = data_node.get('intro')
    if intro:
        if isinstance(intro, dict):
            if intro.get('line1') or intro.get('line2'):
                txt = f"{intro.get('line1', '')} <b>{intro.get('line2', '')}</b>"
                elements.append(Paragraph(txt, styles['Body']))
            if intro.get('paragraph'):
                elements.append(Paragraph(intro['paragraph'], styles['Body']))
        elif isinstance(intro, str):
             elements.append(Paragraph(intro, styles['Body']))
        elements.append(Spacer(1, 0.2 * inch))

    # 3. Description
    if data_node.get('description'):
        elements.append(Paragraph(data_node['description'], styles['Body']))
        elements.append(Spacer(1, 0.2 * inch))

    # 4. Standard Sections (Only looks for 'sections' -> 'items')
    sections = data_node.get('sections', [])
    for section in sections:
        if section.get('id') == 'intro':
            continue

        if section.get('title'):
            elements.append(Paragraph(section['title'], styles['SectionTitle']))

        # Section Content
        sec_content = section.get('content')
        if sec_content:
            if isinstance(sec_content, list):
                for para in sec_content:
                    elements.append(Paragraph(para, styles['Body']))
            elif isinstance(sec_content, str):
                elements.append(Paragraph(sec_content, styles['Body']))
            elements.append(Spacer(1, 0.1 * inch))

        # Strict Item Rendering
        if section.get('items'):
            render_items(section['items'], elements, styles)

    # 5. Legacy support (Optional: remove if migration is 100% perfect)
    if data_node.get('questions'):
        render_items(data_node['questions'], elements, styles)

def generate_resource_pdf(content, output_path, styles):
    """Main driver for PDF generation"""
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=0.75*inch, leftMargin=0.75*inch,
        topMargin=0.75*inch, bottomMargin=0.75*inch
    )
    
    elements = []
    
    if content.get('en'):
        render_content_structure(content['en'], elements, styles, "ENGLISH")
    
    if content.get('es'):
        elements.append(PageBreak())
        render_content_structure(content['es'], elements, styles, "ESPAÑOL")
        
    elements.append(Spacer(1, 0.3*inch))
    elements.append(Paragraph("nyenglishteacher.com", styles['Footer']))
    
    doc.build(elements)

def process_all_resources():
    styles = get_styles()
    json_files = glob.glob(os.path.join(DATA_DIR, '*.json'))
    json_files = [f for f in json_files if not f.endswith('schema.json')]
    
    print(f"\n📄 Generating PDFs for {len(json_files)} resources...\n")
    
    generated_count = 0
    skipped_count = 0
    
    for json_file in json_files:
        filename = os.path.basename(json_file)
        slug = filename.replace('.json', '')
        output_path = os.path.join(OUTPUT_DIR, f"{slug}.pdf")
        
        try:
            with open(json_file, 'r', encoding='utf-8') as f:
                content = json.load(f)
            
            if not content.get('en'):
                print(f"⏭️  Skipped: {slug} (missing content)")
                skipped_count += 1
                continue
            
            # Generate
            generate_resource_pdf(content, output_path, styles)
            
            # Verify and Log
            if os.path.exists(output_path):
                file_size = os.path.getsize(output_path)
                size_kb = file_size / 1024
                
                if file_size < 2000: 
                    print(f"❌ ERROR: {slug}.pdf is suspicious ({size_kb:.1f} KB). Check JSON.")
                    skipped_count += 1
                else:
                    print(f"✅ Generated: {slug}.pdf ({size_kb:.1f} KB)")
                    generated_count += 1
            else:
                print(f"❌ Failed to write: {slug}.pdf")
                skipped_count += 1
                
        except Exception as e:
            print(f"❌ Exception on {filename}: {str(e)}")
            skipped_count += 1
            
    print(f"\n📊 Summary:")
    print(f"   ✅ Generated: {generated_count} PDFs")
    print(f"   ⏭️  Skipped: {skipped_count} files")
    print(f"   📁 Output: {OUTPUT_DIR}\n")

if __name__ == "__main__":
    process_all_resources()
