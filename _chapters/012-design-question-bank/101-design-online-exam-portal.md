---
title: "Design Online Exam Portal"
slug: practice-101-design-online-exam-portal
abstract: "Learning and assessment products interview practice prompt."
---

## Additional prompt details

  - On exam completion total score and subject wise score calculation (make sure u consider negative marking).
  - On exam completion Rank calculation.
  - Provision for MOCK tests (users should get hypothetical ranks by comparing previous year results)
  - A pre-exam (with limited users ~10k) to mimic actual exam and then give generalised ranks for more users(in millions).

## Functional requirements (FR)

- Manage users, content, assessments, attempts, and results required by the prompt.
- Support discovery, access, progress tracking, and resume behavior where relevant.
- Apply scoring, eligibility, timing, ranking, and content ownership rules.
- Notify learners or content owners about meaningful state changes.

## Non-functional requirements (NFR)

- Preserve assessment integrity and prevent unauthorized access to questions or results.
- Handle concurrent sessions and peak submission traffic without losing completed work.
- Define result accuracy, availability, and reporting freshness targets.
- Support accessibility, auditability, and privacy requirements for learner data.

## Principal-level discussion

- Define the scale, success measures, and operational ownership before committing to an architecture.
- Compare at least two viable approaches and explain the trade-offs, migration path, and failure behavior.
- Identify the riskiest assumptions and how you would validate them with data or a staged rollout.
