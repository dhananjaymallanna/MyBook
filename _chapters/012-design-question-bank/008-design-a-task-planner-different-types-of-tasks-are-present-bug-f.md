---
title: "Design a task planner. Different types of tasks are present – bug, feature and story. And their attributes are given. Also a Sprint which is a collection of tasks"
slug: practice-008-design-a-task-planner-different-types-of-tasks-are-present-bug-f
abstract: "Application and platform design interview practice prompt."
---

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
