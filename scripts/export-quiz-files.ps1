# export-quiz-files.ps1
# PowerShell script to copy all English quiz lead magnet files to a timestamped folder

# Configuration
$sourceRoot = "C:\Users\Robert Cushman\.vscode\Projects\ny-eng"
$destBase = "C:\Users\Robert Cushman\.vscode\Projects\quiz-lead-magnet-export"

# Create timestamped destination folder
$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$destDir = Join-Path $destBase $timestamp
New-Item -ItemType Directory -Path $destDir -Force | Out-Null

Write-Host "=== Quiz Lead Magnet File Export ===" -ForegroundColor Cyan
Write-Host "Source: $sourceRoot" -ForegroundColor Gray
Write-Host "Destination: $destDir" -ForegroundColor Gray
Write-Host ""

# Define all quiz-related files to copy
$filesToCopy = @(
    # === QUIZ PAGES (English) ===
    "src\pages\en\quiz\index.astro",
    "src\pages\en\quiz\start.astro",
    "src\pages\en\quiz\question\``[id``].astro",
    "src\pages\en\quiz\results.astro",
    "src\pages\en\quiz\report.astro",
    "src\pages\en\quiz\report-pre-call.astro",
    "src\pages\en\quiz\test-plan.astro",
    
    # === API ENDPOINTS ===
    "src\pages\api\quiz\submit.ts",
    "src\pages\api\quiz\test.ts",
    
    # === DATA & LOGIC ===
    "src\data\quiz\questions.ts",
    "src\data\quiz\scoring.ts",
    
    # === COMPONENTS (Quiz-specific) ===
    "src\components\action-plan.astro",
    "src\components\next-steps-en.astro",
    "src\components\mid-cta-en.astro",
    "src\components\ReportCarousel.astro",
    "src\components\ReportCarousel.jsx",
    "src\components\QuizReport.tsx",
    "src\components\seo\QuizSchema.astro",
    
    # === SHARED COMPONENTS (UI) ===
    "src\components\ui\Button.astro",
    
    # === LAYOUTS ===
    "src\layouts\Base.astro",
    
    # === CONFIG FILES ===
    "astro.config.mjs",
    "tsconfig.json",
    "package.json",
    "tailwind.config.cjs"
)

# Initialize counters and tracking
$copied = 0
$errors = 0
$fileMap = @()

Write-Host "Copying files..." -ForegroundColor Yellow
Write-Host ""

foreach ($relPath in $filesToCopy) {
    $sourcePath = Join-Path $sourceRoot $relPath
    
    # Check if source file exists
    if (-not (Test-Path $sourcePath)) {
        Write-Host "  [SKIP] $relPath (not found)" -ForegroundColor DarkYellow
        continue
    }
    
    # Create smart destination name (flatten structure but keep context)
    $fileName = Split-Path $relPath -Leaf
    $parentPath = Split-Path $relPath -Parent
    
    # For generic names like index.astro, prepend parent directory
    $genericNames = @("index.astro", "[id].astro", "submit.ts", "test.ts")
    if ($genericNames -contains $fileName -and $parentPath) {
        $parentDir = Split-Path $parentPath -Leaf
        $destFileName = "${parentDir}-${fileName}"
    } else {
        $destFileName = $fileName
    }
    
    # Handle duplicates by appending number
    $destPath = Join-Path $destDir $destFileName
    $counter = 1
    while (Test-Path $destPath) {
        $ext = [System.IO.Path]::GetExtension($destFileName)
        $nameWithoutExt = [System.IO.Path]::GetFileNameWithoutExtension($destFileName)
        $destFileName = "${nameWithoutExt}_${counter}${ext}"
        $destPath = Join-Path $destDir $destFileName
        $counter++
    }
    
    # Copy the file
    try {
        Copy-Item -Path $sourcePath -Destination $destPath -Force
        Write-Host "  [OK] $relPath -> $destFileName" -ForegroundColor Green
        $copied++
        
        # Track mapping
        $fileMap += [PSCustomObject]@{
            OriginalPath = $relPath
            RenamedFile = $destFileName
            Category = switch -Wildcard ($relPath) {
                "*\pages\en\quiz\*" { "Quiz Pages" }
                "*\pages\api\quiz\*" { "API Endpoints" }
                "*\data\quiz\*" { "Data & Logic" }
                "*\components\*" { "Components" }
                "*\layouts\*" { "Layouts" }
                default { "Config" }
            }
        }
    }
    catch {
        Write-Host "  [ERROR] $relPath : $($_.Exception.Message)" -ForegroundColor Red
        $errors++
    }
}

Write-Host ""
Write-Host "Creating file map..." -ForegroundColor Yellow

# Create CSV file map
$csvPath = Join-Path $destDir "file-map.csv"
$fileMap | Export-Csv -Path $csvPath -NoTypeInformation -Encoding UTF8

# Create README with file organization
$readmePath = Join-Path $destDir "README.md"
$readmeContent = @"
# Quiz Lead Magnet Files Export

**Export Date:** $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")
**Source:** $sourceRoot

## File Organization

### Quiz Pages (English)
- **quiz-index.astro** - Landing page with hero, benefits, testimonials
- **start.astro** - Quiz start page with instructions
- **question-[id].astro** - Dynamic question page template
- **results.astro** - Results page with lead capture form
- **report.astro** - Client-side report viewer (uses QuizReport.tsx)
- **report-pre-call.astro** - Full PDF-ready report with all analysis
- **test-plan.astro** - Test page for action plan component

### API Endpoints
- **submit.ts** - Handles quiz submission, scoring, and data storage
- **test.ts** - Test endpoint for API validation

### Data & Logic
- **questions.ts** - Quiz questions (English & Spanish)
- **scoring.ts** - Scoring algorithm and gap analysis logic

### Components
**Quiz-Specific:**
- **action-plan.astro** - 90-day action plan component
- **next-steps-en.astro** - Next steps and recommendations
- **mid-cta-en.astro** - Mid-report CTA component
- **ReportCarousel.astro** - Report preview carousel
- **ReportCarousel.jsx** - React version of carousel
- **QuizReport.tsx** - Client-side React report component
- **QuizSchema.astro** - SEO schema for quiz pages

**Shared UI:**
- **Button.astro** - Reusable button component

### Layouts
- **Base.astro** - Main layout with header, footer, SEO, i18n

### Configuration
- **astro.config.mjs** - Astro configuration
- **tsconfig.json** - TypeScript configuration
- **package.json** - Dependencies and scripts
- **tailwind.config.cjs** - Tailwind CSS configuration

## Key Features

1. **Multi-page Quiz Flow**: Landing → Start → Questions → Results → Report
2. **Dynamic Scoring**: Category-based scoring with gap analysis
3. **Lead Capture**: Email collection with quiz results
4. **PDF Report**: Print-friendly comprehensive report
5. **SEO Optimized**: Schema markup, meta tags, hreflang
6. **Bilingual Ready**: English implementation (Spanish exists separately)
7. **Responsive Design**: Mobile-first with Tailwind CSS

## Technical Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Icons**: Lucide Astro
- **Language**: TypeScript
- **State**: sessionStorage for quiz flow
- **API**: Astro API routes

## File Map

See \`file-map.csv\` for complete original path → renamed file mapping.

---

**Total Files Exported:** $copied
**Export Errors:** $errors
"@

Set-Content -Path $readmePath -Value $readmeContent -Encoding UTF8

Write-Host ""
Write-Host "=== Export Complete ===" -ForegroundColor Cyan
Write-Host "Files copied: $copied" -ForegroundColor Green
Write-Host "Errors: $errors" -ForegroundColor $(if ($errors -gt 0) { "Red" } else { "Green" })
Write-Host ""
Write-Host "Output folder: $destDir" -ForegroundColor White
Write-Host "File map: $csvPath" -ForegroundColor White
Write-Host "README: $readmePath" -ForegroundColor White
Write-Host ""
