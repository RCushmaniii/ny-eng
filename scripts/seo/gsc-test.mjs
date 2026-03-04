#!/usr/bin/env node
/**
 * Test GSC API connection and list available properties.
 * Run: node scripts/seo/gsc-test.mjs
 */

import { detectSiteProperty, getAuthClient } from './gsc-client.mjs';

console.log('Testing Google Search Console API connection...\n');

try {
  const auth = await getAuthClient();
  console.log('✓ Authentication successful\n');

  const property = await detectSiteProperty();
  if (property) {
    console.log(`\n✓ Ready to use GSC API with property: ${property}`);
  } else {
    console.log('\n✗ No matching property found.');
    console.log('\nTo fix this, add the service account as a user in GSC:');
    console.log('  Email: seo-api-access@seo-automation-489217.iam.gserviceaccount.com');
    console.log('  Permission: Full');
  }
} catch (err) {
  console.error('✗ Authentication failed:', err.message);
  if (err.message.includes('invalid_scope') || err.message.includes('access_not_configured')) {
    console.log('\nYou may need to enable the Search Console API in Google Cloud Console:');
    console.log('  https://console.cloud.google.com/apis/library/searchconsole.googleapis.com');
    console.log(`  Project: seo-automation-489217`);
  }
}
