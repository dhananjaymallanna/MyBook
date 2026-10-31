---
title: Design a Multi-Tenant Event Ingestion Platform
slug: design-multi-tenant-event-ingestion-platform
abstract: Principal-level prompt about accepting, validating, routing, and retaining high-volume events from many producers.
---

## The prompt

Design a platform that accepts events from internal and external producers, validates and routes them to downstream consumers, and supports replay for recovery or reprocessing. Traffic is bursty, producers have different service levels, and one customer must not exhaust shared capacity.

## Functional requirements

- Authenticate producers and accept events through documented APIs or SDKs.
- Validate schemas, versions, required fields, and payload limits.
- Route events to authorized topics, streams, or consumer groups.
- Support consumer offsets, replay from a selected position, and retention policies.
- Provide producer quotas, tenant isolation, and configurable delivery guarantees.
- Expose delivery status, consumer lag, schema errors, and usage information.
- Allow schema evolution and controlled deprecation of old event versions.

## Non-functional requirements

- Ingestion absorbs bursts while applying backpressure before shared resources are exhausted.
- Accepted events meet a clear durability and regional recovery objective.
- Throughput and latency objectives are measurable per tenant and service tier.
- Ordering guarantees and their scope are explicit.
- A faulty schema, consumer, or tenant does not block unrelated traffic.
- Sensitive payloads have access controls, encryption, retention limits, and auditable access.
- Replay does not unexpectedly trigger duplicate downstream business effects.

## Discussion prompts

- Which delivery guarantees can the platform offer end-to-end, and which depend on consumers?
- How do partitions, hot keys, and large payloads influence the API and isolation model?
- How do schema governance and independent team release cycles coexist?
- What is the operational contract when a tenant exceeds quotas or consumers fall behind?
- How do retention, replay, and regional replication affect cost and recovery objectives?
