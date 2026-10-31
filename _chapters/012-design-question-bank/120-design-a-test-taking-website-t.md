---
title: "Design a test taking website type service where user can register/login,"
slug: practice-120-design-a-test-taking-website-type-service-where-user-can-registe
abstract: "Identity, trust, and access interview practice prompt."
---

## Additional prompt details

  - give the test and can see their past test score and rankings.
  - Test can be of multiple types and questions in test can be of multiple type (mcq, yes/no, fill in the blanks, multiple correct options) with the questions can being both image and direct string.
  - Questions should be unique to every user in a particular test and in case of user being dropped from the test (bad internet or anything) he can resume the test from where he left provided he came before his test timer was off.

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
