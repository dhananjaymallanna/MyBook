---
title: "Implement a finite state machine"
slug: practice-009-implement-a-finite-state-machine
abstract: "Messaging and event delivery interview practice prompt."
---

## Additional prompt details

– The machine should have one start state and can have multiple end states.
   - It should be extensible (I should be able to add any number of states or transitions at any time)
   - I should be able to set notifications on or off for any state or for the whole state machine

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
