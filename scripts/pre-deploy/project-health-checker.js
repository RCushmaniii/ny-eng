#!/usr/bin/env node

/**
 * Project Health Checker
 * 
 * Validates project-wide health before deployment:
 * - License and documentation files
 * - Configuration integrity (tsconfig, astro.config, etc)
 * - Dependency lockfile presence
 * - Security files and patterns
 * - Free assets JSON schema compliance
 * - Bilingual content parity
 * - Environment configuration
 * 
 * Run: node scripts/pre-deploy/project-health-checker.js
 * 
 * @version 1.0.0
 * @updated 2025-01-10
 */

import { existsSync, readFileSync, statSync, readdirSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = resolve(fileURLToPath(import.meta.url), '..');
const rootDir = resolve(__dirname, '../..');

// ANSI colors
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

class ProjectHealthChecker {
  constructor() {
    this.results = [];
    this.startTime = Date.now();
  }

  /**
   * Add a check result
   */
  addResult(name, passed, message, severity = 'error') {
    this.results.push({ name, passed, message, severity });
  }

  /**
   * Check if file exists
   */
  checkFileExists(filePath, description, required = true) {
    const fullPath = join(rootDir, filePath);
    const exists = existsSync(fullPath);
    
    this.addResult(
      description,
      exists,
      exists ? `✓ ${filePath}` : `✗ ${filePath} missing`,
      required ? 'error' : 'warning'
    );
    
    return exists;
  }

  /**
   * Check if file is not empty
   */
  checkFileNotEmpty(filePath, description) {
    const fullPath = join(rootDir, filePath);
    
    if (!existsSync(fullPath)) {
      this.addResult(description, false, `✗ ${filePath} not found`, 'error');
      return false;
    }
    
    const stats = statSync(fullPath);
    const isEmpty = stats.size === 0;
    
    this.addResult(
      description,
      !isEmpty,
      isEmpty ? `✗ ${filePath} is empty` : `✓ ${filePath} has content`,
      'error'
    );
    
    return !isEmpty;
  }

  /**
   * Check package.json integrity
   */
  checkPackageJson() {
    const pkgPath = join(rootDir, 'package.json');
    
    if (!existsSync(pkgPath)) {
      this.addResult('package.json', false, '✗ package.json not found', 'error');
      return;
    }
    
    try {
      const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
      
      // Check required fields
      const requiredFields = ['name', 'version', 'scripts'];
      for (const field of requiredFields) {
        const exists = field in pkg;
        this.addResult(
          `package.json.${field}`,
          exists,
          exists ? `✓ ${field} defined` : `✗ ${field} missing`,
          'error'
        );
      }
      
      // Check required scripts
      const requiredScripts = ['build', 'dev', 'pre-deploy'];
      for (const script of requiredScripts) {
        const exists = pkg.scripts && script in pkg.scripts;
        this.addResult(
          `script: ${script}`,
          exists,
          exists ? `✓ ${script} script exists` : `✗ ${script} script missing`,
          'error'
        );
      }
      
    } catch (error) {
      this.addResult('package.json', false, `✗ Invalid JSON: ${error.message}`, 'error');
    }
  }

  /**
   * Check license file
   */
  checkLicense() {
    const licenseExists = this.checkFileExists('LICENSE', 'License file', true);
    
    if (licenseExists) {
      const licensePath = join(rootDir, 'LICENSE');
      const content = readFileSync(licensePath, 'utf-8');
      const hasContent = content.length > 100;
      
      this.addResult(
        'License content',
        hasContent,
        hasContent ? '✓ License has content' : '⚠ License appears empty',
        'warning'
      );
    }
  }

  /**
   * Check README completeness
   */
  checkReadme() {
    const readmeExists = this.checkFileExists('README.md', 'README.md', true);
    
    if (readmeExists) {
      const readmePath = join(rootDir, 'README.md');
      const content = readFileSync(readmePath, 'utf-8');
      
      const sections = [
        { name: 'Title', pattern: /^#\s+.+/m },
        { name: 'Description', pattern: /.{50,}/m },
      ];
      
      for (const section of sections) {
        const hasSection = section.pattern.test(content);
        this.addResult(
          `README: ${section.name}`,
          hasSection,
          hasSection ? `✓ ${section.name} found` : `⚠ ${section.name} missing`,
          'warning'
        );
      }
    }
  }

  /**
   * Check .gitignore security patterns
   */
  checkGitignore() {
    const gitignoreExists = this.checkFileExists('.gitignore', '.gitignore', true);
    
    if (gitignoreExists) {
      const gitignorePath = join(rootDir, '.gitignore');
      const content = readFileSync(gitignorePath, 'utf-8');
      
      const criticalPatterns = [
        { name: 'node_modules', pattern: /node_modules/ },
        { name: '.env files', pattern: /\.env/ },
        { name: 'build output', pattern: /(dist|build|\.next|out)/ },
      ];
      
      for (const { name, pattern } of criticalPatterns) {
        const hasPattern = pattern.test(content);
        this.addResult(
          `.gitignore: ${name}`,
          hasPattern,
          hasPattern ? `✓ Ignores ${name}` : `✗ Missing ${name}`,
          'error'
        );
      }
    }
  }

  /**
   * Check .env.example (no real secrets)
   */
  checkEnvExample() {
    const envExampleExists = this.checkFileExists('.env.example', '.env.example', false);
    
    if (envExampleExists) {
      const envExamplePath = join(rootDir, '.env.example');
      const content = readFileSync(envExamplePath, 'utf-8');
      
      // Check for real secrets
      const hasRealSecrets = /sk-[a-zA-Z0-9]{20,}|postgres:\/\/.*@.*\.com|mongodb\+srv:\/\/.*:.*@/.test(content);
      this.addResult(
        '.env.example security',
        !hasRealSecrets,
        hasRealSecrets ? '✗ Real secrets found in .env.example!' : '✓ No real secrets',
        hasRealSecrets ? 'error' : 'info'
      );
    }
  }

  /**
   * Check TypeScript config
   */
  checkTypeScriptConfig() {
    const tsconfigExists = this.checkFileExists('tsconfig.json', 'tsconfig.json', false);
    
    if (tsconfigExists) {
      try {
        const tsconfigPath = join(rootDir, 'tsconfig.json');
        const tsconfig = JSON.parse(readFileSync(tsconfigPath, 'utf-8'));
        
        const hasStrict = tsconfig.compilerOptions?.strict === true;
        this.addResult(
          'TypeScript strict mode',
          hasStrict,
          hasStrict ? '✓ Strict mode enabled' : '⚠ Strict mode disabled',
          'info'
        );
      } catch (error) {
        this.addResult('tsconfig.json', false, `✗ Invalid JSON: ${error.message}`, 'warning');
      }
    }
  }

  /**
   * Check Astro config
   */
  checkAstroConfig() {
    const astroConfigExists = existsSync(join(rootDir, 'astro.config.mjs')) ||
                              existsSync(join(rootDir, 'astro.config.ts'));
    
    this.addResult(
      'Astro config',
      astroConfigExists,
      astroConfigExists ? '✓ astro.config exists' : '✗ astro.config missing',
      'error'
    );
  }

  /**
   * Check lockfile presence
   */
  checkLockfile() {
    const lockfileExists = existsSync(join(rootDir, 'pnpm-lock.yaml')) ||
                           existsSync(join(rootDir, 'package-lock.json')) ||
                           existsSync(join(rootDir, 'yarn.lock'));
    
    this.addResult(
      'Lockfile',
      lockfileExists,
      lockfileExists ? '✓ Lockfile exists' : '✗ No lockfile found',
      'error'
    );
  }

  /**
   * Check free assets JSON schema compliance
   */
  checkFreeAssetsSchema() {
    const freeAssetsDir = join(rootDir, 'src/data/free');
    
    if (!existsSync(freeAssetsDir)) {
      this.addResult('Free assets', false, '✗ src/data/free directory not found', 'warning');
      return;
    }
    
    const files = readdirSync(freeAssetsDir).filter(f => f.endsWith('.json') && f !== 'schema.json');
    
    if (files.length === 0) {
      this.addResult('Free assets', false, '✗ No asset files found', 'warning');
      return;
    }
    
    let validAssets = 0;
    const errors = [];
    
    for (const file of files) {
      try {
        const filePath = join(freeAssetsDir, file);
        const content = JSON.parse(readFileSync(filePath, 'utf-8'));
        
        // Check required fields
        const requiredFields = ['metadata', 'classification', 'targeting', 'en', 'es'];
        const hasAllFields = requiredFields.every(field => field in content);
        
        if (!hasAllFields) {
          errors.push(`${file}: missing required fields`);
        } else if (!content.metadata.id || !content.slugEn || !content.slugEs) {
          errors.push(`${file}: missing metadata fields`);
        } else {
          validAssets++;
        }
      } catch (error) {
        errors.push(`${file}: ${error.message}`);
      }
    }
    
    const allValid = errors.length === 0;
    this.addResult(
      'Free assets schema',
      allValid,
      allValid ? `✓ ${validAssets}/${files.length} assets valid` : `✗ ${errors.length} asset(s) invalid`,
      allValid ? 'info' : 'error'
    );
    
    if (errors.length > 0 && errors.length <= 3) {
      errors.forEach(err => console.log(`    ${colors.red}${err}${colors.reset}`));
    }
  }

  /**
   * Check bilingual content parity
   */
  checkBilingualParity() {
    const freeAssetsDir = join(rootDir, 'src/data/free');
    
    if (!existsSync(freeAssetsDir)) {
      return;
    }
    
    const files = readdirSync(freeAssetsDir).filter(f => f.endsWith('.json') && f !== 'schema.json');
    let parityIssues = 0;
    
    for (const file of files) {
      try {
        const filePath = join(freeAssetsDir, file);
        const content = JSON.parse(readFileSync(filePath, 'utf-8'));
        
        // Check that both en and es sections exist
        if (!content.en || !content.es) {
          parityIssues++;
        }
        
        // Check that both have title
        if (!content.en?.title || !content.es?.title) {
          parityIssues++;
        }
      } catch (error) {
        // Already caught in schema check
      }
    }
    
    this.addResult(
      'Bilingual parity',
      parityIssues === 0,
      parityIssues === 0 ? '✓ All assets bilingual' : `✗ ${parityIssues} parity issue(s)`,
      parityIssues === 0 ? 'info' : 'error'
    );
  }

  /**
   * Check i18n routes configuration
   */
  checkI18nRoutes() {
    const i18nPath = join(rootDir, 'src/lib/i18n.ts');
    
    if (!existsSync(i18nPath)) {
      this.addResult('i18n routes', false, '✗ src/lib/i18n.ts not found', 'error');
      return;
    }
    
    try {
      const content = readFileSync(i18nPath, 'utf-8');
      
      // Check for critical route mappings
      const hasEnRoutes = /en:.*{/.test(content);
      const hasEsRoutes = /es:.*{/.test(content);
      
      const allValid = hasEnRoutes && hasEsRoutes;
      this.addResult(
        'i18n routes',
        allValid,
        allValid ? '✓ i18n routes configured' : '✗ i18n routes incomplete',
        'error'
      );
    } catch (error) {
      this.addResult('i18n routes', false, `✗ Error reading i18n.ts: ${error.message}`, 'error');
    }
  }

  /**
   * Print header
   */
  printHeader() {
    console.log('\n' + colors.cyan + '═'.repeat(70) + colors.reset);
    console.log(colors.cyan + colors.bold + '  PROJECT HEALTH CHECK' + colors.reset);
    console.log(colors.cyan + '═'.repeat(70) + colors.reset + '\n');
  }

  /**
   * Print results
   */
  printResults() {
    const errors = this.results.filter(r => !r.passed && r.severity === 'error');
    const warnings = this.results.filter(r => !r.passed && r.severity === 'warning');
    const infos = this.results.filter(r => !r.passed && r.severity === 'info');
    const passed = this.results.filter(r => r.passed);
    
    // Print errors
    if (errors.length > 0) {
      console.log(colors.red + '✗ ERRORS (' + errors.length + '):' + colors.reset);
      for (const result of errors) {
        console.log(colors.red + '  ' + result.message + colors.reset);
      }
      console.log('');
    }
    
    // Print warnings
    if (warnings.length > 0) {
      console.log(colors.yellow + '⚠ WARNINGS (' + warnings.length + '):' + colors.reset);
      for (const result of warnings) {
        console.log(colors.yellow + '  ' + result.message + colors.reset);
      }
      console.log('');
    }
    
    // Print info
    if (infos.length > 0) {
      console.log(colors.blue + 'ℹ INFO (' + infos.length + '):' + colors.reset);
      for (const result of infos) {
        console.log(colors.blue + '  ' + result.message + colors.reset);
      }
      console.log('');
    }
    
    // Print summary
    const duration = ((Date.now() - this.startTime) / 1000).toFixed(2);
    console.log(colors.cyan + '─'.repeat(70) + colors.reset);
    console.log(colors.green + `✓ Passed: ${passed.length}` + colors.reset);
    console.log(colors.red + `✗ Errors: ${errors.length}` + colors.reset);
    console.log(colors.yellow + `⚠ Warnings: ${warnings.length}` + colors.reset);
    console.log(colors.blue + `ℹ Info: ${infos.length}` + colors.reset);
    console.log(`⏱️  Duration: ${duration}s`);
    console.log(colors.cyan + '─'.repeat(70) + colors.reset + '\n');
    
    // Final verdict
    if (errors.length === 0) {
      console.log(colors.green + '✅ PROJECT HEALTH: GOOD' + colors.reset);
      console.log(colors.green + '   Ready for deployment!' + colors.reset + '\n');
      return 0;
    } else {
      console.log(colors.red + '❌ PROJECT HEALTH: ISSUES FOUND' + colors.reset);
      console.log(colors.red + `   Fix ${errors.length} error(s) before deploying.` + colors.reset + '\n');
      return 1;
    }
  }

  /**
   * Run all checks
   */
  run() {
    this.printHeader();
    
    // Core files
    this.checkPackageJson();
    this.checkLicense();
    this.checkReadme();
    this.checkGitignore();
    
    // Configuration
    this.checkEnvExample();
    this.checkTypeScriptConfig();
    this.checkAstroConfig();
    
    // Dependencies
    this.checkLockfile();
    
    // Free assets
    this.checkFreeAssetsSchema();
    this.checkBilingualParity();
    this.checkI18nRoutes();
    
    return this.printResults();
  }
}

// Run checker
const checker = new ProjectHealthChecker();
const exitCode = checker.run();
process.exit(exitCode);
