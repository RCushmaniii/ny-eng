# Build script for Hostinger deployment
# Temporarily moves server-rendered pages, builds static site, then restores them

Write-Host "Building for Hostinger..." -ForegroundColor Cyan

# Step 1: Move server-rendered pages out temporarily
Write-Host "Moving server pages temporarily..." -ForegroundColor Yellow
Move-Item "src\pages\api" "api-temp" -Force -ErrorAction SilentlyContinue
Move-Item "src\pages\admin" "admin-temp" -Force -ErrorAction SilentlyContinue
Move-Item "src\pages\dev" "dev-temp" -Force -ErrorAction SilentlyContinue

# Step 2: Build static site
Write-Host "Building static site..." -ForegroundColor Yellow
pnpm run build

$buildSuccess = $LASTEXITCODE -eq 0

# Step 3: Restore server pages
Write-Host "Restoring server pages..." -ForegroundColor Yellow
Move-Item "api-temp" "src\pages\api" -Force -ErrorAction SilentlyContinue
Move-Item "admin-temp" "src\pages\admin" -Force -ErrorAction SilentlyContinue
Move-Item "dev-temp" "src\pages\dev" -Force -ErrorAction SilentlyContinue

if ($buildSuccess) {
    Write-Host "SUCCESS: Build complete! Upload dist/ folder to Hostinger" -ForegroundColor Green
}
else {
    Write-Host "ERROR: Build failed!" -ForegroundColor Red
    exit 1
}
