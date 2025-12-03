# Test quiz submission to Netlify Function
# This simulates what the quiz form sends

$testPayload = @{
    name               = "Test User"
    email              = "test@example.com"
    company            = "Test Company"
    phone              = "+1234567890"
    quiz_type          = "it-services"
    quiz_version       = "1.0"
    language           = "en"
    raw_score          = 15
    total_score        = 75
    score_tier         = "intermediate"
    category_scores    = @{
        technical     = 80
        communication = 70
    }
    primary_gap        = @{
        category = "communication"
        score    = 70
    }
    secondary_gap      = @{
        category = "technical"
        score    = 80
    }
    completion_time_ms = 120000
    device_type        = "desktop"
    browser            = "Chrome"
    referrer           = "https://www.nyenglishteacher.com/en/"
    utm_source         = "test"
    utm_medium         = "script"
    utm_campaign       = "test-campaign"
    utm_content        = $null
    utm_term           = $null
    answers            = @(
        @{
            question_number = 1
            question_text   = "Test question 1?"
            answer_text     = "Test answer 1"
            answer_index    = 0
            points          = 5
            category        = "technical"
        },
        @{
            question_number = 2
            question_text   = "Test question 2?"
            answer_text     = "Test answer 2"
            answer_index    = 1
            points          = 5
            category        = "communication"
        }
    )
} | ConvertTo-Json -Depth 10

Write-Host "Testing quiz submission to Netlify Function..." -ForegroundColor Cyan
Write-Host ""
Write-Host "Payload:" -ForegroundColor Yellow
Write-Host $testPayload
Write-Host ""

try {
    $response = Invoke-WebRequest `
        -Uri "https://ny-eng-api.netlify.app/.netlify/functions/quiz-submit" `
        -Method POST `
        -ContentType "application/json" `
        -Body $testPayload `
        -UseBasicParsing

    Write-Host "SUCCESS!" -ForegroundColor Green
    Write-Host "Status Code: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "Response:" -ForegroundColor Yellow
    Write-Host $response.Content
}
catch {
    Write-Host "FAILED!" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $responseBody = $reader.ReadToEnd()
        Write-Host "Response Body:" -ForegroundColor Yellow
        Write-Host $responseBody
    }
}
