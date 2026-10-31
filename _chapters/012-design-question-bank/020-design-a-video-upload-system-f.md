---
title: "Design a video upload system for a user with low network bandwidth"
slug: practice-020-design-a-video-upload-system-for-a-user-with-low-network-bandwid
abstract: "Media transfer and delivery interview practice prompt."
---

## Additional prompt details


  User has to upload video which is more than 1GB. Users network bandwidth is too low. Network get dropped after 50% upload. User tries again and same thing happens. Now to design an optimized efficient solution to address this issue.

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
