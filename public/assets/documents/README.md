# PDF Files for Free Resources

## Current Files

### 5-questions-senior-guide.pdf

**Status:** ⚠️ NEEDS TO BE CREATED

**Content:** Bilingual (EN/ES) guide with the 5 strategic questions

**Design Requirements:**

- Executive Memo aesthetic (white backgrounds, subtle borders, accent colors)
- Professional typography (serif numbers, clean hierarchy)
- Proper page breaks (no awkward cuts)
- Both English and Spanish sections
- Company branding (logo, footer)

**File Location:** `/public/assets/documents/5-questions-senior-guide.pdf`

**Web URL:** `https://www.nyenglishteacher.com/assets/documents/5-questions-senior-guide.pdf`

---

## How to Create the PDF

### Option 1: Export from Web Page (Recommended)

1. Visit: `http://localhost:4321/en/free/5-questions/`
2. Open browser DevTools (F12)
3. Toggle device toolbar to "Print" mode
4. Right-click → Print → Save as PDF
5. Name it: `5-questions-senior-guide.pdf`
6. Place in this folder

### Option 2: Design in Canva/Figma

1. Use the Executive Memo design system
2. Export as PDF with proper margins
3. Ensure text is selectable (not just images)
4. Test file size (keep under 2MB for fast downloads)

### Option 3: Use the HTML Template

The old `generatePdfContent()` function (now removed) contained a complete HTML template.
You can find it in git history if needed.

---

## Testing the Download

After placing the PDF file here, test:

1. **Direct URL:** Visit `/assets/documents/5-questions-senior-guide.pdf`
2. **Download button:** Click the button on the page
3. **File opens correctly:** Verify content displays properly
4. **File downloads:** Check it saves with correct filename

---

## File Naming Convention

- Use kebab-case (hyphens, not underscores)
- Include language if single-language: `guide-en.pdf`, `guide-es.pdf`
- Include "bilingual" if both languages: `guide-bilingual.pdf`
- Keep names descriptive but concise

---

## Future Resources

When adding more free resources:

1. Create the PDF file
2. Place it in this folder
3. Update the download link in the component
4. Test the download flow
5. Update this README
