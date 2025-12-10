#!/usr/bin/env node

/**
 * Pre-Deployment Audit Manager
 * 
 * Orchestrates all pre-deployment checks to ensure site quality before going live.
 * Run: npm run pre-deploy
 * 
 * Checks performed:
 * 1. Technical SEO validation (meta tags, h1, canonicals, hreflang, OG tags)
 * 2. Sitemap integrity check (canonical URLs, hreflang, critical URL coverage)
 * 3. Full site scan (all HTML files for SEO issues)
 * 
 * @version 2.0.0
 * @updated 2025-12-07
 */

import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class AuditManager {
  constructor() {
    this.results = {
      projectHealth: null,
      seo: null,
      sitemap: null,
      fullScan: null,
    };
    this.startTime = Date.now();
  }

  /**
   * Print header
   */
  printHeader() {
    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
    console.log('\n' + '='.repeat(80));
    console.log('🚀 PRE-DEPLOYMENT AUDIT');
    console.log('='.repeat(80));
    console.log(`📅 ${timestamp}`);
    console.log('Running comprehensive checks before deployment...\n');
  }

  /**
   * Run Project Health Check
   */
  async runProjectHealthCheck() {
    console.log('🏥 Running Project Health Check...');
    try {
      execSync('node scripts/pre-deploy/project-health-checker.js', { 
        stdio: 'inherit',
        cwd: path.resolve(__dirname, '../..')
      });
      this.results.projectHealth = 'PASS';
      return true;
    } catch (error) {
      this.results.projectHealth = 'FAIL';
      return false;
    }
  }

  /**
   * Run SEO validation
   */
  async runSeoAudit() {
    console.log('📊 Running Technical SEO Audit...');
    try {
      execSync('node scripts/pre-deploy/audits/seo-validator.js', { 
        stdio: 'inherit',
        cwd: path.resolve(__dirname, '../..')
      });
      this.results.seo = 'PASS';
      return true;
    } catch (error) {
      this.results.seo = 'FAIL';
      return false;
    }
  }

  /**
   * Run Sitemap validation
   */
  async runSitemapAudit() {
    console.log('\n📊 Running Sitemap Validation...');
    try {
      execSync('node scripts/pre-deploy/audits/sitemap-validator.js', { 
        stdio: 'inherit',
        cwd: path.resolve(__dirname, '../..')
      });
      this.results.sitemap = 'PASS';
      return true;
    } catch (error) {
      this.results.sitemap = 'FAIL';
      return false;
    }
  }

  /**
   * Run Full Site Scan
   */
  async runFullSiteScan() {
    console.log('\n📊 Running Full Site Scan...');
    try {
      execSync('node scripts/pre-deploy/audits/full-site-scan.js', { 
        stdio: 'inherit',
        cwd: path.resolve(__dirname, '../..')
      });
      this.results.fullScan = 'PASS';
      return true;
    } catch (error) {
      this.results.fullScan = 'FAIL';
      return false;
    }
  }

  /**
   * Generate final report
   */
  generateFinalReport() {
    const duration = ((Date.now() - this.startTime) / 1000).toFixed(2);
    
    console.log('\n' + '='.repeat(80));
    console.log('📋 FINAL AUDIT REPORT');
    console.log('='.repeat(80) + '\n');

    console.log(`⏱️  Duration: ${duration}s\n`);

    // Only check implemented audits (not null)
    const implementedResults = Object.entries(this.results)
      .filter(([_, status]) => status !== null);
    
    const allPassed = implementedResults.every(([_, status]) => status === 'PASS');
    const passedCount = implementedResults.filter(([_, status]) => status === 'PASS').length;
    const totalCount = implementedResults.length;

    // Display results with consistent visual indicators
    console.log('📊 AUDIT RESULTS:\n');
    Object.entries(this.results).forEach(([check, status]) => {
      if (status === null) {
        console.log(`  ⚪ ${check.toUpperCase()}: Not Implemented`);
      } else if (status === 'PASS') {
        console.log(`  ✅ ${check.toUpperCase()}: PASS`);
      } else {
        console.log(`  ❌ ${check.toUpperCase()}: FAIL`);
      }
    });

    console.log(`\n📈 SCORE: ${passedCount}/${totalCount} checks passed\n`);

    if (allPassed) {
      console.log('✅ ALL CHECKS PASSED');
      console.log('🚀 Site is ready for deployment!\n');
      console.log('='.repeat(80) + '\n');
      return 0;
    } else {
      console.log('❌ SOME CHECKS FAILED');
      console.log('🛑 Fix issues before deploying\n');
      console.log('='.repeat(80) + '\n');
      return 1;
    }
  }

  /**
   * Run all audits
   */
  async run() {
    this.printHeader();

    // Run Project Health Check first (foundation)
    await this.runProjectHealthCheck();

    // Run SEO audit
    await this.runSeoAudit();

    // Run Sitemap audit
    await this.runSitemapAudit();

    // Run Full Site Scan
    await this.runFullSiteScan();

    return this.generateFinalReport();
  }
}

// Run audit manager
const manager = new AuditManager();
manager.run().then(exitCode => process.exit(exitCode));
