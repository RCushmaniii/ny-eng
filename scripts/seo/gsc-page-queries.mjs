#!/usr/bin/env node
import { getWebmasters, detectSiteProperty } from './gsc-client.mjs';

const endDate = new Date();
const startDate = new Date();
startDate.setDate(endDate.getDate() - 90);
const fmt = (d) => d.toISOString().split('T')[0];

const siteUrl = await detectSiteProperty();
const webmasters = await getWebmasters();

const pages = process.argv.slice(2);
if (!pages.length) {
  console.log('Usage: node gsc-page-queries.mjs <url1> [url2...]');
  process.exit(1);
}

for (const page of pages) {
  console.log('\n=== Queries for: ' + page + ' ===');
  const res = await webmasters.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: fmt(startDate),
      endDate: fmt(endDate),
      dimensions: ['query'],
      rowLimit: 50,
      dataState: 'all',
      dimensionFilterGroups: [{
        filters: [{ dimension: 'page', operator: 'equals', expression: page }],
      }],
    },
  });
  const rows = res.data.rows || [];
  if (!rows.length) { console.log('No queries.'); continue; }
  for (const r of rows) {
    console.log(`  ${r.keys[0].padEnd(55)} ${String(r.impressions).padStart(4)} impr  pos ${r.position.toFixed(1)}`);
  }
}
