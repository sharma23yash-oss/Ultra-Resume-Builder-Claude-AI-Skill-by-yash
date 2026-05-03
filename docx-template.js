// ============================================================
// ULTRA RESUME BUILDER — Professional DOCX Template
// Color Scheme: Navy #1A2744 | Steel Blue #2563EB | Black #111111
// No fancy colors. No sidebars. No icons. ATS-safe single column.
// ============================================================
// Install: npm install docx
// Run: node docx-template.js
// ============================================================

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType,
  LevelFormat, ExternalHyperlink, TabStopType, TabStopPosition,
  ShadingType, VerticalAlign
} = require('docx');
const fs = require('fs');

// ─── COLOR PALETTE ────────────────────────────────────────────
const COLORS = {
  navyDark:   '1A2744',  // Name, section headers
  steelBlue:  '2563EB',  // Thin rule under name only
  nearBlack:  '111111',  // Body text
  midGray:    '555555',  // LinkedIn, GitHub, dates (metadata)
  lightGray:  'CCCCCC',  // Thin dividers between sections
  white:      'FFFFFF',  // Background
};

// ─── FONT SETTINGS ────────────────────────────────────────────
const FONTS = {
  name: 36,        // 18pt
  sectionHead: 22, // 11pt
  body: 20,        // 10pt
  meta: 18,        // 9pt
};

// ─── HELPER: THIN HORIZONTAL RULE ─────────────────────────────
function sectionDivider(color = COLORS.lightGray) {
  return new Paragraph({
    spacing: { before: 0, after: 0 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 4, color, space: 1 }
    },
    children: []
  });
}

// ─── HELPER: SECTION HEADER ───────────────────────────────────
function sectionHeader(title) {
  return new Paragraph({
    spacing: { before: 180, after: 60 },
    children: [
      new TextRun({
        text: title.toUpperCase(),
        bold: true,
        size: FONTS.sectionHead,
        color: COLORS.navyDark,
        font: 'Calibri',
      })
    ]
  });
}

// ─── HELPER: EXPERIENCE ROLE HEADER ───────────────────────────
// Two-column effect with tab stops
function roleHeader(title, company, dateRange, location = '') {
  return new Paragraph({
    spacing: { before: 120, after: 40 },
    tabStops: [
      { type: TabStopType.RIGHT, position: 9360 } // right edge
    ],
    children: [
      new TextRun({
        text: title,
        bold: true,
        size: FONTS.body,
        color: COLORS.nearBlack,
        font: 'Calibri',
      }),
      new TextRun({
        text: `  |  ${company}`,
        bold: false,
        size: FONTS.body,
        color: COLORS.midGray,
        font: 'Calibri',
      }),
      new TextRun({
        text: `\t${dateRange}`,
        size: FONTS.meta,
        color: COLORS.midGray,
        font: 'Calibri',
      }),
    ]
  });
}

// ─── HELPER: BULLET POINT ─────────────────────────────────────
function bullet(text, bold = false) {
  return new Paragraph({
    spacing: { before: 20, after: 20 },
    numbering: { reference: 'bullets', level: 0 },
    children: [
      new TextRun({
        text,
        size: FONTS.body,
        bold,
        color: COLORS.nearBlack,
        font: 'Calibri',
      })
    ]
  });
}

// ─── HELPER: HYPERLINK TEXT ───────────────────────────────────
function hyperlink(text, url) {
  return new ExternalHyperlink({
    link: url,
    children: [
      new TextRun({
        text,
        style: 'Hyperlink',
        size: FONTS.meta,
        color: COLORS.steelBlue,
        font: 'Calibri',
      })
    ]
  });
}

// ─── MAIN: BUILD RESUME ───────────────────────────────────────
function buildResume(data) {
  // data = {
  //   name, title, phone, email, city, linkedinUrl, linkedinText,
  //   githubUrl, githubText,
  //   summary, skills, experience, projects, education,
  //   certifications, extracurricular
  // }

  const sections_content = [];

  // ── NAME + CONTACT HEADER ──────────────────────────────────
  sections_content.push(
    new Paragraph({
      spacing: { before: 0, after: 60 },
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: data.name.toUpperCase(),
          bold: true,
          size: FONTS.name,
          color: COLORS.navyDark,
          font: 'Calibri',
        })
      ]
    }),
    new Paragraph({
      spacing: { before: 0, after: 40 },
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: data.title,
          size: FONTS.body + 2,
          color: COLORS.navyDark,
          font: 'Calibri',
          italics: false,
        })
      ]
    }),
    // Contact line: phone | email | city
    new Paragraph({
      spacing: { before: 0, after: 20 },
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: `${data.phone}  |  ${data.email}  |  ${data.city}`,
          size: FONTS.meta,
          color: COLORS.midGray,
          font: 'Calibri',
        })
      ]
    }),
    // LinkedIn + GitHub line
    new Paragraph({
      spacing: { before: 0, after: 60 },
      alignment: AlignmentType.CENTER,
      children: [
        hyperlink(data.linkedinText, data.linkedinUrl),
        new TextRun({
          text: '  |  ',
          size: FONTS.meta,
          color: COLORS.midGray,
          font: 'Calibri',
        }),
        ...(data.githubUrl ? [hyperlink(data.githubText, data.githubUrl)] : []),
      ].filter(Boolean)
    }),
    // Thick blue rule under header
    new Paragraph({
      spacing: { before: 0, after: 120 },
      border: {
        bottom: { style: BorderStyle.SINGLE, size: 8, color: COLORS.steelBlue, space: 1 }
      },
      children: []
    }),
  );

  // ── PROFESSIONAL SUMMARY ───────────────────────────────────
  sections_content.push(
    sectionHeader('Professional Summary'),
    sectionDivider(),
    new Paragraph({
      spacing: { before: 80, after: 120 },
      children: [
        new TextRun({
          text: data.summary,
          size: FONTS.body,
          color: COLORS.nearBlack,
          font: 'Calibri',
        })
      ]
    }),
  );

  // ── SKILLS ────────────────────────────────────────────────
  sections_content.push(sectionHeader('Skills'), sectionDivider());
  for (const [category, skillList] of Object.entries(data.skills)) {
    sections_content.push(
      new Paragraph({
        spacing: { before: 60, after: 20 },
        children: [
          new TextRun({
            text: `${category}: `,
            bold: true,
            size: FONTS.body,
            color: COLORS.nearBlack,
            font: 'Calibri',
          }),
          new TextRun({
            text: skillList,
            size: FONTS.body,
            color: COLORS.nearBlack,
            font: 'Calibri',
          })
        ]
      })
    );
  }
  sections_content.push(new Paragraph({ spacing: { before: 80, after: 0 }, children: [] }));

  // ── EXPERIENCE ────────────────────────────────────────────
  sections_content.push(sectionHeader('Experience'), sectionDivider());
  for (const job of data.experience) {
    sections_content.push(roleHeader(job.title, job.company, job.dates, job.location));
    for (const b of job.bullets) {
      sections_content.push(bullet(b));
    }
    sections_content.push(new Paragraph({ spacing: { before: 60, after: 0 }, children: [] }));
  }

  // ── PROJECTS (if present) ─────────────────────────────────
  if (data.projects && data.projects.length > 0) {
    sections_content.push(sectionHeader('Projects'), sectionDivider());
    for (const project of data.projects) {
      sections_content.push(
        new Paragraph({
          spacing: { before: 100, after: 30 },
          children: [
            new TextRun({
              text: project.name,
              bold: true,
              size: FONTS.body,
              color: COLORS.nearBlack,
              font: 'Calibri',
            }),
            new TextRun({
              text: `  |  ${project.stack}`,
              size: FONTS.meta,
              color: COLORS.midGray,
              font: 'Calibri',
            }),
            ...(project.url ? [
              new TextRun({ text: '  |  ', size: FONTS.meta, color: COLORS.midGray, font: 'Calibri' }),
              hyperlink(project.urlText || project.url, project.url),
            ] : []),
          ]
        })
      );
      for (const b of project.bullets) {
        sections_content.push(bullet(b));
      }
      sections_content.push(new Paragraph({ spacing: { before: 40, after: 0 }, children: [] }));
    }
  }

  // ── EDUCATION ─────────────────────────────────────────────
  sections_content.push(sectionHeader('Education'), sectionDivider());
  for (const edu of data.education) {
    sections_content.push(
      new Paragraph({
        spacing: { before: 100, after: 20 },
        tabStops: [{ type: TabStopType.RIGHT, position: 9360 }],
        children: [
          new TextRun({
            text: edu.degree,
            bold: true,
            size: FONTS.body,
            color: COLORS.nearBlack,
            font: 'Calibri',
          }),
          new TextRun({
            text: `  |  ${edu.institution}`,
            size: FONTS.body,
            color: COLORS.midGray,
            font: 'Calibri',
          }),
          new TextRun({
            text: `\t${edu.year}`,
            size: FONTS.meta,
            color: COLORS.midGray,
            font: 'Calibri',
          }),
        ]
      }),
      ...(edu.cgpa ? [new Paragraph({
        spacing: { before: 0, after: 60 },
        children: [new TextRun({
          text: `${edu.cgpaLabel || 'CGPA'}: ${edu.cgpa}${edu.specialization ? `  |  Specialization: ${edu.specialization}` : ''}`,
          size: FONTS.meta,
          color: COLORS.midGray,
          font: 'Calibri',
        })]
      })] : []),
    );
  }

  // ── CERTIFICATIONS ────────────────────────────────────────
  if (data.certifications && data.certifications.length > 0) {
    sections_content.push(sectionHeader('Certifications'), sectionDivider());
    for (const cert of data.certifications) {
      sections_content.push(
        new Paragraph({
          spacing: { before: 60, after: 20 },
          children: [
            new TextRun({
              text: cert.name,
              bold: true,
              size: FONTS.body,
              color: COLORS.nearBlack,
              font: 'Calibri',
            }),
            new TextRun({
              text: `  |  ${cert.issuer}  |  ${cert.year}${cert.status === 'in_progress' ? '  (In Progress)' : ''}`,
              size: FONTS.meta,
              color: COLORS.midGray,
              font: 'Calibri',
            }),
          ]
        }),
        ...(cert.context ? [new Paragraph({
          spacing: { before: 0, after: 40 },
          numbering: { reference: 'bullets', level: 0 },
          children: [new TextRun({
            text: cert.context,
            size: FONTS.meta,
            color: COLORS.midGray,
            italics: true,
            font: 'Calibri',
          })]
        })] : []),
      );
    }
  }

  // ── EXTRACURRICULAR / ACTIVITIES ──────────────────────────
  if (data.extracurricular && data.extracurricular.length > 0) {
    sections_content.push(sectionHeader('Activities & Achievements'), sectionDivider());
    for (const activity of data.extracurricular) {
      sections_content.push(
        new Paragraph({
          spacing: { before: 80, after: 20 },
          children: [
            new TextRun({
              text: activity.title,
              bold: true,
              size: FONTS.body,
              color: COLORS.nearBlack,
              font: 'Calibri',
            }),
            new TextRun({
              text: `  |  ${activity.org}  |  ${activity.year}`,
              size: FONTS.meta,
              color: COLORS.midGray,
              font: 'Calibri',
            }),
          ]
        })
      );
      for (const b of activity.bullets) {
        sections_content.push(bullet(b));
      }
    }
  }

  // ─── DOCUMENT ASSEMBLY ────────────────────────────────────
  const doc = new Document({
    numbering: {
      config: [{
        reference: 'bullets',
        levels: [{
          level: 0,
          format: LevelFormat.BULLET,
          text: '\u2022',
          alignment: AlignmentType.LEFT,
          style: {
            paragraph: { indent: { left: 360, hanging: 180 } }
          }
        }]
      }]
    },
    styles: {
      default: {
        document: { run: { font: 'Calibri', size: FONTS.body, color: COLORS.nearBlack } }
      },
      characterStyles: [{
        id: 'Hyperlink',
        name: 'Hyperlink',
        run: { color: COLORS.steelBlue, underline: {} }
      }]
    },
    sections: [{
      properties: {
        page: {
          size: { width: 12240, height: 15840 }, // US Letter
          margin: { top: 864, right: 864, bottom: 864, left: 864 } // 0.6" margins
        }
      },
      children: sections_content
    }]
  });

  return doc;
}

// ─── SAMPLE DATA (Replace with real resume data) ──────────────
const sampleData = {
  name: 'Yash Sharma',
  title: 'Finance & Marketing MBA | Equity Trader | FinTech Builder',
  phone: '+91-XXXXXXXXXX',
  email: 'yash@example.com',
  city: 'Bhopal, MP',
  linkedinUrl: 'https://linkedin.com/in/yashsample',
  linkedinText: 'linkedin.com/in/yashsample',
  githubUrl: 'https://github.com/yashsample',
  githubText: 'github.com/yashsample',

  summary: 'Finance-focused MBA candidate (Finance + Marketing, MANIT NIT Bhopal) with hands-on equity trading experience since 2020 and a B.Tech engineering foundation. Built YARI, a campus fintech platform for 8,000 students, and placed Top 20 of 400+ teams at IIM Ahmedabad ARTH Finance. Bringing analytical depth, credit markets knowledge, and startup execution to [Company]\'s [Team].',

  skills: {
    'Financial Analysis': 'DCF Modeling, Equity Research, Credit Analysis, Ratio Analysis, Financial Modeling',
    'Tools & Technology': 'Python, Advanced Excel, Bloomberg Terminal (BMC), Tally ERP 9, SQL',
    'Capital Markets': 'Equity Derivatives, Options Strategies, Portfolio Management, Mutual Funds',
    'Soft Skills': 'Cross-functional Collaboration, Stakeholder Management, Data-driven Decision Making',
  },

  experience: [
    {
      title: 'Founder & CEO',
      company: 'YARI — Campus FinTech Platform',
      dates: 'Jan 2024 – Present',
      location: 'Bhopal',
      bullets: [
        'Designed and launched a coin-rewards loyalty platform for 8,000-student institution, piloting with 3 campus vendors and processing 200+ transactions in first month',
        'Built full product roadmap in Figma; coordinated cross-functional team of 4 across dev, design, and operations',
        'Secured incubation offer from MANIT Rolta Incubation Centre after presenting DCF-based unit economics and 3-year revenue projections',
      ]
    },
    {
      title: 'Equity Trader (Self-Directed)',
      company: 'Personal Portfolio',
      dates: 'Jan 2020 – Present',
      location: 'Remote',
      bullets: [
        'Managed personal equity + derivatives portfolio since 2020; applied options strategies (covered calls, cash-secured puts) generating consistent returns above benchmark',
        'Conducted fundamental analysis on 15+ companies across FMCG, Banking, and IT sectors using DCF and comparable company analysis',
        'Built Python-based screener to filter NSE 500 stocks by EV/EBITDA, P/B, and momentum signals — reduced research time by 40%',
      ]
    },
  ],

  projects: [
    {
      name: 'YARI — Campus Fintech Platform',
      stack: 'React, Node.js, Firebase, Figma',
      url: 'https://github.com/yashsample/yari',
      urlText: 'github.com/yashsample/yari',
      bullets: [
        'Full-stack campus loyalty and rewards platform; 200+ active users in pilot',
        'Integrated UPI payment flow; reduced merchant settlement time from 3 days to same-day',
      ]
    }
  ],

  education: [
    {
      degree: 'MBA (Finance + Marketing)',
      institution: 'MANIT NIT Bhopal',
      year: '2025',
      cgpa: '7.8/10',
      cgpaLabel: 'CGPA',
      specialization: 'Dual: Finance & Marketing'
    },
    {
      degree: 'B.Tech (Mechanical Engineering)',
      institution: '[University Name]',
      year: '2023',
      cgpa: null,
    }
  ],

  certifications: [
    {
      name: 'Bloomberg Market Concepts (BMC)',
      issuer: 'Bloomberg',
      year: '2024',
      status: 'completed',
      context: 'Applied in equity research and financial modeling; covers terminal skills required for investment banking workflows'
    },
    {
      name: 'NISM Series VIII: Equity Derivatives',
      issuer: 'NISM (SEBI)',
      year: '2024',
      status: 'in_progress',
      context: 'Direct alignment with derivatives desk analysis; covers F&O strategies applied in personal trading portfolio'
    }
  ],

  extracurricular: [
    {
      title: 'Top 20 Finish — ARTH Finance Competition',
      org: 'IIM Ahmedabad',
      year: '2023',
      bullets: [
        'Presented DCF-based equity valuation to panel of investment bankers; demonstrated financial modeling depth required for analyst roles',
        'Competed against 400+ teams across India\'s top B-schools; validated investment research capability'
      ]
    },
    {
      title: 'Semi-Finalist — Startup Desk Competition',
      org: 'IIT Kharagpur',
      year: '2023',
      bullets: [
        'Pitched YARI fintech business model; judges included VCs evaluating market sizing, unit economics, and scalability'
      ]
    }
  ]
};

// ─── GENERATE & SAVE ──────────────────────────────────────────
async function generate() {
  const doc = buildResume(sampleData);
  const buffer = await Packer.toBuffer(doc);
  const filename = `${sampleData.name.replace(' ', '_')}_Resume.docx`;
  fs.writeFileSync(filename, buffer);
  console.log(`✓ Resume generated: ${filename}`);
}

generate().catch(console.error);

/*
USAGE NOTES:
────────────────────────────────────────────────────────────────
1. Replace sampleData with actual candidate data
2. Run: node docx-template.js
3. For PDF conversion:
   python scripts/office/soffice.py --headless --convert-to pdf Resume.docx

COLOR REFERENCE:
  Name + Section Headers:  #1A2744 (Dark Navy)
  LinkedIn + GitHub URLs:  #2563EB (Steel Blue)
  Body Text:               #111111 (Near-Black)
  Metadata / Dates:        #555555 (Medium Gray)
  Divider Lines:           #CCCCCC (Light Gray)
  Header Rule (under name):#2563EB (Steel Blue, 8pt)

ATS COMPLIANCE:
  ✓ Single-column layout
  ✓ Standard fonts (Calibri)
  ✓ No text boxes, tables for layout, or images
  ✓ No headers/footers for contact info
  ✓ Hyperlinks as plain text with URL
  ✓ Standard section names (ALL CAPS for visibility)
  ✓ 10pt body text, 18pt name — readable at standard zoom
*/
