---
title: "Design a UUID generator"
slug: practice-136-design-a-uuid-generator
abstract: "Application and platform design interview practice prompt."
---

## Additional prompt details

  - Design a system that is incrementally scallable upto 1000 unique ID requests per second each by 1000 devices per person, for every human on the earth for 100 years.
  - Consider:

          10^10 - number of people on the planet
          10^10 - number of second in 100 years
          10^7 - max requests per second per server serviceable.

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
