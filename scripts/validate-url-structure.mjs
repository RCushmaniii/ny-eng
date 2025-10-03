import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join, extname } from 'path';

// Output file for dashboard consumption
const JSON_REPORT = './project-reports/validate-urls.json';

/**
 * Analyze URL for common issues
 */
function analyzeUrl(url) {
  const issues = [];

  // Check for double language subdirectories (critical issue)
  if (url.match(/\/(en|es)\/.*\/(en|es)\//)) {
    issues.push({
      type: 'double_language',
      severity: 'critical',
      message: 'URL contains double language subdirectories'
    });
  }

  // Check for missing language prefix on important pages
  if (url.match(/^\/(blog|services|about|contact)/) && !url.match(/^\/(en|es)/)) {
    issues.push({
      type: 'missing_language_prefix',
      severity: 'warning',
      message: 'Important page missing language prefix'
    });
  }

  // Check for mixed language patterns
  if (url.includes('/en/') && url.includes('/es/')) {
    issues.push({
      type: 'mixed_languages',
      severity: 'error',
      message: 'URL contains both English and Spanish patterns'
    });
  }

  // Check for non-SEO friendly patterns
  if (url.match(/[A-Z]/) && !url.includes('mailto:')) {
    issues.push({
      type: 'uppercase',
      severity: 'warning',
      message: 'URL contains uppercase letters'
    });
  }

  return issues;
}

/**
 * Extract URLs from file content
 */
function extractUrls(content) {
  const urlPatterns = [
    /href=["']([^"']+)["']/g,
    /src=["']([^"']+)["']/g,
    /url\(["']?([^"')]+)["']?\)/g,
    /import.*from\s+["']([^"']+)["']/g
  ];

  const urls = new Set();

  urlPatterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const url = match[1];
      // Only analyze internal URLs
      if (url.startsWith('/') && !url.startsWith('//')) {
        urls.add(url);
      }
    }
  });

  return Array.from(urls);
}

/**
 * Check URL structure across the project
 */
function checkUrlStructure() {
  const startTime = Date.now();
  const results = {
    totalFiles: 0,
    totalUrls: 0,
    issues: [],
    fileIssues: new Map()
  };

  function checkFile(filePath) {
    try {
      const content = readFileSync(filePath, 'utf-8');
      const urls = extractUrls(content);

      results.totalFiles++;
      results.totalUrls += urls.length;

      const fileIssues = [];

      urls.forEach(url => {
        const urlIssues = analyzeUrl(url);
        urlIssues.forEach(issue => {
          const fullIssue = {
            id: `${issue.type}-${url.replace(/[^a-zA-Z0-9]/g, '-')}`,
            priority: issue.severity === 'critical' ? 'Critical' : 
                     issue.severity === 'error' ? 'High' : 
                     issue.severity === 'warning' ? 'Medium' : 'Low',
            impact: 'URL Structure',
            message: `${issue.message}: ${url}`,
            action: getActionForIssue(issue.type),
            file: filePath.replace(/\\/g, '/'),
            url
          };
          results.issues.push(fullIssue);
          fileIssues.push(fullIssue);
        });
      });

      if (fileIssues.length > 0) {
        results.fileIssues.set(filePath, fileIssues);
      }

    } catch (error) {
      console.log(`  ❌ Could not check file ${filePath}: ${error.message}`);
    }
  }

  function checkDirectory(dir) {
    try {
      const items = readdirSync(dir);

      for (const item of items) {
        const fullPath = join(dir, item);
        const stat = statSync(fullPath);

        if (stat.isDirectory()) {
          // Skip node_modules and other irrelevant directories
          if (!['node_modules', '.git', '.astro', 'dist'].includes(item)) {
            checkDirectory(fullPath);
          }
        } else if (['.astro', '.ts', '.js', '.tsx', '.jsx'].includes(extname(item))) {
          checkFile(fullPath);
        }
      }
    } catch (error) {
      console.log(`  ❌ Could not check directory ${dir}: ${error.message}`);
    }
  }

  checkDirectory('./src');
  
  // Add duration to results
  results.duration = Date.now() - startTime;
  
  return results;
}

/**
 * Get recommended action for issue type
 */
function getActionForIssue(issueType) {
  const actions = {
    double_language: 'Fix URL generation logic to prevent double language prefixes',
    missing_language_prefix: 'Add language prefix or implement redirects',
    mixed_languages: 'Review URL construction to ensure single language per URL',
    uppercase: 'Convert to lowercase for better SEO'
  };
  
  return actions[issueType] || 'Review and fix URL structure issue';
}

/**
 * Determine overall status based on issues
 */
function determineStatus(issues) {
  if (issues.some(i => i.priority === 'Critical')) return 'red';
  if (issues.some(i => i.priority === 'High')) return 'orange';
  if (issues.some(i => i.priority === 'Medium')) return 'yellow';
  return 'green';
}

/**
 * Generate JSON report for dashboard
 */
async function writeJsonReport(results) {
  const report = {
    script: 'validate-urls',
    runAt: new Date().toISOString(),
    duration: results.duration,
    status: determineStatus(results.issues),
    summary: {
      totalChecks: results.totalUrls,
      passed: results.totalUrls - results.issues.length,
      warnings: results.issues.filter(i => i.priority === 'Medium').length,
      errors: results.issues.filter(i => ['High', 'Critical'].includes(i.priority)).length
    },
    issues: results.issues,
    metadata: {
      filesAnalyzed: results.totalFiles,
      totalUrls: results.totalUrls
    }
  };

  writeFileSync(JSON_REPORT, JSON.stringify(report, null, 2), 'utf8');
  console.log(`📋 Dashboard report: ${JSON_REPORT}`);
}

/**
 * Generate console report (existing functionality)
 */
function generateConsoleReport(results) {
  console.log('📊 URL Structure Analysis Results\n');
  console.log(`Files analyzed: ${results.totalFiles}`);
  console.log(`URLs found: ${results.totalUrls}`);
  console.log(`Issues detected: ${results.issues.length}\n`);

  if (results.issues.length === 0) {
    console.log('✅ No URL structure issues detected!');
    return true;
  }

  // Group issues by type
  const issuesByType = {};
  results.issues.forEach(issue => {
    const type = issue.message.split(':')[0];
    if (!issuesByType[type]) {
      issuesByType[type] = [];
    }
    issuesByType[type].push(issue);
  });

  // Report critical issues first
  Object.entries(issuesByType).forEach(([type, issues]) => {
    const priority = issues[0].priority;
    const icon = priority === 'Critical' ? '🚨' : priority === 'High' ? '❌' : '⚠️';

    console.log(`${icon} ${type.toUpperCase()} (${issues.length} issues):`);

    issues.slice(0, 5).forEach(issue => { // Limit to 5 per type for readability
      console.log(`  ${issue.file}`);
      console.log(`    URL: ${issue.url || 'N/A'}`);
      console.log(`    Issue: ${issue.message}\n`);
    });
    
    if (issues.length > 5) {
      console.log(`    ... and ${issues.length - 5} more\n`);
    }
  });

  return false;
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('🚀 Validating URL structure patterns...\n');

    const results = checkUrlStructure();
    const isValid = generateConsoleReport(results);
    
    // Always write JSON report for dashboard
    await writeJsonReport(results);

    console.log('\n' + '='.repeat(60));
    console.log('📋 URL STRUCTURE VALIDATION SUMMARY');
    console.log('='.repeat(60));

    if (isValid) {
      console.log('✅ All URL patterns are valid!');
      console.log('🎉 No URL structure issues detected!');
    } else {
      console.log(`⚠️ Found ${results.issues.length} URL structure issues`);
      console.log('🔧 Review the recommendations above to fix these issues');
    }

    process.exit(isValid ? 0 : 1);
  } catch (error) {
    console.error('❌ URL structure validation failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (process.argv[1].endsWith('validate-url-structure.mjs')) {
  main();
}