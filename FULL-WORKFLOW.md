# FULL-WORKFLOW.md
# Ultra Resume Builder — Complete End-to-End Workflow

> **One document. Every step. No guessing.**
> Follow this top to bottom for a 95+ ATS resume, DOCX + PDF output,
> and an interview prep report — in a single session.

---

## QUICK OVERVIEW

```
INPUT                        PIPELINE                        OUTPUT
─────────────────────────────────────────────────────────────────────
Your Resume/Profile     →    STEP 0: Intake                 →  Resume MD
Job Description         →    STEP 1: Research               →  Resume DOCX
LinkedIn URL            →    STEP 2: Discovery Interview    →  Resume PDF
GitHub URL (optional)   →    STEP 3: Keyword Extraction     →  Interview Prep
                             STEP 4: Gap Map                →  ATS Score
                             STEP 5: Content Matching       →  Library Update
                             STEP 6: Resume Assembly        →
                             STEP 7: Certification Inject   →
                             STEP 8: DOCX + PDF Generation  →
                             STEP 9: ATS Score              →
                             STEP 10: Library Update        →
─────────────────────────────────────────────────────────────────────
SINGLE JOB:  ~20-30 min total
BATCH (3-5): ~40-55 min total (shared discovery = faster)
```

---

## MODE SELECTOR

```
┌─────────────────────────────────────────────────────────────┐
│  How many jobs are you applying to right now?               │
│                                                             │
│  [ 1 job ]  → Follow SINGLE-JOB WORKFLOW below             │
│  [ 2-5 jobs ] → Jump to BATCH MODE WORKFLOW (end of doc)   │
└─────────────────────────────────────────────────────────────┘
```

---

# SINGLE-JOB WORKFLOW

---

## ━━━ STEP 0 — INTAKE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**What happens:** Collect everything needed before any work begins.
**Time:** 2 min

### Checklist — Collect From User

```
MANDATORY
□ Full name
□ Phone number
□ Email address
□ City / State
□ LinkedIn URL  ←  linkedin.com/in/yourhandle
□ GitHub URL    ←  github.com/yourhandle  (skip only if zero coding/analytics)
□ Target job title
□ Target company name
□ Job Description — full text OR URL
□ Existing resume  — paste / upload / file path
□ Experience level:
    □ Fresher (0 exp)
    □ 0–2 years
    □ 2–5 years
    □ 5–10 years
    □ 10+ years

OPTIONAL (but improves output)
□ Portfolio / personal website
□ Preferred resume length: 1 page / 2 pages / auto-decide
□ Tone preference: formal / conversational / in-between
```

### LinkedIn / GitHub Missing?

```
IF LinkedIn missing:
→ "A LinkedIn URL boosts recruiter confidence and ATS parsing.
   Please share linkedin.com/in/yourhandle.
   No profile yet? I'll flag it as a quick action after the resume."

IF GitHub missing (analytics / finance / tech role):
→ "A GitHub with even 1–2 Excel models or scripts increases
   selection probability ~30% for this type of role.
   Share github.com/yourhandle if available — otherwise I'll
   note creating one as a recommended next action in your report."
```

### Output of Step 0
```
✓ Candidate profile object populated
✓ JD text secured
✓ LinkedIn + GitHub URLs confirmed or flagged
✓ Resume library located (or empty library initialized)
→ PROCEED TO STEP 1
```

---

## ━━━ STEP 1 — DEEP RESEARCH ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**What happens:** Analyze the company, role, and industry before touching the resume.
**Time:** 3–5 min
**Reference:** `research-prompts.md`

### 1A — Company Culture Analysis

```
SEARCH: "[Company name] mission values culture 2024 2025"
SEARCH: "[Company name] CEO message OR annual report"
SEARCH: "[Company name] recent news product launch hiring"

EXTRACT:
  Culture Keywords (use in summary + bullets):
  ┌──────────────────────────────────────────┐
  │ e.g. "mission-driven", "data-first",     │
  │ "net-zero", "research-led", "agile"      │
  └──────────────────────────────────────────┘

  Recent Strategic Priorities:
  ┌──────────────────────────────────────────┐
  │ Funding rounds, product launches,        │
  │ team expansions, key hires, press        │
  └──────────────────────────────────────────┘
```

### 1B — Role Requirements Analysis

```
FROM THE JD, EXTRACT:

  Hard Skills (Critical — must appear in resume):
  ────────────────────────────────────────────────
  Tools explicitly named:      _______________
  Certifications required:     _______________
  Platforms / software:        _______________

  Domain Terms (High — weave naturally):
  ────────────────────────────────────────
  Industry vocabulary:         _______________
  KPIs / metrics mentioned:    _______________

  Soft Skills (Medium):
  ──────────────────────
  Leadership language:         _______________
  Collaboration style:         _______________

  Seniority Language:
  ────────────────────
  JD uses "lead / manage / drive" → Senior framing
  JD uses "support / assist / execute" → Junior framing
  Detected level: _______________
```

### 1C — Success Profile

```
ANSWER: What does a "great" candidate for this role look like?
→ _______________________________________________
→ _______________________________________________

SALARY RANGE (if findable — calibrates your language):
→ _______________
```

### Research Confidence Check

```
□ High  → Full personalization: summary + bullets + cert recs
□ Medium → Partial: JD analysis + whatever research found
□ Low   → JD-only mode: note limited research in report
```

### Output of Step 1
```
✓ Culture keywords list (5–8 terms)
✓ Hard skill keyword list (critical)
✓ Domain terminology compiled
✓ Seniority calibrated
✓ Success profile articulated
→ PROCEED TO STEP 2
```

---

## ━━━ STEP 2 — EXPERIENCE DISCOVERY INTERVIEW ━━━━━━━━━━━━━━

**What happens:** Conversational interview to surface undocumented experiences.
**Time:** 5–10 min
**Reference:** `interview-discovery.md`
**Goal:** Discover 3–6 strong bullets the user hasn't written down yet.

### Opening Script

```
"Before I write your resume, I want to ask you 7–8 quick questions.
Don't worry about format — answer like you're telling a colleague
a story. I'll extract the resume-ready content.

This usually uncovers experiences that are directly relevant to
[Company/Role] that you haven't documented yet.

Ready?"
```

### Core Questions (Always Ask — All Roles)

```
Q1 — IMPACT
"Tell me about something you did — at work, college, or a side
project — that had a measurable result. Any number works: money
saved, users gained, time cut, percentage improved."

  BRANCH A (number mentioned):
  → "What exactly was the before and after?"
  → "Over how long? How many people affected?"

  BRANCH B (no number):
  → "Can you ballpark it? Even '30% faster' or 'about 50 people'?"
  → "Did anyone above you recognize or respond to the outcome?"


Q2 — PROBLEM SOLVING
"What's the most complex problem you've had to solve —
professionally or academically — where you figured out the
approach yourself?"

  → "What tools or methods did you use?"
  → "What was your recommendation and what happened after?"


Q3 — LEADERSHIP / COLLABORATION
"Have you ever led a group — formal or informal? Organizing a
club event, managing a project team, guiding juniors — all count."

  → "How many people? What was the goal and did you hit it?"


Q4 — COMPETITIONS / ACHIEVEMENTS
"Any competitions, hackathons, case studies, ranked exams, or
fests? Shortlisted, participated, or won — all count."

  → "Total pool size? (e.g. 'top 20 of 400 teams')"
  → "What did you build or present?"


Q5 — EXTRACURRICULARS
"Any clubs, volunteering, sports, or community work — especially
with a leadership or organizing angle?"

  → "Any events you ran? Approximate attendance?"
  → "How does this connect to [target role]?"  ← You frame it


Q6 — CERTIFICATIONS
"Any online courses, certifications, or workshops — completed or
in progress? Even 50% done is fine, we list as '(In Progress)'."

  → "Platform? (Coursera, NISM, NSE, Forage, etc.)"
  → "Did you apply anything from it to a real project?"


Q7 — SIDE PROJECTS / STARTUP / FREELANCE
"Any side projects, freelance gigs, startups — even early-stage
or failed ones?"

  → "Any revenue, users, or other metrics?"
  → "GitHub repo or live URL I can include?"


Q8 — LINKEDIN + GITHUB DEEP DIVE
"Can I look at your LinkedIn for anything not in your resume yet?
And your GitHub — which repos are you most proud of?"

  → "Any repos with stars, forks, or live deployments?"
  → "Open source contributions to others' projects?"
```

### Role-Specific Add-On Questions

```
FINANCE / BANKING:
  → "Have you built or used financial models? Walk me through one."
  → "Do you track markets or have a personal portfolio?"
  → "Any exposure to financial statements — even for a case study?"
  → "Tools: Bloomberg, Tally, Screener, CMIE, Excel, Python?"

MARKETING / BRAND:
  → "Any campaigns you ran? Goal + result?"
  → "Content that got real traction — posts, blogs, videos?"
  → "Google Analytics, HubSpot, Meta Ads, Canva experience?"

TECH / DATA:
  → "Walk me through your strongest project — stack, problem, users."
  → "Any API, database, or cloud services experience?"
  → "Any deployed / live projects? URLs?"
```

### Discovery Tagging Format

```json
{
  "discovery_id":  "d_001",
  "raw_answer":    "User's exact words",
  "resume_bullets": [
    "Polished bullet ready for resume"
  ],
  "type":    "work | project | competition | cert | extracurricular",
  "themes":  ["finance", "leadership", "analytical"],
  "metrics": ["40% reduction", "₹2L revenue", "Top 20 of 400"],
  "links":   { "github": "...", "demo": "..." },
  "confidence": 0.88
}
```

### End of Discovery Script

```
"Great — I found [N] experiences you hadn't documented yet.
Here's what I uncovered:

  ★ [Discovery 1 — strongest JD match]
  ★ [Discovery 2]
  · [Discovery 3 — good but secondary]

I'll weave these into your resume now.
The ★ ones will likely push your ATS score above 90."
```

### Output of Step 2
```
✓ 3–6 new tagged experiences
✓ All discoveries linked to JD themes
✓ GitHub / LinkedIn links confirmed
→ PROCEED TO STEP 3
```

---

## ━━━ STEP 3 — ATS KEYWORD EXTRACTION ━━━━━━━━━━━━━━━━━━━━━━

**What happens:** Build the full keyword hit list from the JD.
**Time:** 2 min
**Reference:** `ats-scoring.md`

### Extraction Table

```
CATEGORY          │ KEYWORDS FROM JD              │ PRIORITY
──────────────────┼───────────────────────────────┼──────────
Hard Skills       │                               │ CRITICAL
Certifications    │                               │ CRITICAL
Action Verbs      │                               │ HIGH
Domain Terms      │                               │ HIGH
Tools / Software  │                               │ HIGH
Soft Skills       │                               │ MEDIUM
Seniority Markers │                               │ MEDIUM
```

### ATS Rules Applied

```
□ Use standard section headings (EXPERIENCE not "My Journey")
□ Single column layout — no tables, no sidebars
□ Spell acronyms once: "DCF (Discounted Cash Flow)"
□ Match exact job title in resume headline
□ Font: Calibri / Arial — 10pt body, 18pt name
□ No headers/footers for contact info
□ LinkedIn + GitHub as plain hyperlinks in contact line
```

### Output of Step 3
```
✓ Keyword hit list built (critical / high / medium tiers)
✓ ATS format rules confirmed
→ PROCEED TO STEP 4
```

---

## ━━━ STEP 4 — GAP MAP ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**What happens:** Cross-reference keywords against current profile + discoveries.

```
ATS GAP ANALYSIS
════════════════════════════════════════════════════

✅ COVERED — keyword present in profile as-is:
   [keyword]  →  [which bullet / section covers it]

⚠️  PARTIALLY COVERED — needs reframing to land:
   [keyword]  →  [closest match]
              →  REFRAME: "[suggested new phrasing]"

❌ GAP — not in profile at all:
   [keyword]  →  SEVERITY: Critical / Important / Minor
              →  ACTION:
                   Add cert (in-progress ok)
                   Add project bullet
                   Discovery question surfaced it → use
                   Accept gap → address in cover letter

────────────────────────────────────────────────────
OVERALL COVERAGE:     ___% of critical keywords matched
PROJECTED ATS SCORE:  ___/100
TARGET:               95+
────────────────────────────────────────────────────
```

### Output of Step 4
```
✓ Gap map complete
✓ Actions assigned per gap
✓ Projected ATS score established
→ PROCEED TO STEP 5
```

---

## ━━━ STEP 5 — CONTENT MATCHING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**What happens:** Score every bullet against the JD. Select the best ones.

### Confidence Tiers

```
SCORE     ACTION
────────────────────────────────────────────────────────
0.85+  →  Include directly — high relevance, no changes
0.65–0.84 → Include with reframing — adjust verb/context
0.45–0.64 → Use only if nothing better — flag for user
< 0.45 →  Exclude — appears in gap map only
```

### Selection Rules

```
□ Max 5 bullets per role (3 for short tenures <6 months)
□ Every bullet must have at least 1 metric or scale reference
□ No two bullets in same role start with same verb
□ Newest roles get most bullets
□ Oldest roles (5+ yrs back): max 2 bullets each
□ If library < 3 resumes: note limited source material
```

### Output of Step 5
```
✓ Bullet shortlist per role (confidence-scored)
✓ Reframe notes attached to 0.65–0.84 tier bullets
✓ Gaps confirmed for certification injection
→ PROCEED TO STEP 6
```

---

## ━━━ STEP 6 — RESUME ASSEMBLY ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**What happens:** Write the complete resume following structure + human-voice rules.

### Exact Section Order (ATS-Optimal)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[FULL NAME]
[Target Job Title]
[Phone]  ·  [Email]  ·  [City]
[LinkedIn URL]  ·  [GitHub URL]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROFESSIONAL SUMMARY        ← 3–4 lines, company-specific

SKILLS                      ← Grouped by category, comma-separated

EXPERIENCE                  ← Reverse chronological, 3–5 bullets/role

PROJECTS                    ← Only if <5 yrs exp OR highly relevant

EDUCATION                   ← Degree | Institution | Year | CGPA (if ≥7.5)

CERTIFICATIONS              ← Held + In-Progress + Recommended

ACTIVITIES & ACHIEVEMENTS   ← Extracurriculars with JD-relevant framing
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Professional Summary Template

```
[Seniority descriptor] [Domain] professional with [X years / recent]
experience in [Core Skill 1], [Core Skill 2], and [Core Skill 3].
[1 measurable achievement or notable project].
[What you bring specifically to THIS company's mission/team].
```

**Rules:**
```
□ Never start with "I am" or "I have"
□ Mirror exact language from company research (Step 1)
□ Mention GitHub if analytical/tech role
□ Tailor EVERY application — no copy-paste summaries
□ Max 4 lines — recruiters spend 6 seconds on top third
```

### Bullet Writing Formula

```
[Action Verb]  +  [What you did]  +  [How / Tool used]  +  [Result with metric]

EXAMPLE:
"Rebuilt vendor onboarding pipeline in Python, cutting manual
effort from 3 hours to 20 minutes per week"
```

### Human-Voice Rules (Anti-AI Detection)

```
DO ✓
  □ Vary sentence length — mix short punchy + detailed lines
  □ Use specific numbers: "34%" beats "significantly improved"
  □ Use real names: company, tool versions, project names
  □ Mix past and present tense across bullets
  □ One slightly informal phrase per page — humans aren't perfect
  □ Industry-specific jargon used naturally

AVOID ✗
  □ Same verb starting multiple bullets in same role
  □ "Leveraged", "Spearheaded", "Utilized", "Facilitated"
  □ "Responsible for", "Worked on", "Helped with"
  □ Perfect parallel structure throughout (AI tell)
  □ Identical bullet lengths on every line
  □ Buzzwords: "synergy", "dynamic", "results-oriented"
```

### Extracurricular Framing Rule

```
Every extracurricular bullet MUST connect back to the JD:

✗ BAD:   "Member, Finance Club"

✓ GOOD:  "Finance Club Lead — organized 3 equity pitch competitions
          with 50+ participants; mirrors cross-functional coordination
          required in [target role] at [Company]"

✗ BAD:   "Participated in ARTH Finance, IIM Ahmedabad"

✓ GOOD:  "Top 20 finish (of 400+ teams) at IIM Ahmedabad ARTH Finance
          — presented DCF-based sector valuation to investment banker
          panel; validates financial modelling depth required for role"
```

### Output of Step 6
```
✓ Complete resume draft in Markdown (source of truth)
✓ All sections populated
✓ Human-voice rules applied throughout
→ PROCEED TO STEP 7
```

---

## ━━━ STEP 7 — CERTIFICATION INJECTION ━━━━━━━━━━━━━━━━━━━━━

**What happens:** Add held certifications + recommend role-specific ones.
**Reference:** `certification-library.md`

### Injection Logic

```
ALREADY HELD → Add to CERTIFICATIONS section:
  Format: [Full Name]  ·  [Issuer]  ·  [Year]  ·  [License # if any]
  + 1 line: "Applied to [specific task] at [role / project]"

IN PROGRESS → Same section, append "(In Progress)":
  Format: [Name]  ·  [Issuer]  ·  (In Progress — Expected [Month Year])

RECOMMENDED (gaps from Step 4) → Add block at end:
  Format:
    RECOMMENDED CERTIFICATIONS (Planned)
    • [Name] — [Issuer] — Free/₹X — [1 line JD relevance]
```

### Role → Certification Mapping

```
FINANCE / BANKING / INVESTMENT:
  → NISM Series VIII: Equity Derivatives (₹1,500 — very high ATS)
  → Bloomberg Market Concepts — BMC (Free — high ATS)
  → JAIIB / CAIIB (for PSU banking roles)
  → CFI: Financial Modeling Fundamentals (Free)
  → Yale Financial Markets / Coursera (Free audit)

FINTECH / ANALYTICS:
  → Google Data Analytics — Coursera (Free audit)
  → Kaggle: Python + Pandas + SQL (Free)
  → Tableau Public Certification (Free)
  → IBM Data Science Professional (Free audit)

MARKETING / BRAND:
  → Google Digital Marketing — Coursera (Free audit)
  → HubSpot Inbound Marketing (Free)
  → Google Analytics Certification (Free)
  → Meta Blueprint (Free)

TECH / PRODUCT:
  → AWS Cloud Practitioner — Skill Builder (Free)
  → Google IT Support (Free audit)
  → CS50x Harvard (Free audit)

GENERAL (any profile):
  → Google Project Management (Free audit)
  → LinkedIn Learning 30-day trial
```

### ATS Acronym Rule

```
Always spell out on first mention:
  "CFA (Chartered Financial Analyst)"
  "NISM (National Institute of Securities Markets)"
  "DCF (Discounted Cash Flow)"
```

### Output of Step 7
```
✓ Certifications section populated (held + in-progress)
✓ Recommended certs block added with JD relevance notes
✓ All acronyms expanded on first use
→ PROCEED TO STEP 8
```

---

## ━━━ STEP 8 — MULTI-FORMAT GENERATION ━━━━━━━━━━━━━━━━━━━━━

**What happens:** Convert the Markdown source into DOCX, PDF, and Interview Report.
**Reference:** `docx-template.js`

### Output Files

```
outputs/
├── [Name]_[Company]_[Role]_Resume.md           ← Source of truth
├── [Name]_[Company]_[Role]_Resume.docx         ← Email / attach
├── [Name]_[Company]_[Role]_Resume.pdf          ← Portal upload
└── [Name]_[Company]_[Role]_InterviewPrep.md    ← Bonus prep report
```

### DOCX Color Scheme (Professional Only)

```
Element           Hex       Usage
──────────────────────────────────────────────────────
Name              #1A2744   Bold, 18pt, Dark Navy
Section Headers   #1A2744   Bold, 11pt, UPPERCASE
Header Rule       #2563EB   8pt line under name — Steel Blue
Body Text         #111111   Regular, 10pt, Near-Black
Dates / Metadata  #555555   9pt, Medium Gray
Section Dividers  #CCCCCC   4pt thin rules, Light Gray
Background        #FFFFFF   Always white
Accent colors     NONE      No colored boxes, no sidebars
```

### ATS Format Rules

```
□ Single column ONLY — no tables for layout
□ Font: Calibri or Arial throughout
□ Margins: 0.75" all sides
□ Contact info in body — NOT header/footer
□ No text boxes, no images, no icons
□ LinkedIn + GitHub as clickable plain hyperlinks
□ Bullets via LevelFormat.BULLET — never unicode • pasted manually
□ Page breaks via PageBreak element — not blank paragraphs
```

### PDF Generation

```bash
# Via LibreOffice (recommended)
python scripts/office/soffice.py --headless --convert-to pdf Resume.docx

# Output: Resume.pdf in same directory
```

### Interview Prep Report Structure

```markdown
# Interview Prep Report
## [Role] at [Company]

### Likely Interview Questions
1. [Question derived from JD keyword] → Suggested answer frame
2. [Culture-fit question] → What they're really testing
3. [Technical / domain question] → Key points to hit

### Your Strongest Stories (STAR Ready)
**Story 1:** [Bullet from resume]
- Situation: ___
- Task: ___
- Action: ___
- Result: ___ (with metric)

### Gap Acknowledgment Scripts
**Gap: [X not in your profile]**
→ "While I haven't had direct exposure to X, I've [closest analog],
   which gives me the foundation to get up to speed quickly. For
   example, [specific evidence]."

### Questions to Ask the Interviewer
1. [Smart question referencing something specific from company research]
2. [Role clarity question]
3. [Growth / team culture question]

### Red Flags to Avoid
- Don't say: [X] → signals [Y]
- Do say: [Alternative]
```

### Output of Step 8
```
✓ Resume.md finalized
✓ Resume.docx generated (professional navy palette)
✓ Resume.pdf generated
✓ InterviewPrep.md generated
→ PROCEED TO STEP 9
```

---

## ━━━ STEP 9 — ATS SCORE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**What happens:** Score the final resume across 5 dimensions.
**Reference:** `ats-scoring.md`

### Scoring Table

```
DIMENSION              WEIGHT   MAX    YOUR SCORE
──────────────────────────────────────────────────
1. Keyword Match         30%     30     ___
2. Section Structure     20%     20     ___
3. Format Compliance     20%     20     ___
4. Quantification        15%     15     ___
5. Human Voice           15%     15     ___
──────────────────────────────────────────────────
TOTAL                   100%    100     ___

STATUS:
  95–100  → ELITE      — Submit confidently
  85–94   → STRONG     — Minor keyword additions
  70–84   → GOOD       — Reframe 2–3 bullets
  < 70    → NEEDS WORK — Full revision cycle
```

### Score Gate

```
DO NOT SUBMIT until:
  □ Total score ≥ 95
  □ No single dimension below 75% of its max
      Keyword ≥ 22  |  Structure ≥ 15
      Format ≥ 15   |  Quant ≥ 11   |  Voice ≥ 11

If any dimension fails → fix that dimension first → re-score.
```

### Fast-Fix Priority (if score < 95)

```
Keywords < 25/30  →  Add missing terms to Skills section
Structure < 18/20 →  Rename creative headings; fix date format
Format < 18/20    →  Remove multi-column / tables / fancy elements
Quant < 12/15     →  Add numbers to top 3 bullets
Voice < 12/15     →  Replace AI verbs; vary bullet lengths
```

### Output of Step 9
```
✓ ATS score recorded
✓ Dimension breakdown documented
✓ Resume approved for submission OR revision noted
→ PROCEED TO STEP 10
```

---

## ━━━ STEP 10 — LIBRARY UPDATE (SELF-IMPROVING) ━━━━━━━━━━━━

**What happens:** Save everything discovered this session for faster future resumes.

### Library Update Prompt

```
"Resume complete! Would you like to save this session to your library?

WHAT GETS SAVED:
  ✓ [N] new bullets discovered in this session
  ✓ Reframed versions of existing bullets
  ✓ Certifications added with context
  ✓ Interview questions + STAR stories
  ✓ [Company] research notes
  ✓ Final resume file

BENEFIT: Future resumes for similar roles will be 40–50% faster
         because discovery and research won't repeat.

Save to library? [Y / N]"
```

### Library Structure

```
resume-library/
├── master-experience.md      ← All bullets, tagged by theme + date
├── certifications.md         ← All certs with status + JD context
├── companies-researched.md   ← Research notes per company
├── interview-stories.md      ← STAR stories keyed to bullet
└── resumes/
    └── [Name]_[Company]_[Role]_[YYYY-MM-DD].md
```

### Output of Step 10
```
✓ Library updated (or skipped by user choice)
✓ Session complete
✓ All files in outputs/ folder ready to submit
```

---

## FINAL DELIVERY CHECKLIST

```
SUBMIT ONLY WHEN ALL BOXES ARE CHECKED:

CONTENT
□ Summary tailored to this specific company (not generic)
□ Every bullet has at least 1 metric or scale reference
□ LinkedIn URL in header — clickable
□ GitHub URL in header — clickable (or noted as action item)
□ Certifications section has held + in-progress + recommended
□ Every extracurricular has a JD-relevance hook

FORMAT
□ Single column — no tables for layout
□ Calibri or Arial font throughout
□ No text boxes, icons, images, or colored backgrounds
□ Contact info in body, not header/footer

SCORES
□ ATS total score ≥ 95
□ No dimension below 75% of max
□ Human-voice check passed (no AI verb tells)

FILES
□ Resume.docx — for email attachments
□ Resume.pdf  — for portal uploads
□ InterviewPrep.md — read before interview
```

---

---

# BATCH MODE WORKFLOW  (3–5 Jobs)

---

## When Batch Mode Triggers

```
Detected when user provides:
  • 2+ JD URLs or JD text blocks
  • Phrases: "multiple jobs", "batch", "3 companies", "these roles"
  • List like: "Baud Scientific, Axis Bank, HDFC Research"
```

## Batch Mode Offer

```
"I see [N] job applications — use batch mode?

BENEFITS:
  ✓ Experience discovery runs ONCE for all jobs (saves 20–30 min)
  ✓ Research per company, discovery shared
  ✓ Deduplicated gap analysis = fewer questions
  ✓ Progress tracked across all applications

TIME COMPARISON:
  3 jobs batch:  ~40 min  vs  ~55 min sequential  (27% faster)
  5 jobs batch:  ~55 min  vs  ~90 min sequential  (39% faster)

Use batch mode? [Y / N]"
```

## Batch Pipeline Overview

```
PHASE 0 ─── Batch Initialization
            Collect all JDs + single profile intake

PHASE 1 ─── Aggregate Gap Analysis
            Extract keywords from ALL JDs
            Deduplicate: 14 raw gaps → 8 unique

PHASE 2 ─── Shared Experience Discovery
            ONE interview covering all jobs
            Tag each discovery with "relevant to: job_1, job_3..."

PHASE 3 ─── Per-Job Processing  (×N jobs)
            For each job independently:
              Company research
              Template + content matching
              Resume generation (MD + DOCX)

PHASE 4 ─── Batch Finalization
            Review all resumes together
            Approve / revise / update library
```

## Batch Progress Display

```
BATCH PROGRESS
────────────────────────────────────────────────────
✓ Phase 0: Intake Complete
✓ Phase 1: Gap Analysis — 14 gaps, 8 unique after dedup
✓ Phase 2: Discovery — 5 new experiences found
━ Phase 3: Per-Job Processing
    ✓  Job 1/3: Baud Scientific — ATS: 96 ✓
    ⟳  Job 2/3: Axis Bank       — IN PROGRESS...
    ○  Job 3/3: HDFC Research   — Pending
○ Phase 4: Finalization

ETA: ~8 minutes remaining
────────────────────────────────────────────────────
```

## Incremental Addition (Add Jobs Later)

```
USER: "I found 2 more roles — add them to my batch?"

SKILL:
  → Load existing batch (includes previously discovered experiences)
  → Run incremental gap analysis: find ONLY new gaps
  → Run short targeted discovery (5–10 min, not full 30 min)
  → Process new jobs using enriched library
  → Update batch summary
```

---

## QUICK REFERENCE CARD

```
┌─────────────────────────────────────────────────────────────────┐
│  ULTRA RESUME BUILDER — QUICK REFERENCE                         │
├─────────────────────────────────────────────────────────────────┤
│  INPUT      JD + Profile + LinkedIn URL + GitHub URL            │
│  MODES      Single Job  |  Batch 3–5 Jobs                       │
│  OUTPUT     .md  +  .docx  +  .pdf  +  InterviewPrep.md        │
│  TARGET     95+ ATS score, human-sounding, zero fabrication     │
│  PALETTE    Navy #1A2744  |  Blue #2563EB  |  Black #111111     │
│  LENGTH     1 page (<5 yrs)  |  2 pages (5–10 yrs)             │
│  TIME       Single: ~20–30 min  |  Batch 3: ~40 min            │
├─────────────────────────────────────────────────────────────────┤
│  SUPPORTING FILES                                               │
│  research-prompts.md      Company + role research templates     │
│  interview-discovery.md   100+ branching discovery questions    │
│  certification-library.md 90+ certs mapped by domain           │
│  multi-job-workflow.md    Full batch pipeline                   │
│  docx-template.js         Professional DOCX generator          │
│  ats-scoring.md           5-dimension 100-point scoring rubric  │
└─────────────────────────────────────────────────────────────────┘
```
