---
title: "Design a login API which is secure even if SSL certification is compromised"
slug: practice-080-design-a-login-api-which-is-secure-even-if-ssl-certification-is
abstract: "Identity, trust, and access interview practice prompt."
---

## Functional requirements (FR)

- Register or recognize identities and authenticate actors using the factors or credentials in scope.
- Authorize actions against the relevant user, resource, role, policy, or context.
- Support credential lifecycle, revocation, recovery, and administrative review.
- Record security-sensitive decisions and changes for investigation.

## Non-functional requirements (NFR)

- Resist impersonation, replay, brute force, privilege escalation, and cross-tenant access.
- Define secure behavior during dependency outages, stale policy, and credential revocation delays.
- Meet explicit decision latency and availability targets without weakening security silently.
- Minimize sensitive data collection and make access auditable.

## Principal-level discussion

- Define the scale, success measures, and operational ownership before committing to an architecture.
- Compare at least two viable approaches and explain the trade-offs, migration path, and failure behavior.
- Identify the riskiest assumptions and how you would validate them with data or a staged rollout.
