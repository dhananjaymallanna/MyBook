---
title: Design a Shared Observability Platform
slug: design-shared-observability-platform
abstract: Principal-level prompt about collecting logs, metrics, and traces across teams while controlling cost and protecting sensitive data.
---

## Functional requirements (FR)

- _Add functional requirements here._

## Non-functional requirements (NFR)

- _Add non‑functional requirements here._


## The prompt

Design a shared observability platform for a large engineering organization. Applications emit logs, metrics, and traces; teams need to investigate incidents quickly without each team operating an isolated stack. Telemetry volume can spike during incidents, and access must follow organizational boundaries.

## Functional requirements

- Collect logs, metrics, and traces from supported runtimes and infrastructure.
- Normalize, enrich, filter, and route telemetry to storage and query systems.
- Let teams search, chart, correlate, and alert on authorized telemetry.
- Support service ownership, environment, region, and deployment metadata.
- Provide retention tiers, sampling, redaction, and tenant usage views.
- Enable incident investigation across service boundaries with auditable access.
- Offer onboarding and service health views for teams adopting the platform.

## Non-functional requirements

- Ingestion remains available during traffic spikes and incident bursts.
- Query performance and freshness have explicit objectives by data type and tier.
- Ingestion failures are detectable; important telemetry is not silently discarded.
- Tenant access, secrets, and sensitive fields are protected and auditable.
- Cost is visible and controllable without hiding critical reliability signals.
- The system isolates noisy tenants and supports regional failure recovery.
- Instrumentation agents do not materially degrade application performance.

## Discussion prompts

- Which data should be sampled, aggregated, dropped, or retained during overload?
- How do you provide a shared platform while preserving team ownership and autonomy?
- How do you correlate traces, logs, and metrics across services and schemas?
- How do retention tiers and query guarantees shape the cost model?
- How can the platform reduce alert fatigue while keeping service-level objectives actionable?
