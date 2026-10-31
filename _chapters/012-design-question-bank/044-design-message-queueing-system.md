---
title: "Design message queueing system"
slug: practice-044-design-message-queueing-system
abstract: "Messaging and event delivery interview practice prompt."
---

## Additional prompt details

  - Create your own queue that will hold messages in form of JSON. Standard library queues were not allowed.
  - There was one publisher that can generate messages.
  - There are mutiple suscribers that will listen messages satisfying a particular regex.
  - Suscribers should not be tighly coupled to system and can be added or removed at runtime.
  - When a suscriber is added to the system, it registers callback function along with it. And this callback function will be invoked in case some message arrives.
  - There can be dependency relationship among suscribers i.e if there are two suscribers say A and B and A knows that B has to listen and process first, then only A can listen and process. There was many to many dependency relationship among suscribers.
   - There must a retry mechanism for handling error cases when some exception occurs in listening/ processing messages, that must be retried.

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
