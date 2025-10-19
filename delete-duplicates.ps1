# Delete duplicate route files
$files = @(
    "src\pages\en\blog\[page].astro",
    "src\pages\es\blog\[page].astro",
    "src\pages\en\blog\[...slug].astro",
    "src\pages\es\blog\[...slug].astro"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Remove-Item $file -Force
        Write-Host "Deleted: $file"
    } else {
        Write-Host "Not found: $file"
    }
}

Write-Host "`nDone! Now run: npm run build"
