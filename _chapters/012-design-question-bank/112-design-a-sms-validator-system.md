---
title: "Design a SMS validator system"
slug: practice-112-design-a-sms-validator-system
abstract: "Messaging and event delivery interview practice prompt."
---

## Functional requirements (FR)

- Accept messages or events from authorized producers and route them to the intended recipients or subscribers.
- Support subscription, filtering, delivery status, and runtime changes to subscribers or destinations where required.
- Retry transient failures and expose failed, delayed, or dead-lettered work for inspection.
- Allow producers or consumers to identify and safely handle duplicate deliveries.

## Non-functional requirements (NFR)

- Specify delivery semantics, ordering scope, retention, and replay behavior.
- Meet explicit latency and throughput objectives while isolating noisy tenants or consumers.
- Protect message payloads and endpoint credentials; prevent unauthorized subscriptions and delivery.
- Remain observable during provider failures, backlogs, retry storms, and partial regional outages.

## Principal-level discussion

- Define the scale, success measures, and operational ownership before committing to an architecture.
- Compare at least two viable approaches and explain the trade-offs, migration path, and failure behavior.
- Identify the riskiest assumptions and how you would validate them with data or a staged rollout.
