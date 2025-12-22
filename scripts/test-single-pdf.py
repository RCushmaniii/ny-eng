"""Test single PDF generation to debug content issues"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER
import json
import os

# Load content
with open('src/data/free/status-update-script.json', 'r', encoding='utf-8') as f:
    content = json.load(f)

# Styles
styles = getSampleStyleSheet()
title_style = ParagraphStyle('Title', parent=styles['Heading1'], fontSize=24, textColor=colors.HexColor('#0f172a'), spaceAfter=6, alignment=TA_CENTER, fontName='Helvetica-Bold')
body_style = ParagraphStyle('Body', parent=styles['Normal'], fontSize=11, textColor=colors.HexColor('#334155'), spaceAfter=12, leading=16)
section_title_style = ParagraphStyle('SectionTitle', parent=styles['Heading2'], fontSize=16, textColor=colors.HexColor('#0f172a'), spaceAfter=12, spaceBefore=20, fontName='Helvetica-Bold')
label_style = ParagraphStyle('Label', parent=styles['Normal'], fontSize=9, textColor=colors.HexColor('#475569'), spaceAfter=4, fontName='Helvetica-Bold')
detail_style = ParagraphStyle('Detail', parent=styles['Normal'], fontSize=10, textColor=colors.HexColor('#334155'), spaceAfter=10, leading=14)

# Create PDF
output_path = 'public/assets/documents/test-status-update.pdf'
doc = SimpleDocTemplate(output_path, pagesize=letter, rightMargin=0.75*inch, leftMargin=0.75*inch, topMargin=0.75*inch, bottomMargin=0.75*inch)

elements = []
element_count = 0

# Title
en = content['en']
elements.append(Paragraph(en['title'], title_style))
element_count += 1
print(f"Added title: {element_count} elements")

# Process sections
sections = en.get('sections', [])
print(f"\nProcessing {len(sections)} sections...")

for i, section in enumerate(sections):
    print(f"\nSection {i+1}: {section.get('id')}")
    
    if section.get('id') == 'intro':
        print("  Skipping intro (already handled)")
        continue
    
    # Section title
    if section.get('title'):
        elements.append(Paragraph(section['title'], section_title_style))
        element_count += 1
        print(f"  Added section title: {element_count} elements")
    
    # Content-only section
    if section.get('content') and not section.get('items'):
        elements.append(Paragraph(section['content'], body_style))
        element_count += 1
        print(f"  Added content paragraph: {element_count} elements")
        continue
    
    # Items
    items = section.get('items', [])
    print(f"  Processing {len(items)} items...")
    
    for j, item in enumerate(items):
        print(f"    Item {j+1}: {item.get('title', 'No title')}")
        
        if item.get('title'):
            elements.append(Paragraph(item['title'], ParagraphStyle('ItemTitle', fontSize=14, textColor=colors.HexColor('#0f172a'), spaceAfter=6, fontName='Helvetica-Bold')))
            element_count += 1
        
        if item.get('content'):
            elements.append(Paragraph(item['content'], detail_style))
            element_count += 1
        
        if item.get('example'):
            example = item['example']
            if isinstance(example, dict):
                if example.get('wrong'):
                    elements.append(Paragraph("❌ WRONG", label_style))
                    elements.append(Paragraph(example['wrong'], detail_style))
                    element_count += 2
                if example.get('right'):
                    elements.append(Paragraph("✅ RIGHT", label_style))
                    elements.append(Paragraph(example['right'], detail_style))
                    element_count += 2
        
        elements.append(Spacer(1, 0.2*inch))
        element_count += 1

print(f"\n\nTotal elements: {element_count}")
print(f"Building PDF with {len(elements)} elements...")

# Build
doc.build(elements)
print(f"✅ PDF created: {output_path}")

# Check file size
size = os.path.getsize(output_path)
print(f"File size: {size} bytes ({size/1024:.1f} KB)")
