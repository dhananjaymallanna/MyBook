---
title: "Implement service to Find the recently viewed listings on the website by the user. Example a user looked for hotels in Bangalore. Design a system responsible to return the recent listings for a user"
slug: practice-123-implement-service-to-find-the-recently-viewed-listings-on-the-we
abstract: "Search, analytics, and intelligence interview practice prompt."
---

## Functional requirements (FR)

- Ingest or maintain the source data required for the requested search, ranking, analytics, or alert behavior.
- Let authorized users query results using the filters, time ranges, or preferences in scope.
- Refresh derived results as source data changes and expose freshness or confidence where relevant.
- Provide controls for subscriptions, thresholds, or saved views where requested.

## Non-functional requirements (NFR)

- Set measurable freshness, query-latency, and throughput objectives.
- Define correctness bounds for aggregation, ranking, deduplication, and late-arriving data.
- Protect user and event data and enforce tenant access boundaries.
- Make data lag, query failures, alert delivery, and cost visible to operators.

## Principal-level discussion

- Define the scale, success measures, and operational ownership before committing to an architecture.
- Compare at least two viable approaches and explain the trade-offs, migration path, and failure behavior.
- Identify the riskiest assumptions and how you would validate them with data or a staged rollout.
