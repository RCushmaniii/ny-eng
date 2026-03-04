/**
 * Google Search Console API Client
 *
 * Provides authenticated access to GSC for:
 * - Submitting sitemaps
 * - Inspecting URL index status
 * - Pulling search performance data (clicks, impressions, CTR, position)
 * - Checking index coverage
 *
 * Usage: import { getGSCClient, SITE_URL } from './gsc-client.mjs'
 */

import { google } from 'googleapis';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CREDENTIALS_PATH = join(__dirname, 'gsc-credentials.json');
export const SITE_URL = 'https://www.nyenglishteacher.com';

// sc-domain: prefix is for domain-level properties; use URL prefix if that's how it's verified
export const SITE_PROPERTY = `sc-domain:nyenglishteacher.com`;
export const SITE_PROPERTY_URL = `https://www.nyenglishteacher.com/`;

let _authClient = null;

export async function getAuthClient() {
  if (_authClient) return _authClient;

  const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: [
      'https://www.googleapis.com/auth/webmasters',
      'https://www.googleapis.com/auth/webmasters.readonly',
      'https://www.googleapis.com/auth/indexing',
    ],
  });
  _authClient = await auth.getClient();
  return _authClient;
}

export async function getSearchConsole() {
  const auth = await getAuthClient();
  return google.searchconsole({ version: 'v1', auth });
}

export async function getWebmasters() {
  const auth = await getAuthClient();
  return google.webmasters({ version: 'v3', auth });
}

/**
 * Detect which site property format works (domain vs URL prefix)
 */
export async function detectSiteProperty() {
  const webmasters = await getWebmasters();
  try {
    const res = await webmasters.sites.list();
    const sites = res.data.siteEntry || [];
    console.log('Available GSC properties:');
    sites.forEach(s => console.log(`  - ${s.siteUrl} (${s.permissionLevel})`));

    // Try to find our site
    const match = sites.find(s =>
      s.siteUrl.includes('nyenglishteacher.com')
    );
    if (match) {
      console.log(`\nUsing property: ${match.siteUrl}`);
      return match.siteUrl;
    }
    console.log('\nSite not found in available properties.');
    console.log('Make sure the service account email is added as a user in GSC.');
    return null;
  } catch (err) {
    console.error('Error listing sites:', err.message);
    return null;
  }
}
