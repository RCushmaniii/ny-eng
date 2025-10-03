#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const DIST = "dist";
const isHtml = f => f.endsWith(".html");
const bcp47 = /^[a-zA-Z]{2,3}(-[A-Z]{2})?$/; // e.g. en, es, en-US, es-MX

let bad = [];

function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
        const p = path.join(dir, name);
        const stat = fs.statSync(p);
        if (stat.isDirectory()) walk(p);
        else if (isHtml(p)) {
            const html = fs.readFileSync(p, "utf8");
            const m = html.match(/<html[^>]*\slang=["']([^"']+)["'][^>]*>/i);
            if (m) {
                const val = m[1].replace("_", "-");
                if (!bcp47.test(val)) bad.push({ file: p, lang: m[1] });
            } else {
                bad.push({ file: p, lang: "(missing)" });
            }
        }
    }
}

if (!fs.existsSync(DIST)) {
    console.error("Build first: npm run build");
    process.exit(2);
}

walk(DIST);

if (bad.length) {
    console.log("❌ Invalid or missing HTML lang on:");
    for (const x of bad) console.log(` - ${x.file} => ${x.lang}`);
    process.exit(1);
} else {
    console.log("🟢 HTML lang looks good in dist/");
}
