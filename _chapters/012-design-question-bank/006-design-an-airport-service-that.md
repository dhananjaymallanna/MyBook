---
title: "Design an airport service that will be used to allocate a free runway when the plane is about to land. Data structure for the same. What if the runway is not available? Message passing between control center and the plane. Focus on low-level design and code. Can the same runway be allocated to two different planes (locking)? Database storage needed?"
slug: practice-006-design-an-airport-service-that-will-be-used-to-allocate-a-free-r
abstract: "Scheduling and resource allocation interview practice prompt."
---

## Functional requirements (FR)

- Create, view, change, and cancel bookings or allocations for the resources described in the prompt.
- Search availability by the relevant time, location, capacity, or participant constraints.
- Notify affected users when a booking, assignment, or availability state changes.
- Provide history and current status for users, operators, and resource owners.

## Non-functional requirements (NFR)

- Prevent double booking and define how conflicting requests are serialized or rejected.
- Keep availability queries responsive during peak demand and define freshness expectations.
- Handle retries, time-zone boundaries, cancellation races, and partial notification failures safely.
- Protect personal and location data and make allocation decisions observable and auditable.

## Principal-level discussion

- Define the scale, success measures, and operational ownership before committing to an architecture.
- Compare at least two viable approaches and explain the trade-offs, migration path, and failure behavior.
- Identify the riskiest assumptions and how you would validate them with data or a staged rollout.
