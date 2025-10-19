import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read and clean the .env file (remove \r characters)
const envPath = path.join(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  let content = fs.readFileSync(envPath, 'utf8');
  // Remove carriage returns
  content = content.replace(/\r/g, '');
  // Parse manually
  content.split('\n').forEach(line => {
    const match = line.match(/^([A-Z_]+)="?([^"]+)"?$/);
    if (match) {
      process.env[match[1]] = match[2];
    }
  });
}

// Also try dotenv as backup
dotenv.config();

console.log('\n🧪 Testing Environment Variables\n');
console.log('='.repeat(50));

// Test each Google variable
const vars = {
  'GOOGLE_CLIENT_ID': process.env.GOOGLE_CLIENT_ID,
  'GOOGLE_CLIENT_SECRET': process.env.GOOGLE_CLIENT_SECRET,
  'GOOGLE_REDIRECT_URI': process.env.GOOGLE_REDIRECT_URI,
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

console.log('='.repeat(50));

if (allPresent) {
  console.log('\n✅ All environment variables loaded successfully!');
  console.log('✅ Ready to proceed with Google Calendar OAuth setup.\n');
} else {
  console.log('\n❌ Some environment variables are missing.');
  console.log('📝 Check your .env file in the project root.\n');
  process.exit(1);
}
