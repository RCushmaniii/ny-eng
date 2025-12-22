import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const rawMode = args.includes("--raw") || args.includes("--debug");

// Read and clean the .env file (remove \r characters)
const envPath = path.join(__dirname, "..", ".env");
if (fs.existsSync(envPath)) {
  if (rawMode) {
    console.log("\n🔍 RAW MODE (values redacted)\n");
    console.log("Checking .env file at:", envPath);
    try {
      const stats = fs.statSync(envPath);
      const rawContent = fs.readFileSync(envPath, "utf8");

      const lineCount = rawContent.split("\n").length;
      const crCount = (rawContent.match(/\r/g) || []).length;

      console.log(`📊 File size: ${stats.size} bytes`);
      console.log(`📝 Number of lines: ${lineCount}`);
      console.log(`🧹 Carriage returns (\\r) found: ${crCount}`);

      const nonEmptyLines = rawContent
        .split("\n")
        .filter((line) => line.trim() && !line.trim().startsWith("#"));

      console.log(
        `✅ Found ${nonEmptyLines.length} non-empty, non-comment lines`,
      );
      console.log("\n🔍 Parsing lines (values redacted):\n");

      nonEmptyLines.forEach((line, index) => {
        const idx = line.indexOf("=");
        const key = idx >= 0 ? line.slice(0, idx).trim() : "(unparsed)";
        const value = idx >= 0 ? line.slice(idx + 1) : "";

        const startsWithQuote = value.trimStart().startsWith('"');
        const endsWithQuote = value.trimEnd().endsWith('"');

        const maskedLine = idx >= 0 ? `${key}=<redacted>` : "<unparsed>";
        const charCodes = line.split("").map((c) => c.charCodeAt(0));

        console.log(`Line ${index + 1}:`);
        console.log(`  Key: ${key}`);
        console.log(`  Value length: ${value.length}`);
        console.log(`  Starts with quote: ${startsWithQuote}`);
        console.log(`  Ends with quote: ${endsWithQuote}`);
        console.log(
          `  First 20 char codes: [${charCodes.slice(0, 20).join(",")}]`,
        );
        console.log(`  Content: ${JSON.stringify(maskedLine)}`);
      });
    } catch (error) {
      console.log("❌ Error reading .env file:", error.message);
    }
  }

  let content = fs.readFileSync(envPath, "utf8");
  // Remove carriage returns
  content = content.replace(/\r/g, "");
  // Parse manually
  content.split("\n").forEach((line) => {
    const match = line.match(/^([A-Z_]+)="?([^"]+)"?$/);
    if (match) {
      process.env[match[1]] = match[2];
    }
  });
}

// Also try dotenv as backup
dotenv.config();

console.log("\n🧪 Testing Environment Variables\n");
console.log("=".repeat(50));

// Test each Google variable
const vars = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
};

let allPresent = true;

for (const [key, value] of Object.entries(vars)) {
  if (value) {
    console.log(`✅ ${key}: ${value.substring(0, 20)}...`);
  } else {
    console.log(`❌ ${key}: NOT FOUND`);
    allPresent = false;
  }
}

console.log("=".repeat(50));

if (allPresent) {
  console.log("\n✅ All environment variables loaded successfully!");
  console.log("✅ Ready to proceed with Google Calendar OAuth setup.\n");
} else {
  console.log("\n❌ Some environment variables are missing.");
  console.log("📝 Check your .env file in the project root.\n");
  process.exit(1);
}
