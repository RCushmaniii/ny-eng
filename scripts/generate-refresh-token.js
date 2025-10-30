import { createServer } from 'http';
import { parse } from 'url';
import open from 'open';

const CLIENT_ID = '169028283355-vev32b3a1fnajqb43uun2fbruga7hj0j.apps.googleusercontent.com';
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '****qzr3'; // Replace with full secret
const REDIRECT_URI = 'http://localhost:4321/api/auth/callback';
const SCOPES = 'https://www.googleapis.com/auth/calendar';

console.log('\n🔐 Google OAuth Refresh Token Generator\n');

// Step 1: Generate authorization URL
const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
  `client_id=${CLIENT_ID}&` +
  `redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
  `response_type=code&` +
  `scope=${encodeURIComponent(SCOPES)}&` +
  `access_type=offline&` +
  `prompt=consent`;

console.log('📋 Step 1: Opening browser for authorization...\n');

// Step 2: Start local server to receive callback
const server = createServer(async (req, res) => {
  const { query } = parse(req.url, true);
  
  if (query.code) {
    console.log('✅ Authorization code received!\n');
    
    // Step 3: Exchange code for tokens
    try {
      const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          code: query.code,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          redirect_uri: REDIRECT_URI,
          grant_type: 'authorization_code'
        })
      });
      
      const tokens = await tokenResponse.json();
      
      if (tokens.refresh_token) {
        console.log('🎉 SUCCESS! Your refresh token:\n');
        console.log('─'.repeat(80));
        console.log(tokens.refresh_token);
        console.log('─'.repeat(80));
        console.log('\n📝 Copy this token to Cloudflare Workers environment variable:');
        console.log('   GOOGLE_REFRESH_TOKEN\n');
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
          <html>
            <body style="font-family: system-ui; padding: 40px; text-align: center;">
              <h1>✅ Success!</h1>
              <p>Refresh token generated. Check your terminal.</p>
              <p>You can close this window.</p>
            </body>
          </html>
        `);
      } else {
        console.error('❌ Error:', tokens);
        res.writeHead(400);
        res.end('Error: ' + JSON.stringify(tokens));
      }
    } catch (error) {
      console.error('❌ Error exchanging code:', error);
      res.writeHead(500);
      res.end('Error: ' + error.message);
    }
    
    setTimeout(() => {
      server.close();
      process.exit(0);
    }, 1000);
  } else if (query.error) {
    console.error('❌ Authorization error:', query.error);
    res.writeHead(400);
    res.end('Authorization failed: ' + query.error);
    server.close();
    process.exit(1);
  }
});

server.listen(4321, async () => {
  console.log('🌐 Local server started on http://localhost:4321\n');
  console.log('🔗 Opening authorization URL in browser...\n');
  
  try {
    await open(authUrl);
  } catch (error) {
    console.log('⚠️  Could not open browser automatically. Please visit:\n');
    console.log(authUrl);
  }
});
