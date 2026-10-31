---
title: Design a Distributed Job Scheduler & Cron Engine
slug: design-distributed-job-scheduler-cron
abstract: Principal-level prompt about dispatching millions of delayed and recurring jobs with high precision, worker lease fencing, and tenant fairness.
---

## The prompt

Design a multi-tenant distributed job scheduling platform that executes one-off delayed tasks (e.g., execute at timestamp $T$) and recurring cron expressions (e.g., every Monday at 09:00 UTC) across a heterogeneous worker fleet. Multiple internal teams rely on it for critical business processes, and the system must guarantee prompt execution without worker starvation or duplicate side-effects.

## Functional requirements

- Schedule one-off jobs with arbitrary delay (seconds to months) and recurring jobs with cron syntax.
- Support job cancellation, pause, resume, and runtime parameter overrides.
- Route jobs to specific worker pools based on capabilities, tenant queues, and execution tags.
- Provide automated retry policies with configurable exponential backoff, jitter, and dead-letter queues (DLQ).
- Track job execution lifecycle (`SCHEDULED`, `DISPATCHED`, `RUNNING`, `SUCCESS`, `FAILED`, `CANCELLED`).
- Enforce tenant execution limits and prioritization to prevent noisy neighbors from blocking P0 jobs.
- Expose job history, execution duration metrics, and worker logs to team dashboards.

## Non-functional requirements

- Dispatch accuracy ensures jobs trigger within $\le 500\text{ ms}$ of their scheduled execution time under peak load.
- Execution semantics provide at-least-once delivery; exactly-once dispatch is maintained under normal node operations.
- The scheduler cluster has no single point of failure and handles node failovers without losing scheduled jobs.
- The system scales to 100M scheduled jobs/day and 15,000 dispatches/sec during top-of-the-hour traffic spikes.
- Leases and heartbeats detect dead or hanging workers within 30 seconds and safely reassign pending work.
- Partitioning prevents a high-volume tenant from monopolizing database read/write throughput.
- Administrative operations (bulk cancellation, schedule pausing) propagate within 5 seconds.

## Discussion prompts

- How do you avoid database polling bottlenecks (`SELECT ... WHERE run_at <= NOW()`) at high scale?
- What are the trade-offs between hierarchical time-wheels, partitioned B-Trees, and distributed memory queues?
- How do fencing tokens and distributed leases prevent zombie workers from causing duplicate execution side-effects?
- How do you handle clock drift across scheduler nodes in multi-region environments?
- What strategy best handles top-of-the-hour spike stampedes without overwhelming downstream worker capacity?
