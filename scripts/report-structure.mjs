// scripts/report-structure.mjs
import { promises as fs } from "fs";
import path from "path";

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, "project-reports");
const OUT_FILE = path.join(REPORTS_DIR, "project-structure.txt");
const JSON_REPORT = path.join(REPORTS_DIR, "report-structure.json");
const DASHBOARD_FILE = path.join(REPORTS_DIR, "project-dashboard.html");
const HISTORY_FILE = path.join(REPORTS_DIR, "dashboard-history.json");

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function walk(dir, fileList = []) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      if (["node_modules", "dist", ".astro", ".git"].includes(file.name))
        continue;
      await walk(fullPath, fileList);
    } else {
      fileList.push(fullPath.replace(ROOT, ""));
    }
  }
  return fileList;
}

function classifyWarnings(files) {
  const issues = [];

  const isRootLevel = (p) => {
    const dir = path.dirname(p);
    return dir === path.sep || dir === "." || dir === "";
  };

  // RED: Multiple Tailwind configs
  const tailwind = files.filter((f) => f.includes("tailwind.config"));
  if (tailwind.length > 1) {
    issues.push({
      severity: "red",
      priority: "High",
      impact: "Build Stability",
      message: `Multiple Tailwind configs found: ${tailwind.join(", ")}`,
      action: "Merge into a single tailwind.config.mjs",
    });
  }

  // YELLOW: Backup/old/disabled
  const backups = files.filter((f) =>
    f.match(/(\.bak|\.old|backup|\.disabled)/i),
  );
  if (backups.length > 0) {
    issues.push({
      severity: "yellow",
      priority: "Low",
      impact: "Maintainability",
      message: `${backups.length} backup/old/disabled files found`,
      action: "Archive or delete unused backups",
    });
  }

  // ORANGE: Duplicate/variant components
  const dupes = files.filter((f) => f.match(/-old\.astro$|BU\.astro$|copy\./i));
  if (dupes.length > 0) {
    issues.push({
      severity: "orange",
      priority: "Medium",
      impact: "Developer Confusion",
      message: `${dupes.length} duplicate/variant components found`,
      action: "Consolidate or remove duplicates",
    });
  }

  // RED: Files with spaces
  const spaced = files.filter((f) => f.match(/\s+/));
  if (spaced.length > 0) {
    issues.push({
      severity: "red",
      priority: "High",
      impact: "Build/Asset Handling",
      message: `Files with spaces in names: ${spaced.join(", ")}`,
      action: "Rename files to remove spaces",
    });
  }

  // ORANGE: Root-level logs/CSVs
  const rootReports = files.filter(
    (f) => f.match(/\.(log|csv)$/i) && isRootLevel(f),
  );
  if (rootReports.length > 0) {
    issues.push({
      severity: "orange",
      priority: "Medium",
      impact: "Repo Hygiene",
      message: `Logs/CSVs in root: ${rootReports.join(", ")}`,
      action: "Move into /project-reports/",
    });
  }

  // ORANGE: Root-level scripts
  const rootScripts = files.filter(
    (f) => f.match(/\.(ps1|mjs|js|patch)$/i) && isRootLevel(f),
  );
  if (rootScripts.length > 0) {
    issues.push({
      severity: "orange",
      priority: "Medium",
      impact: "Repo Hygiene",
      message: `Scripts in root: ${rootScripts.join(", ")}`,
      action: "Move into /scripts/",
    });
  }

  return issues;
}

function determineOverallStatus(issues) {
  if (issues.some((i) => i.severity === "red")) return "red";
  if (issues.some((i) => i.severity === "orange")) return "orange";
  if (issues.some((i) => i.severity === "yellow")) return "yellow";
  return "green";
}

async function writeMainDashboardReport(issues) {
  const report = {
    script: "report-structure.json",
    runAt: new Date().toISOString(),
    status: determineOverallStatus(issues),
    issues: issues.map((issue) => ({
      priority: issue.priority,
      impact: issue.impact,
      message: issue.message,
      action: issue.action,
    })),
  };

  await fs.writeFile(JSON_REPORT, JSON.stringify(report, null, 2), "utf8");
  console.log(`📋 Main dashboard report: ${JSON_REPORT}`);
}

async function writeDashboard(issues) {
  // Save run history
  let history = [];
  try {
    history = JSON.parse(await fs.readFile(HISTORY_FILE, "utf8"));
  } catch {}
  history.push({
    date: new Date().toISOString(),
    counts: {
      red: issues.filter((i) => i.severity === "red").length,
      orange: issues.filter((i) => i.severity === "orange").length,
      yellow: issues.filter((i) => i.severity === "yellow").length,
    },
  });
  await fs.writeFile(HISTORY_FILE, JSON.stringify(history, null, 2));

  // Generate HTML dashboard
  const rows = issues
    .map(
      (i) => `
    <tr class="${i.severity}">
      <td>${i.priority}</td>
      <td>${i.impact}</td>
      <td>${i.message}</td>
      <td>${i.action}</td>
    </tr>
  `,
    )
    .join("");

  const html = `
    <html>
    <head>
      <style>
        body { font-family: sans-serif; margin: 20px; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ccc; padding: 8px; }
        .red { background: #ffdddd; }
        .orange { background: #ffe5cc; }
        .yellow { background: #ffffcc; }
        .green { background: #ddffdd; }
      </style>
    </head>
    <body>
      <h1>Project Structure Dashboard</h1>
      <h2>Status Overview</h2>
      <table>
        <tr><th>Priority</th><th>Impact</th><th>Issue</th><th>Action</th></tr>
        ${rows || '<tr><td colspan="4" class="green">No issues found 🎉</td></tr>'}
      </table>
      <h2>History (last 5 runs)</h2>
      <pre>${JSON.stringify(history.slice(-5), null, 2)}</pre>
    </body>
    </html>
  `;
  await fs.writeFile(DASHBOARD_FILE, html, "utf8");
  console.log(`📊 Standalone dashboard: ${DASHBOARD_FILE}`);
}

async function main() {
  await ensureDir(REPORTS_DIR);

  const files = await walk(ROOT);
  const issues = classifyWarnings(files);

  // Always write text version
  let output = "=== PROJECT STRUCTURE ===\n";
  output += files.sort().join("\n");
  await fs.writeFile(OUT_FILE, output, "utf8");

  // Write JSON report for main dashboard
  await writeMainDashboardReport(issues);

  // Write standalone dashboard in dev mode
  if (process.env.NODE_ENV === "development") {
    await writeDashboard(issues);
  }

  console.log(`✅ Project structure written to ${OUT_FILE}`);
  console.log(
    `📊 Found ${issues.length} issues: ${issues.filter((i) => i.severity === "red").length} critical, ${issues.filter((i) => i.severity === "orange").length} medium, ${issues.filter((i) => i.severity === "yellow").length} low`,
  );
}

main().catch((e) => {
  console.error("Error generating project report:", e);
  process.exit(1);
});
