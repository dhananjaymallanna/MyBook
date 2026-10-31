---
title: Design a Global Rate-Limiting Platform
slug: design-global-rate-limiting-platform
abstract: Principal-level prompt about enforcing customer and service quotas across regions without a central request-path dependency.
---

## Functional requirements (FR)

- _Add functional requirements here._

## Non-functional requirements (NFR)

- _Add non‑functional requirements here._


## The prompt

Design a rate-limiting platform for a large API estate. Product teams define limits by customer, user, API, and operation, while traffic is served from multiple regions. The platform must protect shared infrastructure without turning a regional network partition into a global outage.

## Functional requirements

- Define, version, publish, and retire rate-limit policies.
- Apply limits across tenant, user, API, and time-window dimensions.
- Support burst capacity, quotas, and different policies by service tier.
- Return a decision and, when applicable, retry guidance to callers.
- Provide policy preview, audit history, usage reporting, and emergency overrides.
- Support service SDKs or gateways and identify the policy used for each decision.
- Allow controlled exceptions with owners and expiration times.

## Non-functional requirements

- The decision path has predictable low latency and high availability.
- Enforcement remains useful during control-plane, regional, and inter-region failures.
- Counter drift and quota overshoot have explicit, measurable bounds.
- Policy changes propagate within an agreed target.
- Tenant isolation prevents one customer from affecting another.
- Hot keys and uneven traffic do not become shared bottlenecks.
- Policy changes and overrides are observable, attributable, and reversible.

## Discussion prompts

- Which guarantees should be strict, approximate, or configurable?
- How do you trade quota accuracy against latency and partition tolerance?
- How do you avoid a central synchronous dependency on every API request?
- What happens when policy propagation is delayed or a counter store is unavailable?
- How can a platform provide safe defaults while preserving service-team autonomy?
