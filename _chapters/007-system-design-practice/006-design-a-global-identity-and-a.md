---
title: Design a Global Identity and Authorization Platform
slug: design-global-identity-authorization-platform
abstract: Principal-level prompt about identity, authorization, and policy distribution across products and regions.
---

## Functional requirements (FR)

- _Add functional requirements here._

## Non-functional requirements (NFR)

- _Add non‑functional requirements here._


## The prompt

Design an identity and authorization platform used by multiple products, organizations, and service teams. It must support workforce and customer identities and authorize requests across regional services. A policy mistake can expose data, while an identity outage can block legitimate access.

## Functional requirements

- Support identity lifecycle operations, authentication integrations, and account recovery.
- Model users, organizations, groups, roles, and service identities.
- Evaluate policies using identity, resource, action, and request context.
- Support delegated administration, scoped credentials, and policy change approvals.
- Distribute policy and identity changes to services and provide audit trails.
- Support revocation, emergency access review, and investigation of access decisions.
- Integrate with existing products without requiring synchronized releases.

## Non-functional requirements

- Authorization decisions are low-latency, highly available, and fail according to an explicit security posture.
- Identity and policy data are protected, encrypted, and auditable.
- Policy propagation and credential revocation have defined convergence targets.
- Tenant boundaries prevent cross-organization access, including during cache or replication failures.
- The platform resists abuse, credential attacks, privilege escalation, and policy misconfiguration.
- Changes are attributable, reviewable, and reversible where safe.
- Regional resilience does not silently weaken authentication or authorization guarantees.

## Discussion prompts

- Which decisions are evaluated centrally and which can be safely evaluated locally?
- How do you balance availability with fail-closed behavior for different actions and data classes?
- How are policies versioned, tested, reviewed, and rolled out across independently deployed services?
- How do you revoke credentials and permissions during regional isolation?
- What evidence should be available after an access incident?
