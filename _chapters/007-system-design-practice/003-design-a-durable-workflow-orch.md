---
title: Design a Durable Workflow Orchestrator
slug: design-durable-workflow-orchestrator
abstract: Principal-level prompt about coordinating long-running business processes across unreliable services.
---

## Functional requirements (FR)

- _Add functional requirements here._

## Non-functional requirements (NFR)

- _Add non‑functional requirements here._


## The prompt

Design a workflow orchestration platform used by multiple product teams to coordinate long-running processes across APIs, queues, and human approval steps. Workflows may run for days, services can fail or change versions, and teams need to inspect and safely recover executions.

## Functional requirements

- Define, validate, version, publish, start, pause, resume, cancel, and retire workflows.
- Support sequential and parallel steps, branching, timers, retries, and human approvals.
- Persist execution state and provide a history of inputs, outputs, and transitions.
- Route work to external services through authenticated, retryable task interfaces.
- Support compensation or explicit recovery actions for partially completed workflows.
- Let authorized operators inspect, retry, skip, or terminate failed executions.
- Provide tenant ownership, access control, and workflow audit history.

## Non-functional requirements

- State survives process, host, and regional failures according to defined durability objectives.
- Retries do not silently duplicate irreversible business effects.
- Throughput scales without one large tenant starving other workflows.
- Workflow version changes do not corrupt in-flight executions.
- Operators can identify stuck, delayed, failed, and repeatedly retried steps.
- Secrets and sensitive workflow data are protected in storage, transit, logs, and replay tools.
- Recovery actions are bounded, auditable, and safe under partial failure.

## Discussion prompts

- Where is the source of truth for workflow state and transition history?
- What delivery semantics are possible when external side effects are not transactional?
- How do workflow definitions evolve while old executions are still running?
- Which failures are retried, surfaced to operators, or compensated?
- How should reliability expectations differ by workflow and tenant?
