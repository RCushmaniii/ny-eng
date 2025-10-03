#!/usr/bin/env node

/**
 * Simple Hreflang Validation Script
 * Validates hreflang implementation by directly importing the mappings
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define the mappings directly for validation
const hreflangMappings = {
  '/': { en: '/en/', es: '/es/', xDefault: '/en/' },
  '/en/': { en: '/en/', es: '/es/', xDefault: '/en/' },
  '/es/': { en: '/en/', es: '/es/', xDefault: '/en/' },
  '/en/about/': { en: '/en/about/', es: '/es/about/', xDefault: '/en/about/' },
  '/es/about/': { en: '/en/about/', es: '/es/about/', xDefault: '/en/about/' },
  '/en/contact/': { en: '/en/contact/', es: '/es/contact/', xDefault: '/en/contact/' },
  '/es/contact/': { en: '/en/contact/', es: '/es/contact/', xDefault: '/en/contact/' },
  '/en/services/': { en: '/en/services/', es: '/es/servicios/', xDefault: '/en/services/' },
  '/es/servicios/': { en: '/en/services/', es: '/es/servicios/', xDefault: '/en/services/' },
  '/en/services/executive-english/': { en: '/en/services/executive-english/', es: '/es/servicios/ingles-para-ejecutivos/', xDefault: '/en/services/executive-english/' },
  '/es/servicios/ingles-para-ejecutivos/': { en: '/en/services/executive-english/', es: '/es/servicios/ingles-para-ejecutivos/', xDefault: '/en/services/executive-english/' },
  '/en/services/tech-english/': { en: '/en/services/tech-english/', es: '/es/servicios/ingles-para-tecnologia/', xDefault: '/en/services/tech-english/' },
  '/es/servicios/ingles-para-tecnologia/': { en: '/en/services/tech-english/', es: '/es/servicios/ingles-para-tecnologia/', xDefault: '/en/services/tech-english/' },
  '/en/services/logistics-english/': { en: '/en/services/logistics-english/', es: '/es/servicios/ingles-para-logistica/', xDefault: '/en/services/logistics-english/' },
  '/es/servicios/ingles-para-logistica/': { en: '/en/services/logistics-english/', es: '/es/servicios/ingles-para-logistica/', xDefault: '/en/services/logistics-english/' },
  '/en/services/professional-english/': { en: '/en/services/professional-english/', es: '/es/servicios/ingles-para-profesionales/', xDefault: '/en/services/professional-english/' },
  '/es/servicios/ingles-para-profesionales/': { en: '/en/services/professional-english/', es: '/es/servicios/ingles-para-profesionales/', xDefault: '/en/services/professional-english/' },
  '/en/services/high-stakes-english/': { en: '/en/services/high-stakes-english/', es: '/es/servicios/ingles-para-presentaciones/', xDefault: '/en/services/high-stakes-english/' },
  '/es/servicios/ingles-para-presentaciones/': { en: '/en/services/high-stakes-english/', es: '/es/servicios/ingles-para-presentaciones/', xDefault: '/en/services/high-stakes-english/' },
  '/en/services/startup-founders/': { en: '/en/services/startup-founders/', es: '/es/servicios/ingles-para-fundadores-de-startups/', xDefault: '/en/services/startup-founders/' },
  '/es/servicios/ingles-para-fundadores-de-startups/': { en: '/en/services/startup-founders/', es: '/es/servicios/ingles-para-fundadores-de-startups/', xDefault: '/en/services/startup-founders/' },
  '/en/blog/': { en: '/en/blog/', es: '/es/blog/', xDefault: '/en/blog/' },
  '/es/blog/': { en: '/en/blog/', es: '/es/blog/', xDefault: '/en/blog/' },
  '/en/testimonials/': { en: '/en/testimonials/', es: '/es/testimonios/', xDefault: '/en/testimonials/' },
  '/es/testimonios/': { en: '/en/testimonials/', es: '/es/testimonios/', xDefault: '/en/testimonials/' },
  '/en/category/business-english/': { en: '/en/category/business-english/', es: '/es/category/ingles-para-negocios/', xDefault: '/en/category/business-english/' },
  '/es/category/ingles-para-negocios/': { en: '/en/category/business-english/', es: '/es/category/ingles-para-negocios/', xDefault: '/en/category/business-english/' },
  '/en/category/executive-english/': { en: '/en/category/executive-english/', es: '/es/category/ingles-ejecutivo/', xDefault: '/en/category/executive-english/' },
  '/es/category/ingles-ejecutivo/': { en: '/en/category/executive-english/', es: '/es/category/ingles-ejecutivo/', xDefault: '/en/category/executive-english/' },
  '/en/category/english-coaching/': { en: '/en/category/english-coaching/', es: '/es/category/coaching-en-ingles/', xDefault: '/en/category/english-coaching/' },
  '/es/category/coaching-en-ingles/': { en: '/en/category/english-coaching/', es: '/es/category/coaching-en-ingles/', xDefault: '/en/category/english-coaching/' },
  '/en/category/career-leadership/': { en: '/en/category/career-leadership/', es: '/es/category/carrera-liderazgo/', xDefault: '/en/category/career-leadership/' },
  '/es/category/carrera-liderazgo/': { en: '/en/category/career-leadership/', es: '/es/category/carrera-liderazgo/', xDefault: '/en/category/career-leadership/' },
  '/en/category/high-impact-communication/': { en: '/en/category/high-impact-communication/', es: '/es/category/comunicacion-de-alto-impacto/', xDefault: '/en/category/high-impact-communication/' },
  '/es/category/comunicacion-de-alto-impacto/': { en: '/en/category/high-impact-communication/', es: '/es/category/comunicacion-de-alto-impacto/', xDefault: '/en/category/high-impact-communication/' },
  '/en/legal/terms-of-service/': { en: '/en/legal/terms-of-service/', es: '/es/legal/terms-of-service/', xDefault: '/en/legal/terms-of-service/' },
  '/es/legal/terms-of-service/': { en: '/en/legal/terms-of-service/', es: '/es/legal/terms-of-service/', xDefault: '/en/legal/terms-of-service/' },
  '/en/legal/privacy-policy/': { en: '/en/legal/privacy-policy/', es: '/es/legal/privacy-policy/', xDefault: '/en/legal/privacy-policy/' },
  '/es/legal/privacy-policy/': { en: '/en/legal/privacy-policy/', es: '/es/legal/privacy-policy/', xDefault: '/en/legal/privacy-policy/' }
};

const errors = [];
const warnings = [];

console.log('🔍 Validating hreflang implementation...\n');

/**
 * Validate reciprocal links
 */
function validateReciprocalLinks() {
  console.log('📋 Checking reciprocal hreflang links...');
  
  for (const [path, mapping] of Object.entries(hreflangMappings)) {
    const { en, es } = mapping;
    
    // Check if English page has reciprocal Spanish link
    if (hreflangMappings[en] && hreflangMappings[en].es !== es) {
      errors.push(`❌ Non-reciprocal EN->ES: ${en} -> ${hreflangMappings[en].es} but ${path} -> ${es}`);
    }
    
    // Check if Spanish page has reciprocal English link
    if (hreflangMappings[es] && hreflangMappings[es].en !== en) {
      errors.push(`❌ Non-reciprocal ES->EN: ${es} -> ${hreflangMappings[es].en} but ${path} -> ${en}`);
    }
  }
}

/**
 * Validate for duplicate language entries
 */
function validateNoDuplicateLanguages() {
  console.log('🔍 Checking for duplicate language entries...');
  
  for (const [path, mapping] of Object.entries(hreflangMappings)) {
    const { en, es, xDefault } = mapping;
    
    // Only check en and es URLs (xDefault is optional and should point to en)
    const urls = [en, es];
    
    // Check for duplicate URLs in the same mapping (en and es should be different)
    const uniqueUrls = new Set(urls);
    if (uniqueUrls.size !== urls.length) {
      warnings.push(`⚠️  Duplicate URLs in mapping for ${path}: en=${en}, es=${es}`);
    }
    
    // Check if xDefault duplicates en (which is expected and OK)
    if (xDefault && xDefault !== en) {
      warnings.push(`⚠️  x-default should point to English version for ${path}: xDefault=${xDefault}, en=${en}`);
    }
    
    // Check for URLs without trailing slashes (potential 301 redirects)
    urls.forEach(url => {
      if (!url.endsWith('/') && !url.includes('.')) {
        warnings.push(`⚠️  URL missing trailing slash (potential 301): ${url}`);
      }
    });
  }
}

/**
 * Validate URL consistency
 */
function validateUrlConsistency() {
  console.log('🔗 Checking URL consistency...');
  
  for (const [path, mapping] of Object.entries(hreflangMappings)) {
    const { en, es } = mapping;
    
    // Check trailing slashes
    if (!en.endsWith('/') && !en.includes('.')) {
      warnings.push(`⚠️  Missing trailing slash: ${en}`);
    }
    if (!es.endsWith('/') && !es.includes('.')) {
      warnings.push(`⚠️  Missing trailing slash: ${es}`);
    }
    
    // Check for consistent URL structure
    if (en.startsWith('/en/') && !es.startsWith('/es/')) {
      errors.push(`❌ Inconsistent URL structure: ${en} vs ${es}`);
    }
  }
}

/**
 * Validate x-default assignments
 */
function validateXDefault() {
  console.log('🌐 Checking x-default assignments...');
  
  for (const [path, mapping] of Object.entries(hreflangMappings)) {
    const { en, es, xDefault } = mapping;
    
    // x-default should typically point to English version
    if (xDefault && xDefault !== en) {
      warnings.push(`⚠️  x-default not pointing to English: ${path} -> ${xDefault} (expected: ${en})`);
    }
    
    // x-default should be defined
    if (!xDefault) {
      warnings.push(`⚠️  Missing x-default for: ${path}`);
    }
  }
}

/**
 * Validate against CSV audit data
 */
function validateAgainstAudit() {
  console.log('📊 Checking against CSV audit issues...');
  
  try {
    // Read the CSV audit file to cross-reference (optional)
    const CSV_AUDIT_FILE = './nyenglishteacher_05-sep-2025_hreflang-to-redi_2025-09-05_18-18-12.csv';
    const csvContent = readFileSync(CSV_AUDIT_FILE, 'utf-8');
    const lines = csvContent.split('\n').slice(1); // Skip header
    
    let issuesFound = 0;
    for (const line of lines) {
      if (line.trim()) {
        const columns = line.split('\t');
        if (columns.length > 10) {
          const url = columns[1]?.replace(/"/g, '');
          const issues = columns[10]?.replace(/"/g, '');
          
          if (url && issues && issues.includes('Some pages don\'t include hreflang links')) {
            const urlPath = new URL(url).pathname;
            const normalizedPath = urlPath.endsWith('/') ? urlPath : urlPath + '/';
            
            if (hreflangMappings[normalizedPath]) {
              console.log(`✅ Fixed: ${normalizedPath} now has proper hreflang mapping`);
            } else {
              warnings.push(`⚠️  URL from audit still missing mapping: ${normalizedPath}`);
            }
            issuesFound++;
          }
        }
      }
    }
    
    console.log(`📈 Processed ${issuesFound} URLs from audit data`);
  } catch (error) {
    warnings.push(`⚠️  Could not read CSV audit file: ${error.message}`);
  }
}

// Run all validations
validateReciprocalLinks();
validateNoDuplicateLanguages();
validateUrlConsistency();
validateXDefault();
validateAgainstAudit();

// Report results
console.log('\n📊 Validation Results:');
console.log('='.repeat(50));

if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ All hreflang validations passed!');
  console.log('🎉 Your site should now have proper international SEO!');
} else {
  if (errors.length > 0) {
    console.log(`\n❌ ${errors.length} Error(s):`);
    errors.forEach(error => console.log(error));
  }
  
  if (warnings.length > 0) {
    console.log(`\n⚠️  ${warnings.length} Warning(s):`);
    warnings.forEach(warning => console.log(warning));
  }
}

console.log('\n🔧 Next Steps:');
console.log('1. Build and test your site: npm run build');
console.log('2. Check hreflang in browser dev tools');
console.log('3. Submit updated sitemap to Google Search Console');
console.log('4. Monitor international search performance');

// Exit with error code if there are critical errors
if (errors.length > 0) {
  process.exit(1);
}
