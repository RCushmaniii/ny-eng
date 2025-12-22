# JSON Schema Validator for Free Resources
# Validates all JSON files against the standardItem schema

$ErrorActionPreference = "Stop"

# Define valid schema keys
$validKeys = @{
    root    = @('metadata', 'classification', 'targeting', 'conversion', 'seo', 'analytics', 'slugEn', 'slugEs', 'en', 'es')
    section = @('id', 'title', 'content', 'items', 'principle', 'description', 'timing')
    item    = @('number', 'title', 'content', 'example', 'actionItem', 'doNotSay', 'wrongExample', 'rightExample', 'situation', 'when', 'why', 'howToSay', 'variations', 'alternative', 'phrase', 'mistake', 'problem', 'fix')
}

# Legacy keys that should NOT exist
$legacyKeys = @('letter', 'name', 'description', 'tip', 'template', 'type', 'mistakes', 'days', 'tasks', 'scripts', 'scenarios', 'steps', 'subsections', 'formula')

function Test-JsonFile {
    param(
        [string]$FilePath
    )
    
    $fileName = Split-Path $FilePath -Leaf
    $issues = @()
    
    try {
        $json = Get-Content $FilePath -Raw | ConvertFrom-Json
        
        # Check English sections
        if ($json.en.sections) {
            foreach ($section in $json.en.sections) {
                # Check for legacy keys in section
                foreach ($key in $legacyKeys) {
                    if ($section.PSObject.Properties.Name -contains $key) {
                        $issues += "  ❌ EN Section '$($section.id)' has legacy key: '$key'"
                    }
                }
                
                # Check items if they exist
                if ($section.items) {
                    foreach ($item in $section.items) {
                        # Check for legacy keys in items
                        foreach ($key in $legacyKeys) {
                            if ($item.PSObject.Properties.Name -contains $key) {
                                $issues += "  ❌ EN Section '$($section.id)' item has legacy key: '$key'"
                            }
                        }
                        
                        # Check if item has number and title (required)
                        if (-not $item.number) {
                            $issues += "  ⚠️  EN Section '$($section.id)' item missing 'number'"
                        }
                        if (-not $item.title -and -not $item.phrase -and -not $item.mistake) {
                            $issues += "  ⚠️  EN Section '$($section.id)' item missing 'title' (or phrase/mistake)"
                        }
                    }
                }
            }
        }
        
        # Check Spanish sections
        if ($json.es.sections) {
            foreach ($section in $json.es.sections) {
                # Check for legacy keys in section
                foreach ($key in $legacyKeys) {
                    if ($section.PSObject.Properties.Name -contains $key) {
                        $issues += "  ❌ ES Section '$($section.id)' has legacy key: '$key'"
                    }
                }
                
                # Check items if they exist
                if ($section.items) {
                    foreach ($item in $section.items) {
                        # Check for legacy keys in items
                        foreach ($key in $legacyKeys) {
                            if ($item.PSObject.Properties.Name -contains $key) {
                                $issues += "  ❌ ES Section '$($section.id)' item has legacy key: '$key'"
                            }
                        }
                        
                        # Check if item has number and title (required)
                        if (-not $item.number) {
                            $issues += "  ⚠️  ES Section '$($section.id)' item missing 'number'"
                        }
                        if (-not $item.title -and -not $item.phrase -and -not $item.mistake) {
                            $issues += "  ⚠️  ES Section '$($section.id)' item missing 'title' (or phrase/mistake)"
                        }
                    }
                }
            }
        }
        
    }
    catch {
        $issues += "  ❌ JSON parsing error: $($_.Exception.Message)"
    }
    
    return @{
        File    = $fileName
        Issues  = $issues
        IsValid = ($issues.Count -eq 0)
    }
}

# Main execution
Write-Host "`n================================================" -ForegroundColor Cyan
Write-Host "JSON SCHEMA VALIDATION REPORT" -ForegroundColor Cyan
Write-Host "================================================`n" -ForegroundColor Cyan

$jsonFiles = Get-ChildItem "src/data/free/*.json" -Exclude "schema.json"
$results = @()

foreach ($file in $jsonFiles) {
    $result = Test-JsonFile -FilePath $file.FullName
    $results += $result
    
    if ($result.IsValid) {
        Write-Host "✅ $($result.File)" -ForegroundColor Green
    }
    else {
        Write-Host "❌ $($result.File)" -ForegroundColor Red
        foreach ($issue in $result.Issues) {
            Write-Host $issue -ForegroundColor Yellow
        }
    }
}

# Summary
Write-Host "`n================================================" -ForegroundColor Cyan
Write-Host "SUMMARY" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan

$validCount = ($results | Where-Object { $_.IsValid }).Count
$invalidCount = ($results | Where-Object { -not $_.IsValid }).Count

Write-Host "Total Files: $($results.Count)" -ForegroundColor White
Write-Host "✅ Valid: $validCount" -ForegroundColor Green
Write-Host "❌ Invalid: $invalidCount" -ForegroundColor Red

if ($invalidCount -gt 0) {
    Write-Host "`n⚠️  Files needing migration:" -ForegroundColor Yellow
    $results | Where-Object { -not $_.IsValid } | ForEach-Object {
        Write-Host "   - $($_.File)" -ForegroundColor Yellow
    }
    exit 1
}
else {
    Write-Host "`n🎉 All files comply with schema!" -ForegroundColor Green
    exit 0
}
