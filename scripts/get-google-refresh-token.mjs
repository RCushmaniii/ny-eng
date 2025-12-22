import { google } from "googleapis";
import readline from "readline";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Debug: Check if env vars are loaded
console.log("\n🔍 Checking environment variables...");
console.log(
  "CLIENT_ID:",
  process.env.GOOGLE_CLIENT_ID ? "✅ Loaded" : "❌ Missing",
);
console.log(
  "CLIENT_SECRET:",
  process.env.GOOGLE_CLIENT_SECRET ? "✅ Loaded" : "❌ Missing",
);
console.log("REDIRECT_URI:", process.env.GOOGLE_REDIRECT_URI || "❌ Missing");

if (
  !process.env.GOOGLE_CLIENT_ID ||
  !process.env.GOOGLE_CLIENT_SECRET ||
  !process.env.GOOGLE_REDIRECT_URI
) {
  console.error(
    "\n❌ Error: Missing required environment variables in .env file",
  );
  console.error("Make sure your .env file has:");
  console.error('  GOOGLE_CLIENT_ID="..."');
  console.error('  GOOGLE_CLIENT_SECRET="..."');
  console.error(
    '  GOOGLE_REDIRECT_URI="http://localhost:4321/api/auth/callback"',
  );
  process.exit(1);
}

const SCOPES = [
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/calendar.events",
];

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI,
);

// Generate authorization URL
const authUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: SCOPES,
  prompt: "consent", // Force consent screen to get refresh token
});

console.log("\n🔐 Google Calendar OAuth Setup\n");
console.log("📋 Step 1: Authorize this app by visiting this URL:\n");
console.log(authUrl);
console.log(
  "\n📋 Step 2: After authorization, you'll be redirected to your callback URL.",
);
console.log(
  '📋 Step 3: Copy the "code" parameter from the URL and paste it below.\n',
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the authorization code: ", async (code) => {
  try {
    // Exchange authorization code for tokens
    const { tokens } = await oauth2Client.getToken(code);

    console.log("\n✅ Success! Here are your tokens:\n");
    console.log("📝 Add these to your .env file:\n");
    console.log(`GOOGLE_REFRESH_TOKEN="${tokens.refresh_token}"`);
    console.log(`GOOGLE_ACCESS_TOKEN="${tokens.access_token}"`);

    if (tokens.expiry_date) {
      const expiryDate = new Date(tokens.expiry_date);
      console.log(`\n⏰ Access token expires: ${expiryDate.toLocaleString()}`);
      console.log(
        "💡 Don't worry - the refresh token will automatically get new access tokens!\n",
      );
    }

    // Test the credentials
    console.log("\n🧪 Testing credentials...\n");
    oauth2Client.setCredentials(tokens);
    const calendar = google.calendar({ version: "v3", auth: oauth2Client });

    const calendarList = await calendar.calendarList.list();
    console.log("✅ Successfully connected to Google Calendar!");
    console.log(`📅 Found ${calendarList.data.items?.length || 0} calendars\n`);

    if (calendarList.data.items && calendarList.data.items.length > 0) {
      console.log("Your calendars:");
      calendarList.data.items.forEach((cal) => {
        console.log(`  - ${cal.summary} (${cal.id})`);
      });
    }
  } catch (error) {
    console.error("\n❌ Error getting tokens:", error.message);
    if (error.response) {
      console.error("Response:", error.response.data);
    }
  } finally {
    rl.close();
  }
});
