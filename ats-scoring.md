# ATS Scoring Rubric — Target 95+/100

## Overview

Comprehensive scoring system. Run after every resume generation.
Score below 95 → identify failing dimension → fix → re-score.

---

## Scoring Dimensions

### Dimension 1: Keyword Match (30 points)

**What ATS Systems Check:**
- Exact keyword matches from JD
- Partial/stem matches (analyze → analysis → analyzed)
- Section-appropriate placement (technical skills in Skills section)
- Keyword density (not stuffed — natural integration)

**Scoring:**
| % JD Keywords Covered | Points |
|----------------------|--------|
| 95–100% | 28–30 |
| 85–94% | 24–27 |
| 70–84% | 18–23 |
| 50–69% | 10–17 |
| < 50% | 0–9 |

**How to Score:**
```
1. List ALL critical keywords from JD (hard skills + tools + certifications)
2. Check each against the resume text
3. Score = (matched / total) × 30
4. Deduct 2 pts for each keyword buried in wrong section
```

**Quick Fixes for Low Score:**
- Add missing keywords to Skills section first
- Reframe bullets to include keyword naturally
- Add keyword to summary if relevant
- Never keyword-stuff — max 2x per keyword

---

### Dimension 2: Section Structure (20 points)

**What ATS Systems Parse:**
- Standard section headings (EXPERIENCE not "My Journey")
- Correct section order
- Consistent date formatting
- Clear hierarchy (role > company > dates)

**Heading Checklist:**

| Required Heading | Points If Present | ATS-Safe Variants |
|-----------------|------------------|-------------------|
| Contact/Header | 3 | (no heading needed — top of page) |
| Professional Summary / Summary | 3 | Summary, Profile, Objective (weak) |
| Skills / Core Competencies | 3 | Technical Skills, Key Skills |
| Experience / Work Experience | 4 | Professional Experience |
| Education | 3 | Academic Background |
| Certifications | 2 | Licenses & Certifications |
| Projects (if applicable) | 2 | Key Projects, Selected Projects |

**Subtract Points For:**
- Creative headings (-3 per heading)
- Missing Experience section (-8)
- Missing Skills section (-5)
- Inconsistent date format (-2)

**Date Format Rules:**
```
✓ CORRECT: Jan 2024 – Present
✓ CORRECT: 2022 – 2024
✗ WRONG: January 2024 to Present (too long)
✗ WRONG: 01/2024 – Present (slashes may confuse parsers)
✗ WRONG: 2024 – current (lowercase)
```

---

### Dimension 3: Format Compliance (20 points)

**ATS Killers (each = -5 points):**
```
□ Multi-column layout (tables used for layout)
□ Text boxes containing any content
□ Images, icons, logos
□ Headers/footers with contact info
□ Non-standard fonts (script, handwriting, decorative)
□ Colored text other than black/dark gray (except hyperlinks)
□ Columns in Skills section (some parsers fail)
□ Tables for any structural purpose
□ Unicode icons (●, ★, ✓ in section headings) — some parsers ok
□ Embedded charts, graphs, or infographics
```

**Format Checklist:**
| Element | Required Value | Check |
|---------|---------------|-------|
| Layout | Single column | □ |
| Font | Calibri, Arial, Times New Roman, Garamond | □ |
| Font size (body) | 10–11pt | □ |
| Font size (name) | 16–20pt | □ |
| Margins | 0.6"–1" all sides | □ |
| File format | .docx (preferred) or plain .pdf | □ |
| Contact in | Body (not header/footer) | □ |
| Colors | Max 2: dark + accent | □ |

**Scoring:**
| Violations | Points |
|-----------|--------|
| 0 | 20 |
| 1 | 16 |
| 2 | 12 |
| 3 | 8 |
| 4+ | 0–6 |

---

### Dimension 4: Quantification (15 points)

**What Recruiters (And ATS Ranking) Check:**
- % of bullets containing at least one number
- Quality of metrics (% > "improved" > "enhanced")
- Specificity (₹2L > "significant revenue")
- Context (50% of what? Compared to what?)

**Scoring:**
| % Bullets with Metrics | Points |
|----------------------|--------|
| 80–100% | 13–15 |
| 60–79% | 9–12 |
| 40–59% | 5–8 |
| < 40% | 0–4 |

**Metric Types (High to Low Value):**
1. Financial: ₹2L revenue, $50K saved, 35% ROI
2. Scale: 8,000 users, 50-person team, 200 transactions
3. Time: Reduced from 3 days to same-day, 40% faster
4. Rank: Top 20 of 400 teams, #3 in cohort
5. Volume: Analyzed 15+ companies, managed 3 projects
6. Soft metric: "Significant improvement" (weakest — avoid)

**Quick Fix Protocol:**
```
For each un-quantified bullet:
1. Ask: "What number was involved?"
2. Ask: "How long did it take?"
3. Ask: "How many people were affected?"
4. Ask: "What was the before and after?"
5. If truly no number: add scale or context ("across 5-member team")
```

---

### Dimension 5: Human Voice (15 points)

**AI-Tell Detection — Each = -2 points:**
```
□ Same action verb starts more than 1 bullet in same role
□ Perfect parallel structure in all bullets (same length, same pattern)
□ AI vocabulary: "Leveraged", "Spearheaded", "Utilized", "Facilitated",
   "Synergized", "Streamlined", "Robust", "Dynamic", "Passionate"
□ Filler phrases: "Responsible for", "Worked on", "Helped with", "Assisted in"
□ Buzzword soup: "results-oriented", "cross-functional synergies", "strategic alignment"
□ Generic summary not tailored to this specific company/role
□ Identical bullet length throughout (AI writes uniformly)
□ No specific names (companies, tools with versions, real project names)
□ No metrics (AI-generated text often lacks specific numbers)
□ Summary uses "I am" or "I have" as opener
```

**Positive Human Voice Signals (+1 each, max 5):**
- Role-specific jargon used correctly
- Company/team-specific reference in summary
- One informal or imperfect phrasing ("about 40%", "roughly 3x")
- Tool version specificity (Python 3.11, Excel 2021)
- Personal project name with context

**Scoring:**
| AI-Tell Count | Points |
|--------------|--------|
| 0–1 | 13–15 |
| 2–3 | 9–12 |
| 4–5 | 5–8 |
| 6+ | 0–4 |

---

## Score Calculation

```
ULTRA RESUME ATS SCORE
═══════════════════════════════════════════
Dimension                | Weight | Raw  | Weighted
─────────────────────────|--------|------|─────────
1. Keyword Match         | 30%    | __/30 | ___
2. Section Structure     | 20%    | __/20 | ___
3. Format Compliance     | 20%    | __/20 | ___
4. Quantification        | 15%    | __/15 | ___
5. Human Voice           | 15%    | __/15 | ___
─────────────────────────────────────────────────
TOTAL                    | 100%   |      | ___/100

STATUS: [Elite 95+ | Strong 85-94 | Good 70-84 | Needs Work <70]
```

---

## Fix Priority Matrix

When score < 95, fix in this order:

| Score Gap | First Fix | Second Fix |
|-----------|-----------|-----------|
| Keywords < 25/30 | Add missing keywords to Skills | Reframe 2 bullets |
| Structure < 18/20 | Rename creative sections | Fix date format |
| Format < 18/20 | Remove multi-column / tables | Strip fancy elements |
| Quant < 12/15 | Add numbers to top 3 bullets | Add scale context |
| Voice < 12/15 | Replace AI verbs | Vary bullet lengths |

---

## Score Gate

```
SUBMIT ONLY WHEN:
Total Score ≥ 95 AND
No single dimension below 75% of its max
(Keyword ≥ 22, Structure ≥ 15, Format ≥ 15, Quant ≥ 11, Voice ≥ 11)

If any dimension fails threshold, fix that dimension first.
Overall 95 with one dimension at 60% is WORSE than 88 balanced.
```
