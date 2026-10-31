---
title: "Design subscription-based sports website which can display scores, game status, history for any games"
slug: practice-001-design-subscription-based-sports-website-which-can-display-score
abstract: "Interactive and collaborative systems interview practice prompt."
---

## Functional requirements (FR)

- Create sessions or shared spaces and let authorized participants join, leave, and view current state.
- Accept user actions and propagate relevant state changes to other participants.
- Support reconnection, state recovery, and history or audit views where required.
- Enforce participant permissions and domain rules during concurrent actions.

## Non-functional requirements (NFR)

- Define interaction latency, ordering, conflict resolution, and consistency expectations.
- Support reconnects and partial network failure without silently losing accepted changes.
- Scale concurrent sessions and participants while isolating abusive or overloaded sessions.
- Protect private content and provide operational visibility into synchronization health.

## Principal-level discussion

- Define the scale, success measures, and operational ownership before committing to an architecture.
- Compare at least two viable approaches and explain the trade-offs, migration path, and failure behavior.
- Identify the riskiest assumptions and how you would validate them with data or a staged rollout.
