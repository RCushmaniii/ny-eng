import { google } from 'googleapis';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read and clean the .env file
const envPath = path.join(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  let content = fs.readFileSync(envPath, 'utf8');
  content = content.replace(/\r/g, '');
  content.split('\n').forEach(line => {
    const match = line.match(/^([A-Z_]+)="?([^"]+)"?$/);
    if (match) {
      process.env[match[1]] = match[2];
    }
  });
}

dotenv.config();

console.log('\n🧪 Testing Google Calendar API Connection\n');

async function testCalendarAPI() {
  try {
    // Set up OAuth2 client
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    console.log('✅ OAuth2 client configured');
    console.log('📅 Calendar ID:', process.env.GOOGLE_CALENDAR_ID);

    // Test 1: List calendars
    console.log('\n📋 Test 1: Listing calendars...');
    const calendarList = await calendar.calendarList.list();
    console.log(`✅ Found ${calendarList.data.items?.length || 0} calendars`);

    // Test 2: Get today's events
    console.log('\n📋 Test 2: Getting today\'s events...');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const events = await calendar.events.list({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      timeMin: today.toISOString(),
      timeMax: tomorrow.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    console.log(`✅ Found ${events.data.items?.length || 0} events for today`);
    if (events.data.items && events.data.items.length > 0) {
      events.data.items.forEach(event => {
        console.log(`  - ${event.summary} (${event.start.dateTime || event.start.date})`);
      });
    }

    // Test 3: Check freebusy for today
    console.log('\n📋 Test 3: Checking freebusy for today...');
    const freeBusyResponse = await calendar.freebusy.query({
      requestBody: {
        timeMin: today.toISOString(),
        timeMax: tomorrow.toISOString(),
        timeZone: 'America/Mexico_City',
        items: [
          { id: 'rcushmaniii@gmail.com' },
          { id: process.env.GOOGLE_CALENDAR_ID }
        ]
      }
    });

    console.log('✅ Freebusy query successful');
    
    for (const [calId, calData] of Object.entries(freeBusyResponse.data.calendars || {})) {
      const busySlots = calData.busy || [];
      console.log(`\n  Calendar: ${calId}`);
      console.log(`  Busy periods: ${busySlots.length}`);
      busySlots.forEach(busy => {
        const start = new Date(busy.start);
        const end = new Date(busy.end);
        console.log(`    - ${start.toLocaleTimeString()} to ${end.toLocaleTimeString()}`);
      });
    }

    console.log('\n✅ All tests passed! Google Calendar API is working correctly.\n');

  } catch (error) {
    console.error('\n❌ Error testing Calendar API:', error.message);
    if (error.response) {
      console.error('Response data:', JSON.stringify(error.response.data, null, 2));
    }
    process.exit(1);
  }
}

testCalendarAPI();
