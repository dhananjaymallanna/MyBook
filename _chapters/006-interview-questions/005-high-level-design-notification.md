---
title: High Level Design (Notification Service & Job Scheduler)
slug: High Level Design
abstract: Enterprise high-level architecture drill covering multi-channel notification fanout, provider circuit breaking, and distributed job scheduling.
---

## Functional requirements (FR)

- _Add functional requirements here._

## Non-functional requirements (NFR)

- _Add non‑functional requirements here._


## 1. Notification Platform Architecture

### The prompt

Design a multi-tenant, cloud-native notification platform (SaaS) that allows internal and external microservices to dispatch notifications across Push, SMS, and Email with strict rate limiting, multi-client isolation, and carrier redundancy.

### Functional requirements

- **Multi-Channel Dispatch:** Ingest and route messages across Mobile Push (APNs, FCM), SMS (Twilio, Sinch), and Email (SendGrid, SES).
- **Multi-Tenant SaaS Isolation:** Support tenant accounts with dedicated usage quotas, API credentials, and per-tenant rate limits.
- **Pluggable Carrier Architecture:** Enable adding or updating third-party communication providers without downtime or codebase refactoring.
- **Dynamic Template Management:** Render localized templates with dynamic JSON variable interpolation.
- **Delivery Receipts & Telemetry:** Ingest carrier webhooks to track real-time delivery status (`QUEUED`, `SENT`, `DELIVERED`, `FAILED`).

### Non-functional requirements

- **High Availability:** 99.99% service availability with automated multi-carrier failover during vendor outages.
- **Low Latency:** P0 transactional alerts (e.g., OTPs) dispatch to carriers in $p99 \le 3\text{ seconds}$.
- **Throughput:** Scale to 50,000 dispatches/second during marketing campaigns without degrading OTP channels.
- **Deduplication:** Content-hash idempotency prevents duplicate alerts within a 10-minute sliding window.

### Architecture Diagram

![Notification Service Architecture](assets/gitbook/images/hld/notication.excalidraw.png){:class="img-responsive"}

---

## 2. Distributed Job Scheduler Architecture

### The prompt

Design a distributed, highly available job scheduling engine capable of executing delayed tasks and recurring cron expressions across a distributed worker fleet with lease fencing and zombie worker recovery.

### Functional requirements

- **One-off & Cron Schedules:** Schedule tasks with arbitrary delays ($T + \Delta t$) or standard 5-field cron syntax.
- **Task Lease & Execution Tracking:** Coordinate task assignment to workers with active heartbeat leases and execution states.
- **Automated Retries:** Exponential backoff and dead-letter queue (DLQ) support for failed jobs.
- **Management API:** Support task pausing, cancellation, and manual re-triggering.

### Non-functional requirements

- **Dispatch Accuracy:** Scheduled jobs trigger within $\le 500\text{ ms}$ of target timestamp.
- **Zero Task Loss:** At-least-once execution guarantee with persistent commit logs before worker dispatch.
- **Scalability:** Support 100M scheduled tasks with automated worker cluster auto-scaling.

### Architecture Diagram

![Job Scheduler Architecture](assets/gitbook/images/hld/job.excalidraw.png){:class="img-responsive"}

---

## Discussion prompts

- How do you isolate transactional P0 queues from bulk marketing P3 queues to eliminate head-of-line blocking?
- What health checks and error-rate thresholds determine when to trip a circuit breaker on a degraded SMS carrier?
- How do distributed leases and fencing tokens prevent a delayed zombie worker from executing an already reassigned job?
- What are the storage trade-offs between Redis Sorted Sets and partitioned PostgreSQL for scheduling queues?
