# PDF Generation System

## Overview

This system automatically generates PDFs for all free resources from JSON files. PDFs are created during the pre-deployment process and stored in `/public/assets/documents/`.

## How It Works

### 1. Source Files

- JSON files in `src/data/free/*.json` contain the content
- Each JSON file has bilingual content (English and Spanish)
- Content includes questions, sentences, guides, templates, etc.

### 2. PDF Generator Script

- **Location:** `scripts/generate-all-pdfs.py`
- **Technology:** Python with ReportLab library
- **Output:** Professional, bilingual PDFs with executive design

### 3. Automatic Generation

PDFs are automatically generated when you run:

```bash
npm run pre-deploy
```

This runs the following sequence:

1. `npm run generate:pdfs` - Generates all PDFs
2. `npm run build` - Builds the Astro site
3. Runs SEO audits and validation

## Manual PDF Generation

### Generate All PDFs

```bash
npm run generate:pdfs
```

Or directly:

```bash
python scripts/generate-all-pdfs.py
```

### Install Python Dependencies

First time setup:

```bash
pip install -r scripts/requirements.txt
```

## PDF Features

### Design

- Executive memo aesthetic
- Professional typography
- Bilingual (English + Spanish sections)
- Consistent branding
- Print-friendly layout

### Content Types Supported

1. **Questions** - Structured Q&A with examples
2. **Sentences** - Reusable sentence templates
3. **Generic** - Fallback for other content types

### PDF Structure

Each PDF includes:

- Title and subtitle
- Language badges (ENGLISH / ESPAÑOL)
- Introduction paragraph
- Main content (questions, sentences, etc.)
- Detailed explanations:
  - Why it works
  - When to use
  - What to avoid
  - How to say it
  - Variations/examples
- Footer with website URL

## File Naming Convention

PDFs are named to match their JSON slug:

- JSON: `5-questions.json`
- PDF: `5-questions.pdf`
- URL: `/assets/documents/5-questions.pdf`

## Download Button Integration

The download buttons in `GenericFreeAsset.tsx` automatically link to:

```
/assets/documents/${slug}.pdf
```

No manual configuration needed - just ensure PDFs are generated before deployment.

## Troubleshooting

### PDFs Not Generating

1. Check Python is installed: `python --version`
2. Install dependencies: `pip install -r scripts/requirements.txt`
3. Run manually: `python scripts/generate-all-pdfs.py`
4. Check error messages in console

### Missing PDFs

- PDFs are generated from JSON files in `src/data/free/`
- Files without `metadata` or `en` content are skipped
- Check the script output for skipped files

### PDF Content Issues

- Edit the source JSON file in `src/data/free/`
- Re-run `npm run generate:pdfs`
- PDFs are regenerated from scratch each time

## Adding New Resources

1. Create new JSON file in `src/data/free/`
2. Follow the schema (see existing files)
3. Run `npm run generate:pdfs`
4. PDF is automatically created with matching filename

## Current Status

✅ **21 PDFs successfully generated**

All free resources now have downloadable PDFs:

- 10-common-mistakes-executive-english.pdf
- 5-minute-negotiation-script.pdf
- 5-principles-executive-english.pdf
- 5-questions.pdf
- 5-quick-wins-executive-english.pdf
- 60-second-self-introduction-template.pdf
- 7-sentences-leadership-english.pdf
- client-call-opening-closing-framework.pdf
- difficult-conversation-checklist.pdf
- email-templates-difficult-situations.pdf
- executive-summary-formula.pdf
- feedback-framework.pdf
- interview-answer-templates.pdf
- meeting-rescue-phrases.pdf
- phrases-aggressive-clients.pdf
- professional-apology-framework.pdf
- pushback-playbook.pdf
- questions-that-close-deals.pdf
- salary-negotiation-script.pdf
- status-update-script.pdf
- technical-explanation-formula.pdf

## Deployment Checklist

Before deploying:

- [ ] Run `npm run pre-deploy` (includes PDF generation)
- [ ] Verify PDFs exist in `public/assets/documents/`
- [ ] Test download buttons on dev server
- [ ] Check PDF content renders correctly
- [ ] Confirm bilingual sections are complete

## Performance Notes

- PDF generation takes ~5-10 seconds for all resources
- PDFs are static files (no runtime generation)
- Average PDF size: 2-18 KB (very lightweight)
- No impact on site performance
