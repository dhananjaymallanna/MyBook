---
title: "Developing a message queueing system"
slug: practice-096-developing-a-message-queueing-system
abstract: "Messaging and event delivery interview practice prompt."
---

## Additional prompt details

  - Create your own queue that will hold messages in the form of JSON(Standard library with queue implementation were not allowed).
  - There can be more than one queue at any given point of time.
  - There will be one publisher that can generate messages to a queue.
  - There are multiple subscribers that will listen to queues for messages.
  - Subscribers should not be tightly coupled to the system and can be added or removed at runtime.
  - When a subscriber is added to the system, It registers a callback function which makes an API call to the given end point with the json payload, this       callback function will be invoked in case some message arrives.
  - Subscriber can consume the messages in batches if the queue has more than one message and it should be configurable.
  - There must be a retry mechanism for handling error cases when some exception occurs in listening/processing a message, that must be retried.

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
