---
title: "Design Survey similar to Google Forms / SurveyMonkey"
slug: practice-022-design-survey-similar-to-google-forms-surveymonkey
abstract: "Learning and assessment products interview practice prompt."
---

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
