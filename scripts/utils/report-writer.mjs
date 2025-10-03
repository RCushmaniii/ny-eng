// scripts/utils/report-writer.mjs
import { promises as fs } from "fs";
import path from "path";

export async function writeReport(scriptName, jsonData, textData) {
  const reportsDir = path.join(process.cwd(), "project-reports", scriptName);
  const archiveDir = path.join(reportsDir, "archive");
  await fs.mkdir(archiveDir, { recursive: true });

  // Archive existing current.json/.txt
  const timestamp = new Date().toISOString().replace(/[:T]/g, "-").split(".")[0];

  for (const ext of [".json", ".txt"]) {
    const currentFile = path.join(reportsDir, `current${ext}`);
    try {
      const stat = await fs.stat(currentFile);
      if (stat.isFile()) {
        const archivedFile = path.join(
          archiveDir,
          `${scriptName}-${timestamp}${ext}`
        );
        await fs.rename(currentFile, archivedFile);
      }
    } catch {
      // no file yet
    }
  }

  // Write new current.json
  await fs.writeFile(
    path.join(reportsDir, "current.json"),
    JSON.stringify(jsonData, null, 2),
    "utf8"
  );

  // Write new current.txt
  if (textData) {
    await fs.writeFile(
      path.join(reportsDir, "current.txt"),
      textData,
      "utf8"
    );
  }
}
