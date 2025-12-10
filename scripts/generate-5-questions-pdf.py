"""
Generate the 5 Questions Senior Guide PDF
Executive Memo Design - Bilingual (EN/ES)

Reads content from: src/data/free/5-questions-content.json
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, Image
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.pdfgen import canvas
import os
import json

# Paths
SCRIPT_DIR = os.path.dirname(__file__)
ROOT_DIR = os.path.join(SCRIPT_DIR, '..')
CONTENT_PATH = os.path.join(ROOT_DIR, 'src', 'data', 'free', '5-questions-content.json')
OUTPUT_PATH = os.path.join(ROOT_DIR, 'public', 'assets', 'documents', '5-questions-senior-guide.pdf')

# Ensure directory exists
os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)

# Load content from JSON (single source of truth)
with open(CONTENT_PATH, 'r', encoding='utf-8') as f:
    content_data = json.load(f)

content_en = content_data['en']
content_es = content_data['es']

# Build quick reference tables from JSON data
quick_ref_en = [
    [content_en['labels']['situation'], content_en['labels']['seniorQuestion']]
]
for row in content_en['quickRef']['rows']:
    quick_ref_en.append([row['situation'], f"\"{row['question']}\""])

quick_ref_es = [
    [content_es['labels']['situation'], content_es['labels']['seniorQuestion']]
]
for row in content_es['quickRef']['rows']:
    quick_ref_es.append([row['situation'], f"\"{row['question']}\""])

def create_pdf():
    """Generate the PDF with Executive Memo design"""
    
    # Create document
    doc = SimpleDocTemplate(
        OUTPUT_PATH,
        pagesize=letter,
        rightMargin=0.75*inch,
        leftMargin=0.75*inch,
        topMargin=0.75*inch,
        bottomMargin=0.75*inch
    )
    
    # Container for the 'Flowable' objects
    elements = []
    
    # Define styles
    styles = getSampleStyleSheet()
    
    # Custom styles - Executive Memo aesthetic
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        textColor=colors.HexColor('#0f172a'),
        spaceAfter=6,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    )
    
    subtitle_style = ParagraphStyle(
        'CustomSubtitle',
        parent=styles['Normal'],
        fontSize=14,
        textColor=colors.HexColor('#64748b'),
        spaceAfter=20,
        alignment=TA_CENTER,
        fontName='Helvetica'
    )
    
    intro_bold_style = ParagraphStyle(
        'IntroBold',
        parent=styles['Normal'],
        fontSize=12,
        textColor=colors.HexColor('#0f172a'),
        spaceAfter=6,
        fontName='Helvetica-Bold'
    )
    
    intro_style = ParagraphStyle(
        'Intro',
        parent=styles['Normal'],
        fontSize=11,
        textColor=colors.HexColor('#475569'),
        spaceAfter=20,
        leading=16
    )
    
    section_title_style = ParagraphStyle(
        'SectionTitle',
        parent=styles['Heading2'],
        fontSize=16,
        textColor=colors.HexColor('#0f172a'),
        spaceAfter=12,
        spaceBefore=20,
        fontName='Helvetica-Bold'
    )
    
    question_number_style = ParagraphStyle(
        'QuestionNumber',
        parent=styles['Normal'],
        fontSize=36,
        textColor=colors.HexColor('#cbd5e1'),
        fontName='Times-Roman'
    )
    
    question_text_style = ParagraphStyle(
        'QuestionText',
        parent=styles['Normal'],
        fontSize=13,
        textColor=colors.HexColor('#0f172a'),
        spaceAfter=8,
        fontName='Helvetica-Bold'
    )
    
    label_style = ParagraphStyle(
        'Label',
        parent=styles['Normal'],
        fontSize=9,
        textColor=colors.HexColor('#475569'),
        spaceAfter=2,
        fontName='Helvetica-Bold'
    )
    
    detail_style = ParagraphStyle(
        'Detail',
        parent=styles['Normal'],
        fontSize=10,
        textColor=colors.HexColor('#334155'),
        spaceAfter=8,
        leading=14
    )
    
    pattern_style = ParagraphStyle(
        'Pattern',
        parent=styles['Normal'],
        fontSize=10,
        textColor=colors.HexColor('#334155'),
        spaceAfter=6,
        leading=14
    )
    
    # Header
    elements.append(Paragraph(content_en["title"], title_style))
    elements.append(Paragraph(content_en["subtitle"], subtitle_style))
    elements.append(Spacer(1, 0.2*inch))
    
    # Language label
    lang_label = Paragraph("<b>ENGLISH</b>", ParagraphStyle(
        'LangLabel',
        parent=styles['Normal'],
        fontSize=10,
        textColor=colors.white,
        backColor=colors.HexColor('#2563eb'),
        borderPadding=6,
        fontName='Helvetica-Bold'
    ))
    elements.append(lang_label)
    elements.append(Spacer(1, 0.15*inch))
    
    # Intro
    elements.append(Paragraph(f"{content_en['intro']['line1']} <b>{content_en['intro']['line2']}</b>", intro_bold_style))
    elements.append(Paragraph(content_en['intro']['paragraph'], intro_style))
    elements.append(Spacer(1, 0.2*inch))
    
    # Questions
    for q in content_en['questions']:
        # Question number and text
        elements.append(Paragraph(f"{q['number']:02d}", question_number_style))
        elements.append(Paragraph(f"\"{q['question']}\"", question_text_style))
        elements.append(Spacer(1, 0.1*inch))
        
        # Why
        elements.append(Paragraph("WHY IT WORKS", label_style))
        elements.append(Paragraph(q['why'], detail_style))
        
        # When
        elements.append(Paragraph("WHEN TO USE", label_style))
        elements.append(Paragraph(q['when'], detail_style))
        
        # Do not say
        elements.append(Paragraph("AVOID SAYING", label_style))
        elements.append(Paragraph(q['doNotSay'], detail_style))
        
        # How to say
        elements.append(Paragraph("SAY IT LIKE THIS", label_style))
        elements.append(Paragraph(q['howToSay'], detail_style))
        
        # Variations
        if q['variations']:
            elements.append(Paragraph("VARIATIONS", label_style))
            elements.append(Paragraph(q['variations'], detail_style))
        
        elements.append(Spacer(1, 0.2*inch))
    
    # Pattern section
    elements.append(Paragraph(content_en['pattern']['title'], section_title_style))
    elements.append(Paragraph(content_en['pattern']['intro'], pattern_style))
    for item in content_en['pattern']['items']:
        elements.append(Paragraph(f"<b>{item['bold']}</b>{item['text']}", pattern_style))
    elements.append(Spacer(1, 0.2*inch))
    
    # Quick reference table
    elements.append(Paragraph("Quick Reference", section_title_style))
    
    table = Table(quick_ref_en, colWidths=[2.5*inch, 4*inch])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#2563eb')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 11),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('TOPPADDING', (0, 0), (-1, 0), 12),
        ('BACKGROUND', (0, 1), (-1, -1), colors.white),
        ('TEXTCOLOR', (0, 1), (-1, -1), colors.HexColor('#334155')),
        ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 1), (-1, -1), 9),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.HexColor('#f8fafc'), colors.white]),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#e2e8f0')),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 10),
        ('RIGHTPADDING', (0, 0), (-1, -1), 10),
        ('TOPPADDING', (0, 1), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 1), (-1, -1), 8),
    ]))
    elements.append(table)
    
    # Page break before Spanish section
    elements.append(PageBreak())
    
    # Spanish section
    lang_label_es = Paragraph("<b>ESPAÑOL</b>", ParagraphStyle(
        'LangLabelES',
        parent=styles['Normal'],
        fontSize=10,
        textColor=colors.white,
        backColor=colors.HexColor('#2563eb'),
        borderPadding=6,
        fontName='Helvetica-Bold'
    ))
    elements.append(lang_label_es)
    elements.append(Spacer(1, 0.15*inch))
    
    # Intro ES
    elements.append(Paragraph(f"{content_es['intro']['line1']} <b>{content_es['intro']['line2']}</b>", intro_bold_style))
    elements.append(Paragraph(content_es['intro']['paragraph'], intro_style))
    elements.append(Spacer(1, 0.2*inch))
    
    # Questions ES
    for q in content_es['questions']:
        elements.append(Paragraph(f"{q['number']:02d}", question_number_style))
        elements.append(Paragraph(f"\"{q['question']}\"", question_text_style))
        elements.append(Spacer(1, 0.1*inch))
        
        elements.append(Paragraph("POR QUÉ FUNCIONA", label_style))
        elements.append(Paragraph(q['why'], detail_style))
        
        elements.append(Paragraph("CUÁNDO USARLA", label_style))
        elements.append(Paragraph(q['when'], detail_style))
        
        elements.append(Paragraph("NO DIGAS", label_style))
        elements.append(Paragraph(q['doNotSay'], detail_style))
        
        elements.append(Paragraph("CÓMO DECIRLA", label_style))
        elements.append(Paragraph(q['howToSay'], detail_style))
        
        if q['variations']:
            elements.append(Paragraph("OTRAS FORMAS DE DECIRLA", label_style))
            elements.append(Paragraph(q['variations'], detail_style))
        
        elements.append(Spacer(1, 0.2*inch))
    
    # Pattern section ES
    elements.append(Paragraph(content_es['pattern']['title'], section_title_style))
    elements.append(Paragraph(content_es['pattern']['intro'], pattern_style))
    for item in content_es['pattern']['items']:
        elements.append(Paragraph(f"<b>{item['bold']}</b>{item['text']}", pattern_style))
    elements.append(Spacer(1, 0.2*inch))
    
    # Quick reference table ES
    elements.append(Paragraph("Referencia Rápida", section_title_style))
    
    table_es = Table(quick_ref_es, colWidths=[2.5*inch, 4*inch])
    table_es.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#2563eb')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 11),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('TOPPADDING', (0, 0), (-1, 0), 12),
        ('BACKGROUND', (0, 1), (-1, -1), colors.white),
        ('TEXTCOLOR', (0, 1), (-1, -1), colors.HexColor('#334155')),
        ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 1), (-1, -1), 9),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.HexColor('#f8fafc'), colors.white]),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#e2e8f0')),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 10),
        ('RIGHTPADDING', (0, 0), (-1, -1), 10),
        ('TOPPADDING', (0, 1), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 1), (-1, -1), 8),
    ]))
    elements.append(table_es)
    
    # Footer
    elements.append(Spacer(1, 0.3*inch))
    footer_style = ParagraphStyle(
        'Footer',
        parent=styles['Normal'],
        fontSize=9,
        textColor=colors.HexColor('#64748b'),
        alignment=TA_CENTER
    )
    elements.append(Paragraph("nyenglishteacher.com", footer_style))
    
    # Build PDF
    doc.build(elements)
    print(f"✅ PDF created successfully: {OUTPUT_PATH}")

if __name__ == "__main__":
    create_pdf()
