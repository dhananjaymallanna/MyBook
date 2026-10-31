---
title: "Design a configuration management system"
slug: practice-036-design-a-configuration-management-system
abstract: "Search, analytics, and intelligence interview practice prompt."
---

## Additional prompt details

  - User should be able to add configuration
  - User should be able to delete configuration
  - User should be able to search for configuration
  - User should be able to subscribe to Configuration So that any updates in configuration will gets notfied to user

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
