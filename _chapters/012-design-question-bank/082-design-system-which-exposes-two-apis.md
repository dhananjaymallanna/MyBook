---
title: "Design system which exposes two APIs"
slug: practice-082-design-system-which-exposes-two-apis
abstract: "Media transfer and delivery interview practice prompt."
---

## Additional prompt details

    1) Save Numbers : which takes N integers and saves in backend
    2) GetMedian: Returns median of the numbers stored so far. [Most Frequent Op]

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
