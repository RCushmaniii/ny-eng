#!/usr/bin/env node
/**
 * Pull search performance data from Google Search Console.
 *
 * Usage:
 *   node scripts/seo/gsc-performance.mjs                  # Last 28 days
 *   node scripts/seo/gsc-performance.mjs --days 7         # Last 7 days
 *   node scripts/seo/gsc-performance.mjs --query "english" # Filter by query
 *   node scripts/seo/gsc-performance.mjs --top 20         # Top 20 results
 */

import { getWebmasters, detectSiteProperty } from './gsc-client.mjs';

const args = process.argv.slice(2);
const getArg = (flag, defaultVal) => {
  const idx = args.indexOf(flag);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : defaultVal;
};

const days = parseInt(getArg('--days', '28'), 10);
const queryFilter = getArg('--query', null);
const topN = parseInt(getArg('--top', '25'), 10);
const dimension = getArg('--by', 'query'); // query, page, country, device

const endDate = new Date();
const startDate = new Date();
startDate.setDate(endDate.getDate() - days);

const fmt = (d) => d.toISOString().split('T')[0];

async function main() {
  const siteUrl = await detectSiteProperty();
  if (!siteUrl) {
    console.error('Cannot access GSC. Add service account as user first.');
    process.exit(1);
  }

  const webmasters = await getWebmasters();

  const request = {
    siteUrl,
    requestBody: {
      startDate: fmt(startDate),
      endDate: fmt(endDate),
      dimensions: [dimension],
      rowLimit: topN,
      dataState: 'all',
    },
  };

  if (queryFilter) {
    request.requestBody.dimensionFilterGroups = [{
      filters: [{
        dimension: 'query',
        operator: 'contains',
        expression: queryFilter,
      }],
    }];
  }

  console.log(`\nSearch Performance: ${fmt(startDate)} to ${fmt(endDate)}`);
  console.log(`Dimension: ${dimension} | Top ${topN} results`);
  if (queryFilter) console.log(`Filter: queries containing "${queryFilter}"`);
  console.log('─'.repeat(90));

  try {
    const res = await webmasters.searchanalytics.query(request);
    const rows = res.data.rows || [];

    if (rows.length === 0) {
      console.log('\nNo data found for this period.');
      return;
    }

    // Header
    console.log(
      padRight(dimension === 'query' ? 'Query' : 'Page', 50) +
      padLeft('Clicks', 8) +
      padLeft('Impr.', 8) +
      padLeft('CTR', 8) +
      padLeft('Pos.', 8)
    );
    console.log('─'.repeat(90));

    // Rows
    let totalClicks = 0, totalImpressions = 0;
    for (const row of rows) {
      const key = row.keys[0];
      const display = key.length > 48 ? key.substring(0, 45) + '...' : key;
      totalClicks += row.clicks;
      totalImpressions += row.impressions;

      console.log(
        padRight(display, 50) +
        padLeft(row.clicks.toString(), 8) +
        padLeft(row.impressions.toString(), 8) +
        padLeft((row.ctr * 100).toFixed(1) + '%', 8) +
        padLeft(row.position.toFixed(1), 8)
      );
    }

    console.log('─'.repeat(90));
    console.log(
      padRight('TOTAL', 50) +
      padLeft(totalClicks.toString(), 8) +
      padLeft(totalImpressions.toString(), 8)
    );
  } catch (err) {
    console.error('Error fetching data:', err.message);
  }
}

function padRight(str, len) {
  return str.length >= len ? str.substring(0, len) : str + ' '.repeat(len - str.length);
}

function padLeft(str, len) {
  return str.length >= len ? str : ' '.repeat(len - str.length) + str;
}

main();
