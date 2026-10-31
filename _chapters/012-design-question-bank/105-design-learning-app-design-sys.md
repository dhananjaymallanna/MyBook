---
title: "Design Learning app (Design system where teachers can upload the content and stuedents can view that content.)"
slug: practice-105-design-learning-app-design-system-where-teachers-can-upload-the
abstract: "Media transfer and delivery interview practice prompt."
---

## Additional prompt details

  - Teachers should be notified once their content is uploaded.
  - Upload should continue even if browser is closed in case it is a browser upload.

## Functional requirements (FR)

- Accept media uploads or source references and track each asset through its processing lifecycle.
- Resume interrupted transfers and expose progress, validation, processing, and failure status.
- Make completed media discoverable and deliverable to authorized clients in supported formats or qualities.
- Support lifecycle actions such as retry, cancel, delete, or retention according to the prompt.

## Non-functional requirements (NFR)

- Support large files, unreliable networks, bursty ingest, and efficient bandwidth use.
- Define processing latency, playback or download startup, and availability targets.
- Protect content and user data with access controls, integrity checks, and retention policies.
- Scale storage and processing capacity while making failures, backlog, and cost visible.

## Principal-level discussion

- Define the scale, success measures, and operational ownership before committing to an architecture.
- Compare at least two viable approaches and explain the trade-offs, migration path, and failure behavior.
- Identify the riskiest assumptions and how you would validate them with data or a staged rollout.
