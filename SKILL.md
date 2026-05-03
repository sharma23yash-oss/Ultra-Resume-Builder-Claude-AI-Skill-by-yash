---
name: ultra-resume-builder
description: Use when user wants to create a tailored, ATS-optimized resume (95+ score) for specific job descriptions, needs batch processing of 3-5 jobs, wants deep company research, experience discovery interviews, multi-format output (MD/DOCX/PDF), certifications suggestions, LinkedIn/GitHub integration, or a self-improving resume library.
---

# Ultra Resume Builder — 95+ ATS Score, Multi-Format, Self-Improving

## Overview

Generates hyper-targeted, ATS-proof resumes with 95+ ATS scores through a structured pipeline: deep research, conversational experience discovery, confidence-scored content matching, and professional multi-format output. Maintains factual integrity absolutely — zero fabrication, maximum reframing.

**Core Principle:** Truth-preserving optimization. Surface and reframe real experiences. Never invent.

**Color Scheme:** Professional navy-charcoal palette only. No gradients, no bright colors. See `docx-template.js` for exact hex values.

---

## When to Use

- User provides a JD and wants a tailored resume
- User wants 95%+ ATS score
- User wants LinkedIn + GitHub integrated into resume
- User applies to 3–5 similar jobs (batch mode)
- User wants certifications recommended per role
- User wants extracurricular activities framed for the job
- User wants an interview prep report alongside the resume

**Do NOT use for:**
- Cover letters (use cover-letter-generator skill)
- LinkedIn profile rewrites (use linkedin-profile-optimizer skill)
- Generic resume help without a JD

---

## Quick Start

**Required from user:**
1. Job description (text or URL) — or up to 5 JDs for batch
2. Existing resume, LinkedIn URL, or bullet-point experience list
3. LinkedIn profile URL (mandatory — woven into resume header)
4. GitHub URL (if available — mandatory for tech/analytical roles)
5. Target role title + company name

**Workflow (single job):**
```
STEP 0: Intake & LinkedIn/GitHub Collection
STEP 1: Deep Research (company + role)
STEP 2: Experience Discovery Interview
STEP 3: ATS Keyword Extraction + Gap Map
STEP 4: Content Matching (confidence-scored)
STEP 5: Resume Assembly + Certification Injection
STEP 6: Multi-Format Generation (MD → DOCX → PDF)
STEP 7: Interview Prep Report
STEP 8: ATS Score + Library Update
```

**Workflow (batch, 3–5 jobs):** See `multi-job-workflow.md`

---

## STEP 0: Intake & Profile Collection

### Mandatory Fields to Collect

```
1. Full name, phone, city/state, professional email
2. LinkedIn URL: linkedin.com/in/[handle] ← REQUIRED
3. GitHub URL: github.com/[handle] ← Required for tech/finance/analytics
4. Target job title + company
5. JD text (paste) or URL
6. Existing resume (upload, paste, or filepath)
7. Experience level: Fresher / 0-2 yrs / 3-5 yrs / 5-10 yrs / 10+ yrs
```

### On Missing LinkedIn/GitHub

**If LinkedIn is missing:**
```
"A LinkedIn URL significantly boosts recruiter confidence and ATS parsing.
Please share your LinkedIn profile link (linkedin.com/in/yourname).
If you don't have one yet, I can help you build one after the resume."
```

**If GitHub is missing (tech/analytics role):**
```
"For [Role], a GitHub link showing real work increases selection probability by ~30%.
Please share github.com/[yourhandle] if available.
If not, I'll note it as a recommended action in your Report."
```

---

## STEP 1: Deep Research

See `research-prompts.md` for complete research templates.

### Research Dimensions

**A. Company Culture Analysis**
- Mission, values, recent strategic priorities
- Leadership communication style (CEO letters, earnings calls)
- Culture keywords: "move fast", "customer-obsessed", "data-first"
- Recent news: acquisitions, product launches, layoffs, expansions

**B. Role Requirements Analysis**
- Hard skills mentioned (tools, certifications, platforms)
- Soft skills emphasized (leadership style, collaboration patterns)
- Success profile: What does "great" look like in this role?
- Seniority signals: Language used for this level

**C. Industry Benchmarking**
- What top candidates in this role have on their resumes
- Typical metrics/KPIs for this function
- Domain terminology to weave in naturally

### Research Output Format
```
COMPANY: [Name] | ROLE: [Title]
─────────────────────────────────
Culture Keywords: [5-8 terms]
Must-Have Technical: [list]
Nice-to-Have: [list]
Success Profile: [2-3 sentences]
Watch-out Keywords: [terms that signal ATS rejection]
Salary Range: [if found, helps calibrate seniority language]
```

---

## STEP 2: Experience Discovery Interview

See `interview-discovery.md` for full branching question bank.

### Interview Protocol

**Opening:**
```
"Before I build your resume, I want to surface experiences you might not
have documented yet. I'll ask 5-8 questions — answer naturally, like
you're telling a colleague a story. I'll extract the resume-ready content.

This usually uncovers 3-6 strong bullets you'd otherwise miss."
```

### Question Branching Logic

```
ROOT QUESTIONS (always ask):
├── "Tell me about a time you [core JD action verb] something significant."
│     → Branch: "What was the outcome? Any number you can put on it?"
│     → Branch: "What tools or methods did you use?"
├── "What's the most complex problem you've solved in [JD domain]?"
│     → Branch: "How long did it take? How many people were affected?"
├── "Any side projects, freelance work, or competitions related to [domain]?"
│     → Branch: "Did you win/place? Any measurable result?"
│     → Branch: "Can I include it as a project with your GitHub/demo link?"
├── "What extracurriculars, clubs, or volunteer work have you done?"
│     → Branch: "How does that connect to [JD skills]? I'll frame it strategically."
└── "Any certifications you're currently doing or recently completed?"
      → Branch: "Even in progress is fine — we list them with '(In Progress)'"
```

### Discovery Tagging

Each discovered experience gets tagged:
```json
{
  "text": "Raw experience from user",
  "bullets": ["Reframed resume bullets"],
  "themes": ["leadership", "analytics"],
  "confidence": 0.85,
  "jobs_relevant_to": ["job_1", "job_3"],
  "metrics": ["₹2L revenue", "40% reduction"],
  "type": "work | project | competition | extracurricular | certification"
}
```

---

## STEP 3: ATS Keyword Extraction + Gap Map

### Extraction Categories

From the JD, extract and categorize:

| Category | Examples | Priority |
|----------|---------|----------|
| Hard Skills | Python, SQL, Bloomberg, Tally | Critical |
| Certifications | CFA, PMP, AWS, NISM | Critical |
| Action Verbs | "managed", "designed", "led" | High |
| Domain Terms | "credit analysis", "DCF", "EBITDA" | High |
| Soft Skills | "cross-functional", "stakeholder mgmt" | Medium |
| Seniority Markers | "senior", "principal", "lead" | Medium |

### Gap Map Format

```
ATS GAP ANALYSIS
────────────────────────────────────────────
✅ COVERED (in your profile):
   [keyword] → [which bullet covers it]

⚠️  PARTIALLY COVERED (needs reframing):
   [keyword] → [closest match] → [suggested reframe]

❌ GAPS (not covered):
   [keyword] → SEVERITY: Critical / Important / Minor
              → ACTION: Add cert | Add project | Discovery Q | Accept gap

OVERALL COVERAGE: XX% of critical keywords matched
PROJECTED ATS SCORE: XX/100
```

---

## STEP 4: Content Matching (Confidence-Scored)

### Matching Algorithm

```python
# Pseudo-code
def match_content(library_bullets, jd_keywords):
    scored = []
    for bullet in library_bullets:
        score = {
            "keyword_overlap": jaccard_similarity(bullet.keywords, jd_keywords),
            "metric_present": 1 if bullet.has_metrics else 0,
            "recency": decay_score(bullet.year),  # newer = higher
            "theme_match": cosine_similarity(bullet.themes, jd_themes)
        }
        confidence = weighted_avg(score, weights=[0.4, 0.25, 0.2, 0.15])
        scored.append({"bullet": bullet, "confidence": confidence})
    return sorted(scored, reverse=True)
```

### Confidence Tiers

| Score | Action |
|-------|--------|
| 0.85+ | Include directly |
| 0.65–0.84 | Include with reframing |
| 0.45–0.64 | Include if no better option, flag for user |
| < 0.45 | Exclude — show in gap map |

---

## STEP 5: Resume Assembly

### Resume Structure (ATS-Optimal Order)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[FULL NAME]                    [Phone] | [Email]
[Target Job Title]             [City] | LinkedIn: [URL] | GitHub: [URL]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROFESSIONAL SUMMARY
[3-4 lines. See rules below.]

SKILLS
[Comma-separated, grouped by category]

EXPERIENCE
[Reverse chronological. 3-5 bullets per role.]

PROJECTS  ← only if <5 yrs experience or highly relevant
[Name | Tech Stack | Link]
[2-3 bullets each]

EDUCATION
[Degree | Institution | Year | CGPA if >7.5/3.5 GPA]

CERTIFICATIONS
[Name | Issuer | Year | (In Progress) if applicable]

EXTRACURRICULAR / ACTIVITIES  ← strategically framed
[Activity | Organization | Year]
[1-2 bullets showing JD relevance]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Professional Summary Rules

**Template:**
```
[Seniority Descriptor] [Domain Expert/Professional] with [X years/recent] experience in
[Core Skill 1], [Core Skill 2], and [Core Skill 3]. [1 measurable achievement or
notable project]. [What you bring to THIS company/role specifically].
```

**Rules:**
- NEVER start with "I am" or "I have"
- Include LinkedIn signal: "Active on LinkedIn with [X] connections in [domain]" — optional
- Mention GitHub if tech role: "Active GitHub contributor (github.com/handle)"
- Mirror company language from your research
- Tailor to EVERY application — no generic summary

**Example (Finance MBA):**
```
Finance-focused MBA candidate (Finance + Marketing) with hands-on equity trading
experience since 2020 and a B.Tech engineering foundation. Built YARI, a campus
fintech platform for 8,000 students, and placed Top 20 at IIM Ahmedabad's ARTH
Finance competition. Bringing analytical depth and startup execution to [Company]'s
[specific team].
```

### Skills Section Rules

Group skills by category, comma-separated:
```
Financial Analysis: DCF Modeling, Equity Research, Credit Analysis, Financial Modeling
Tools & Technology: Python, Excel (Advanced), Bloomberg Terminal, Tally ERP
Domain: Banking, NBFCs, Capital Markets, Derivatives, Risk Management
Soft Skills: Cross-functional Collaboration, Stakeholder Management, Data-driven Decisions
```

### Bullet Writing Rules

**Formula:** `[Action Verb] + [What] + [How/Tool] + [Result with Metric]`

**Human-Writing Rules (Anti-AI Detection):**
- Vary sentence length — mix punchy (5 words) with detailed (20 words)
- Vary starting verb — never same verb twice in a role
- Use specific numbers: "34%" beats "significantly improved"
- Include tool versions, project names, real company names
- Mix past and present tense (past for completed, present for ongoing)
- One "imperfect" informal phrasing per page — humans don't write uniformly
- AVOID: "Leveraged", "Spearheaded", "Utilized", "Facilitated", "Synergized"
- AVOID: Perfect parallel structure in every bullet (AI tell)
- AVOID: "Responsible for", "Worked on", "Helped with"

### Extracurricular Framing Rules

Every extracurricular bullet must include a JD connection:

```
❌ BAD: "Member, Finance Club"

✅ GOOD: "Finance Club Lead — organized 3 equity pitch competitions with
         50+ participants; mirrors cross-functional coordination required
         in [target role]"

❌ BAD: "Participated in IIM Ahmedabad ARTH Finance"

✅ GOOD: "Top 20 finish (of 400+ teams) at IIM Ahmedabad ARTH Finance
         Competition — presented DCF-based valuation of [sector] company
         to panel of investment bankers"
```

---

## STEP 6: Certification Injection

See `certification-library.md` for complete database.

### Injection Logic

**Already-held certifications:** Include in CERTIFICATIONS section with year.

**Recommended certifications:** Add to end of resume as:
```
RECOMMENDED CERTIFICATIONS (In Progress / Planned)
• [Cert Name] — [Issuer] — [Why relevant to this role]
• [Cert Name] — [Issuer] — [Free/Low-cost: link]
```

### Role-Based Certification Recommendations

**Banking / Finance:**
- NISM Series VIII (Equity Derivatives) — ₹1,500, high ATS hit
- NSE Academy Certified Capital Market Professional — free
- CFI: Introduction to Corporate Finance — free
- Coursera: Financial Markets (Yale/Shiller) — free audit
- CAIIB / JAIIB modules — for banking roles specifically

**FinTech / Analytics:**
- Google Data Analytics (Coursera) — free audit
- IBM Data Science Professional — free audit
- Kaggle: Python + Pandas + SQL — 100% free
- Tableau Public certification — free

**Tech / Product:**
- AWS Cloud Practitioner — free on AWS Skill Builder
- Google IT Support — free audit
- Product School: Free PM Certifications — free

**General (boosts any profile):**
- Google Project Management Certificate — free audit
- HubSpot Inbound — 100% free
- LinkedIn Learning 30-day trial certificates

### Extracurricular Certification Showcase Format

```
CERTIFICATIONS & ACTIVITIES
• NISM Series VIII: Equity Derivatives (2024) — Applied in equity options
  portfolio trading; directly relevant to derivatives desk analysis at [Company]
• IIM Ahmedabad ARTH Finance (Top 20/400 teams, 2023) — Equity valuation
  presentation; demonstrates investment banking readiness
• NSE Academy Capital Market Professional (2023) — Covers capital markets
  structure targeted in [Company]'s research role JD
```

---

## STEP 7: Multi-Format Output

See `docx-template.js` for professional DOCX generation code.

### Output Files Generated

```
outputs/
  [Name]_[Company]_[Role]_Resume.md       ← Source of truth
  [Name]_[Company]_[Role]_Resume.docx     ← For email applications
  [Name]_[Company]_[Role]_Resume.pdf      ← For portal uploads
  [Name]_[Company]_[Role]_InterviewPrep.md ← Bonus report
```

### DOCX Color Scheme (Professional Only)

```
Name Header:    #1A2744  (Dark Navy)     — Bold, 18pt
Section Headers:#1A2744  (Dark Navy)     — Bold, 11pt, UPPERCASE
Divider Lines:  #2563EB  (Steel Blue)    — 1pt horizontal rule
Body Text:      #111111  (Near-Black)    — Regular, 10pt
Metadata Text:  #555555  (Medium Gray)  — Italic, 9pt (LinkedIn, GitHub URLs)
Background:     #FFFFFF  (White)         — Always
Accent:         NONE — no colored boxes, no sidebars, no shading
```

**ATS Format Rules:**
- Single column ONLY (no tables for layout)
- Font: Calibri or Arial — 10pt body, 18pt name, 11pt section headers
- Margins: 0.75" all sides (maximizes content space)
- No headers/footers for contact info
- No text boxes, no images, no icons
- LinkedIn + GitHub as plain hyperlinks in contact line
- Section dividers: thin line under heading (not full table row)

---

## STEP 8: Interview Prep Report

Auto-generated alongside each resume.

### Report Sections

```markdown
# Interview Prep Report
## Role: [Title] at [Company]

### Likely Interview Questions (based on JD + company)
1. [Question from JD keyword] → Suggested answer frame
2. [Culture-fit question] → What they're really asking
3. [Technical question] → Key points to hit

### Your Strongest Stories (STAR format ready)
- Story 1: [Bullet you included] → Full STAR narrative
- Story 2: ...

### Gap Acknowledgment Scripts
- Gap: [X not in your profile] → "While I haven't had direct experience
  with X, I've [closest analog], which gives me the foundation to..."

### Questions to Ask the Interviewer
1. [Smart question showing research: mentions specific company detail]
2. [Role clarity question]
3. [Growth/culture question]

### Red Flags to Avoid
- Don't say: [X] — it signals [Y]
- Do say: [Alternative phrasing]
```

---

## STEP 9: ATS Scoring

### Score Dimensions

| Dimension | Weight | What's Checked |
|-----------|--------|---------------|
| Keyword Match | 30% | % of critical JD keywords present |
| Section Structure | 20% | Standard headings, correct order |
| Format Compliance | 20% | Single-column, no tables/boxes, clean font |
| Quantification | 15% | % of bullets with metrics |
| Human Voice | 15% | AI-tell patterns absent, varied structure |

### Score Interpretation

| Score | Status | Action |
|-------|--------|--------|
| 95–100 | Elite | Submit confidently |
| 85–94 | Strong | Minor keyword additions |
| 70–84 | Good | Reframe 2-3 key bullets |
| < 70 | Needs Work | Full revision cycle |

**Target: 95+ before any submission.**

---

## STEP 10: Library Update (Self-Improving)

After user approves the resume:

```
"Would you like me to add this resume to your library?

WHAT GETS SAVED:
✓ All new bullets discovered in this session
✓ Reframed versions of existing bullets
✓ Certifications added
✓ Interview questions + STAR stories
✓ Company research notes

This means future resumes for similar roles will be 50% faster."
```

**Library file structure:**
```
resume-library/
  master-experience.md     ← All bullets, tagged by theme
  certifications.md        ← All certs with status
  companies-researched.md  ← Past research notes
  interview-stories.md     ← STAR stories
  resumes/
    [Name]_[Company]_[Role]_[Date].md
```

---

## Multi-Job Batch Mode

**Triggers when:**
- User provides 2+ JD URLs or JD texts
- User mentions "multiple jobs", "batch", "3 companies"
- User lists roles: "Google PM, Meta PM, Microsoft PM"

**Prompt user:**
```
"I see multiple job applications! Use batch mode?

BENEFITS:
• Experience discovery runs ONCE for all jobs (saves 20-30 min)
• Shared research → company-specific customization
• Track all applications in one place

3 jobs batch: ~40 min vs ~55 min sequential
5 jobs batch: ~55 min vs ~90 min sequential

Use batch mode? [Y/N]"
```

See `multi-job-workflow.md` for complete batch pipeline.

---

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| No LinkedIn/GitHub in header | Always include — it's 2025, recruiters check |
| Generic summary | Rewrite for every single application |
| Certifications listed without context | Add 1 line showing JD relevance |
| Extracurriculars listed as activities | Reframe with JD-relevant outcome |
| Multiple colors/icons | Strip to navy+black+white only |
| Tables for layout | Single column only — ATS fails on columns |
| Photo included | Remove — ATS ignores, humans bias |
| Soft skills as bullets | Move to Skills section, comma-separated |
| "References available" line | Delete it |
| GPA below 7.0 / 3.0 included | Omit unless above threshold |

---

## Supporting Files

- `research-prompts.md` — Deep research structured templates
- `interview-discovery.md` — Branching question bank (100+ questions)
- `certification-library.md` — 80+ certifications by domain
- `multi-job-workflow.md` — Full batch processing pipeline
- `docx-template.js` — Professional DOCX generation (copy-paste ready)
- `ats-scoring.md` — Detailed ATS scoring rubric

---

## Quick Reference

```
INPUT:    JD + Profile + LinkedIn URL + GitHub URL
MODES:    Single Job | Batch (3-5 jobs)
OUTPUT:   .md + .docx + .pdf + InterviewPrep.md
TARGET:   95+ ATS score, human-sounding, zero fabrication
PALETTE:  Navy #1A2744 | Blue #2563EB | Black #111111 | White only
LENGTH:   1 page (<5 yrs) | 2 pages (5-10 yrs) | strict enforcement
```
