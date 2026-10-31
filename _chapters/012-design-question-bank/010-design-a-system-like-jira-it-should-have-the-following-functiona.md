---
title: "Design a system like Jira. It should have the following functionalities"
slug: practice-010-design-a-system-like-jira-it-should-have-the-following-functiona
abstract: "Application and platform design interview practice prompt."
---

## Additional prompt details

  - User should be able to create Task of type Story, Feature, Bugs. Each can have their own status.
  - Stories can further have subtracts.
  - Should be able to change the status of any task.
  - User should be able to create any sprint. Should be able to add any task to sprint and remove from it.
    - User should be able to print
    - Delayed task
    - Sprint details
    - Tasks assigned to the user

## Functional requirements (FR)

- Identify the primary actors and support their core create, read, update, and lifecycle actions.
- Enforce the domain rules and constraints stated in the original prompt.
- Provide appropriate search, status, history, or reporting capabilities for the use case.
- Give operators a way to inspect failures and safely perform permitted administrative actions.

## Non-functional requirements (NFR)

- Define availability, latency, throughput, and growth targets from the intended workload.
- Preserve data correctness during concurrent operations, retries, and dependency failures.
- Protect user and business data with authentication, authorization, and auditable access.
- Plan for observability, recovery, deployment safety, and cost as usage grows.

## Principal-level discussion

- Define the scale, success measures, and operational ownership before committing to an architecture.
- Compare at least two viable approaches and explain the trade-offs, migration path, and failure behavior.
- Identify the riskiest assumptions and how you would validate them with data or a staged rollout.
