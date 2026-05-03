# Multi-Job Batch Workflow

## Overview

Process 3–5 similar job applications with shared experience discovery.
Reduces total time by 25–40% vs sequential processing.

**Time Savings:**
- 3 jobs: ~40 min (vs 55 min sequential) = 27% savings
- 5 jobs: ~55 min (vs 90 min sequential) = 39% savings

---

## Batch Activation

**Detect batch intent:**
```python
def detect_batch(user_input):
    signals = [
        len(extract_jd_urls(user_input)) > 1,
        len(extract_jd_texts(user_input)) > 1,
        any(phrase in user_input.lower() for phrase in
            ["multiple jobs", "batch", "several positions",
             "3 jobs", "4 jobs", "5 jobs", "these roles"]),
        count_company_job_pairs(user_input) > 1
    ]
    return any(signals)
```

**Offer batch mode:**
```
"I see you have [N] job applications. Would you like to use batch mode?

BATCH MODE BENEFITS:
✓ Experience discovery runs ONCE (saves 20–30 min)
✓ Shared company research → job-specific customization
✓ Deduplicated gap analysis → fewer questions
✓ Progress tracker for all applications

Estimated time: ~[X] min vs ~[Y] min sequential

Use batch mode? [Y/N]"
```

---

## PHASE 0: Batch Initialization

```
BATCH SETUP
════════════════════════════════════════

Collect for ALL jobs:
1. Name/profile/LinkedIn/GitHub (once)
2. JD 1: [Title] at [Company] — [paste/URL]
3. JD 2: [Title] at [Company] — [paste/URL]
4. JD 3: [Title] at [Company] — [paste/URL]
(up to 5)

Initialize batch tracker:
{
  "batch_id": "batch_[timestamp]",
  "candidate": { "name": "", "linkedin": "", "github": "" },
  "jobs": [
    { "id": "job_1", "title": "", "company": "", "jd": "", "status": "pending" },
    ...
  ],
  "shared_library": { "bullets": [], "discoveries": [], "certifications": [] },
  "gap_map": { "critical": [], "important": [], "job_specific": {} }
}
```

---

## PHASE 1: Aggregate Gap Analysis

Run against ALL JDs simultaneously.

```
AGGREGATE GAP ANALYSIS
════════════════════════════════════════

Step 1: Extract keywords from each JD
  JD 1 keywords: [list]
  JD 2 keywords: [list]
  JD 3 keywords: [list]

Step 2: Cross-reference against current profile
  COVERED (in at least one JD): [list]
  GAPS (missing across all JDs): [list]
  JOB-SPECIFIC GAPS: {
    job_1: [unique gaps for job 1],
    job_2: [unique gaps for job 2]
  }

Step 3: Prioritize
  CRITICAL (appears in 2+ JDs AND not in profile): [ranked list]
  IMPORTANT (appears in 1 JD, medium weight): [list]
  JOB-SPECIFIC (only relevant for one job): [map]

Step 4: Deduplication
  Before dedup: [total gap count]
  After dedup: [unique gaps]
  Reduction: [X]% fewer discovery questions needed
```

---

## PHASE 2: Shared Experience Discovery

Single discovery interview covering ALL gaps.

```
DISCOVERY INTRODUCTION (batch-aware):
"I'll ask you questions that apply across all [N] jobs you're applying to.
This way you answer everything once, and I'll tailor each resume separately.

Some questions are relevant to all jobs; I'll note when a question is
specific to one company."
```

**Multi-context question format:**
```
Standard: "Tell me about a time you analyzed financial data."

Batch-aware: "Tell me about a time you analyzed financial data —
this is relevant to all 3 roles, especially [Company 2]'s
requirements around credit analysis."
```

**Tagging discoveries for multiple jobs:**
```json
{
  "discovery": "Built DCF model for retail sector in Operations Research project",
  "jobs_relevant_to": ["job_1", "job_2", "job_3"],
  "job_specific_reframe": {
    "job_1": "Emphasize sector analysis for equity research context",
    "job_2": "Emphasize modeling skills for credit analysis context",
    "job_3": "Emphasize cross-disciplinary application for consulting"
  }
}
```

---

## PHASE 3: Per-Job Processing (Sequential)

For each job, independently:

```
JOB [N] PROCESSING: [Title] at [Company]
════════════════════════════════════════

3a. Company Research (job-specific):
  ↓ Research [Company] culture, recent news, team
  ↓ Identify company-specific keywords to weave in

3b. Template Generation:
  ↓ Select most relevant bullets from shared library
  ↓ Apply job-specific reframes from discovery tags
  ↓ Customize summary for [Company]

3c. Content Matching:
  ↓ Score all bullets against THIS JD
  ↓ Select top bullets (confidence ≥ 0.65)
  ↓ Fill remaining gaps with discoveries

3d. Output Generation:
  ↓ MD: [Name]_[Company]_[Role].md
  ↓ DOCX: [Name]_[Company]_[Role].docx
  ↓ PDF: [Name]_[Company]_[Role].pdf
  ↓ Report: [Name]_[Company]_[Role]_InterviewPrep.md

Status: JOB [N] COMPLETE ✓
```

**Express vs Interactive mode per job:**
```
For first job: Interactive (show template, get approval)
For subsequent jobs: Express (generate, show diff from previous)

Express mode prompt:
"Job 2 ([Company]) is [X]% similar to Job 1 ([Company]).
Here's what changes:
• Summary: [Shows only the changed lines]
• 3 bullet swaps: [Shows old → new]
• 1 new certification added

Review changes? [Y = Show full resume | N = Approve and continue]"
```

---

## PHASE 4: Batch Finalization

```
BATCH SUMMARY
════════════════════════════════════════
Total Resumes Generated: [N]
Total Time: [X] min (estimated [Y] min saved vs sequential)
Experiences Discovered: [N] new bullets added to library

RESUME STATUS:
Job 1: [Company] — ATS Score: XX | Status: ✓ Ready
Job 2: [Company] — ATS Score: XX | Status: ✓ Ready
Job 3: [Company] — ATS Score: XX | Status: ⚠️ Review recommended

ACTION NEEDED:
• Job 3: [Company] has a 15% ATS score difference — recommend
  adding [specific certification] before applying

APPROVE OPTIONS:
[A] Approve all resumes → Library update
[R] Review each resume individually
[X] Revise specific job (type job number)
```

---

## Incremental Batch Addition

User adds more jobs to an existing batch later:

```
INCREMENTAL ADDITION DETECTED
════════════════════════════════════════
Existing batch: [N] jobs | [X] experiences discovered

NEW JOBS ADDED: [N] more
→ Running incremental gap analysis...
→ Found [Y] new gaps (vs [Z] original)
→ [W] gaps already covered by previous discovery

INCREMENTAL QUESTIONS NEEDED: [Y - W] = [N] new questions only
(vs [full_discovery_count] if starting from scratch)

Proceed with [N] questions? [Y/N]
```

---

## Batch Progress Tracker Format

Display to user throughout:

```
BATCH PROGRESS
─────────────────────────────────────────
✓ Phase 0: Intake Complete
✓ Phase 1: Gap Analysis — 14 gaps, 8 unique
✓ Phase 2: Discovery — 5 new experiences found
━ Phase 3: Per-Job Processing
  ✓ Job 1/3: [Company A] — ATS: 94 ✓
  ⟳ Job 2/3: [Company B] — IN PROGRESS...
  ○ Job 3/3: [Company C] — Pending
○ Phase 4: Finalization

ETA: ~8 minutes remaining
```
