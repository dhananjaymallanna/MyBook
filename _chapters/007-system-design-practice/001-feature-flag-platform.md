---
title: Design a Global Feature Flag Platform
slug: design-global-feature-flag-platform
abstract: Principal-level prompt about safe, low-latency configuration delivery across many services and regions.
---

## The prompt

Design a platform that lets product and engineering teams define feature flags, target users or organizations, and safely roll changes out across a large fleet of services in multiple regions. Many independent teams use it, and a bad configuration must not take down every application at once.

## Functional requirements

- Create, update, archive, and audit flags and their targeting rules.
- Evaluate flags by user, organization, application, and runtime context.
- Support percentage rollouts, allow/deny lists, and time-bounded changes.
- Deliver configuration changes to server-side and client-side SDKs.
- Provide staged rollout, pause, rollback, and emergency kill-switch workflows.
- Enforce roles, approvals, ownership, and tenant boundaries.
- Show evaluation, change, and rollout history to authorized operators.

## Non-functional requirements

- Evaluation adds very little latency and remains available during control-plane outages.
- Changes converge across regions within an agreed propagation target.
- Malformed rules are safely rejected and isolated.
- Tenant data and credentials remain isolated; administrative actions are auditable.
- SDKs have bounded resource use and graceful stale-cache behavior.
- The service scales across many flags, evaluations, teams, and regions.
- Operators can observe propagation lag, evaluation errors, and rollback status.

## Discussion prompts

- Which decisions belong in the control plane, SDK, and data plane?
- How do rule formats evolve while clients run different SDK versions?
- What consistency is needed for routine rollout versus emergency disablement?
- How do you contain blast radius across tenants and applications?
- Which ownership and approval model works across many teams?
