import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, "..", ".env");

console.log("\n🔍 Checking .env file...\n");
console.log("Looking for file at:", envPath);

try {
  // Check if file exists
  if (!fs.existsSync(envPath)) {
    console.log("❌ .env file does not exist!");
    process.exit(1);
  }

  console.log("✅ .env file exists");

  // Read file stats
  const stats = fs.statSync(envPath);
  console.log(`📊 File size: ${stats.size} bytes`);

  // Read raw content
  const content = fs.readFileSync(envPath, "utf8");
  console.log(`📝 Number of lines: ${content.split("\n").length}`);
  console.log(`📝 Number of characters: ${content.length}`);

  // Show first 200 characters (safely)
  console.log("\n📄 First 200 characters of file:");
  console.log("---");
  console.log(content.substring(0, 200));
  console.log("---\n");

  // Check for common issues
  const lines = content
    .split("\n")
    .filter((line) => line.trim() && !line.trim().startsWith("#"));
  console.log(`✅ Found ${lines.length} non-empty, non-comment lines`);

  // Try to parse each line
  console.log("\n🔍 Parsing lines:\n");
  lines.forEach((line, index) => {
    // Show ALL character codes for the line
    const allCharCodes = line.split("").map((c) => c.charCodeAt(0));
    console.log(`\nLine ${index + 1}:`);
    console.log(`  Length: ${line.length} characters`);
    console.log(
      `  First 20 char codes: [${allCharCodes.slice(0, 20).join(",")}]`,
    );
    console.log(`  Content: ${JSON.stringify(line)}`);

    const match = line.match(/^([A-Z_]+)=(.+)$/);
    if (match) {
      const [, key, value] = match;
      console.log(`  ✅ Parsed: ${key} = ${value.substring(0, 30)}...`);
    } else {
      console.log(`  ❌ Could not parse with regex`);
    }
  });
} catch (error) {
  console.error("❌ Error reading .env file:", error.message);
  process.exit(1);
}
