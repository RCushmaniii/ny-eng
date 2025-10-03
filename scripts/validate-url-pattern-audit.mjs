/**
 * URL Pattern-Based Sitemap Audit Tool for New York English Teacher
 * 
 * This script takes a different approach by focusing on URL patterns and symmetry
 * between English and Spanish versions of the site.
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

// For glob pattern matching
let glob;
try {
  const require = createRequire(import.meta.url);
  glob = require('glob');
} catch (error) {
  console.error("The 'glob' package is required. Please install it with: npm install glob");
  process.exit(1);
}

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(process.cwd(), ".");

// ANSI color codes for console output
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  bold: "\x1b[1m"
};

// Known URL patterns that should have English/Spanish equivalents
const urlPatterns = [
  // Static pages
  { en: '/en/', es: '/es/' },
  { en: '/en/about/', es: '/es/about/' },
  { en: '/en/services/', es: '/es/servicios/' },
  { en: '/en/testimonials/', es: '/es/testimonios/' },
  { en: '/en/blog/', es: '/es/blog/' },
  { en: '/en/contact/', es: '/es/contact/' },
  
  // Service pages
  { en: '/en/services/executive-english/', es: '/es/servicios/ingles-para-ejecutivos/' },
  { en: '/en/services/startup-founders/', es: '/es/servicios/ingles-para-fundadores-de-startups/' },
  { en: '/en/services/tech-english/', es: '/es/servicios/ingles-para-tecnologia/' },
  { en: '/en/services/logistics-english/', es: '/es/servicios/ingles-para-logistica/' },
  { en: '/en/services/professional-english/', es: '/es/servicios/ingles-para-profesionales/' },
  { en: '/en/services/high-stakes-english/', es: '/es/servicios/ingles-para-presentaciones/' },
  
  // Blog posts
  { en: '/en/blog/managers-lose-millions/', es: '/es/blog/por-que-los-gerentes-de-ti-en-mexico-pierden-clientes/' },
  { en: '/en/blog/4-secrets-executives-use/', es: '/es/blog/4-secretos-que-usan-los-ejecutivos/' },
  { en: '/en/blog/small-talk-to-smart-talk/', es: '/es/blog/charla-pequena-habla-inteligente/' },
  { en: '/en/blog/5-practical-ways-to-boost-business-english/', es: '/es/blog/5-formas-practicas-mejorar-ingles-negocios/' },
  { en: '/en/blog/executive-english-coaching/', es: '/es/blog/coaching-ejecutivo/' },
  { en: '/en/blog/boost-eng-confidence/', es: '/es/blog/aumentar-confianza/' },
  { en: '/en/blog/master-business-english/', es: '/es/blog/dominar-negocios/' },
  
  // Categories
  { en: '/en/category/business-english/', es: '/es/category/business-english/' },
  { en: '/en/category/high-impact-communication/', es: '/es/category/high-impact-communication/' },
  { en: '/en/category/career-leadership/', es: '/es/category/career-leadership/' },
  { en: '/en/category/english-coaching/', es: '/es/category/english-coaching/' },
  { en: '/en/category/executive-english/', es: '/es/category/executive-english/' },
  
  // Legal pages
  { en: '/en/legal/terms-of-service/', es: '/es/legal/terms-of-service/' },
  { en: '/en/legal/privacy-policy/', es: '/es/legal/privacy-policy/' }
];

/**
 * Verifies URLs by mapping them to file paths and checking existence
 */
async function auditUrlPatterns() {
  console.log(`\n${colors.cyan}${colors.bold}=== NEW YORK ENGLISH TEACHER URL PATTERN AUDIT ===${colors.reset}\n`);
  console.log(`Project root: ${projectRoot}\n`);
  
  let issues = 0;
  let success = 0;
  
  // Map URL patterns to file paths
  console.log(`${colors.magenta}${colors.bold}[1] AUDITING URL PATTERNS${colors.reset}`);
  console.log(`${colors.blue}Checking symmetry between English and Spanish URLs...${colors.reset}\n`);
  
  for (const pattern of urlPatterns) {
    // Convert URL patterns to file paths
    // First normalize by removing leading slash and trailing slash
    let enPath = pattern.en.replace(/^\//, '').replace(/\/$/, '');
    let esPath = pattern.es.replace(/^\//, '').replace(/\/$/, '');
    
    // Special case for root
    if (enPath === 'en' && esPath === 'es') {
      enPath = 'src/pages/en/index.astro';
      esPath = 'src/pages/es/index.astro';
    } else {
      // For blog posts and other content-based pages
      if (enPath.includes('blog/') && !enPath.includes('category')) {
        // Extract slug
        const enSlug = enPath.split('/').pop();
        const esSlug = esPath.split('/').pop();
        
        enPath = `src/content/blog/en/${enSlug}.md`;
        esPath = `src/content/blog/es/${esSlug}.md`;
      } 
      // For category pages
      else if (enPath.includes('category/')) {
        // Extract category slug
        const catSlug = enPath.split('/').pop();
        const esCatSlug = esPath.split('/').pop();
        
        // Categories are likely in data files, we'll check both
        enPath = `src/pages/en/category/[slug].astro`;
        esPath = `src/pages/es/category/[slug].astro`;
        
        // Also check if category exists in categories.ts
        try {
          const catFile = await fs.readFile(path.join(projectRoot, 'src/data/categories.ts'), 'utf-8');
          const hasEnCat = catFile.includes(`slug: '${catSlug}'`);
          const hasEsCat = catFile.includes(`esSlug: '${esCatSlug}'`);
          
          if (!hasEnCat || !hasEsCat) {
            console.log(`${colors.yellow}⚠️ CATEGORY DATA CHECK: ${colors.reset}Category ${catSlug}/${esCatSlug} may be missing in categories.ts`);
          }
        } catch (err) {
          console.log(`${colors.yellow}⚠️ CATEGORY CHECK: ${colors.reset}Could not verify category in data file`);
        }
      }
      // For service pages
      else if (enPath.includes('services/')) {
        // Extract service slug
        const enServiceSlug = enPath.split('/').pop();
        const esServiceSlug = esPath.split('/').pop();
        
        // Check both formats - static pages and content collection
        if (await fileExists(path.join(projectRoot, `src/pages/${enPath}.astro`))) {
          enPath = `src/pages/${enPath}.astro`;
          esPath = `src/pages/${esPath}.astro`;
        } else {
          // Might be in content collection
          enPath = `src/content/services/en/${enServiceSlug}.md`;
          esPath = `src/content/services/es/${esServiceSlug}.md`;
        }
      }
      // For other static pages
      else {
        enPath = `src/pages/${enPath}.astro`;
        esPath = `src/pages/${esPath}.astro`;
      }
    }
    
    // Check file existence
    const enExists = await fileExists(path.join(projectRoot, enPath));
    const esExists = await fileExists(path.join(projectRoot, esPath));
    
    if (enExists && esExists) {
      console.log(`${colors.green}✓ SYMMETRICAL: ${colors.reset}${pattern.en} ↔ ${pattern.es}`);
      success++;
      
      // Check if translation links exist in content files
      if (enPath.endsWith('.md') && esPath.endsWith('.md')) {
        try {
          const enContent = await fs.readFile(path.join(projectRoot, enPath), 'utf-8');
          const esContent = await fs.readFile(path.join(projectRoot, esPath), 'utf-8');
          
          const hasEnTranslation = enContent.includes(`es: "${pattern.es}"`) || enContent.includes(`es: '${pattern.es}'`);
          const hasEsTranslation = esContent.includes(`en: "${pattern.en}"`) || esContent.includes(`en: '${pattern.en}'`);
          
          if (!hasEnTranslation || !hasEsTranslation) {
            console.log(`  ${colors.yellow}⚠️ TRANSLATION LINKS: ${colors.reset}Files exist but may have incorrect translation links`);
          }
        } catch (err) {
          // File read error, don't need to handle specifically
        }
      }
    } else {
      if (!enExists) {
        console.log(`${colors.red}❌ MISSING EN: ${colors.reset}${pattern.en} (${enPath} not found)`);
        issues++;
      }
      if (!esExists) {
        console.log(`${colors.red}❌ MISSING ES: ${colors.reset}${pattern.es} (${esPath} not found)`);
        issues++;
      }
    }
  }
  
  // Check for common patterns in astro pages
  await checkCommonPatterns();
  
  // Print summary
  printSummary(issues, success);
}

/**
 * Check for common patterns that should match across language versions
 */
async function checkCommonPatterns() {
  console.log(`\n${colors.magenta}${colors.bold}[2] CHECKING FOR LANGUAGE SWITCHER CONSISTENCY${colors.reset}`);
  
  // Check for language switcher in layouts
  try {
    const layoutFiles = glob.sync(path.join(projectRoot, 'src/layouts/*.astro'));
    let hasLangSwitcher = false;
    
    for (const file of layoutFiles) {
      const content = await fs.readFile(file, 'utf-8');
      if (content.includes('language-switcher') || content.includes('languageSwitcher')) {
        console.log(`${colors.green}✓ LANGUAGE SWITCHER: ${colors.reset}Found in ${path.basename(file)}`);
        hasLangSwitcher = true;
      }
    }
    
    if (!hasLangSwitcher) {
      console.log(`${colors.yellow}⚠️ LANGUAGE SWITCHER: ${colors.reset}Could not find language switcher component in layout files`);
    }
  } catch (err) {
    console.log(`${colors.yellow}⚠️ LAYOUT CHECK: ${colors.reset}Could not verify layouts`);
  }
}

/**
 * Helper function to check if file exists
 */
async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Print summary report
 */
function printSummary(issues, success) {
  console.log(`\n${colors.cyan}${colors.bold}=== URL PATTERN AUDIT SUMMARY ===${colors.reset}\n`);
  
  const total = issues + success;
  const percentage = ((success / total) * 100).toFixed(1);
  
  if (issues === 0) {
    console.log(`${colors.green}${colors.bold}✓ PERFECT SYMMETRY! ${colors.reset}All ${total} URL patterns have proper bilingual versions.`);
  } else {
    console.log(`${colors.yellow}Found ${issues} URL pattern issues out of ${total} checked (${percentage}% complete).${colors.reset}`);
    console.log(`${colors.green}Successfully verified: ${success} URL patterns${colors.reset}`);
    console.log(`${colors.yellow}Issues found: ${issues} URL patterns${colors.reset}`);
    
    console.log(`\n${colors.yellow}Please fix these issues before generating your final sitemap.${colors.reset}`);
  }
  
  console.log(`\n${colors.cyan}${colors.bold}=== URL PATTERN AUDIT COMPLETE ===${colors.reset}\n`);
}

// Run the audit
auditUrlPatterns().catch(error => {
  console.error(`${colors.red}Audit failed with error:${colors.reset}`, error);
});
