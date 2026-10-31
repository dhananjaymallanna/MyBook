---
title: Design a Multi-Channel Notification Platform
slug: design-multi-channel-notification-platform
abstract: Principal-level prompt about dispatching high-volume transactional and marketing alerts across Push, SMS, and Email with carrier circuit breakers and preference routing.
---

## Functional requirements (FR)

- _Add functional requirements here._

## Non-functional requirements (NFR)

- _Add non‑functional requirements here._


## The prompt

Design a global, multi-tenant notification platform for sending transactional, security, and promotional messages across mobile push (APNs, FCM), SMS (Twilio, Sinch), email (SendGrid, SES), and in-app feeds. The system must process hundreds of millions of notifications daily, enforce recipient preferences and quiet hours, and gracefully handle carrier outages without losing critical alerts.

## Functional requirements

- Dispatch messages across Mobile Push, SMS, Email, Webhooks, and In-App notification inboxes.
- Render dynamic templates with localized text, variable interpolation, and version control.
- Enforce granular user communication preferences, opt-out lists, and local time-zone quiet hours.
- Deduplicate identical messages caused by upstream retries or multiple services firing within a sliding window.
- Ingest carrier delivery receipts and webhooks to provide end-to-end delivery telemetry (`SENT`, `DELIVERED`, `BOUNCED`).
- Support priority routing with strict separation between P0 (2FA OTPs) and P3 (promotional campaigns).

## Non-functional requirements

- Scale to 500M notifications/day with peak throughput of 50,000 notifications/sec.
- Transactional latency: P0 security and OTP messages dispatch to downstream providers in $p99 \le 5\text{ seconds}$.
- Zero dropped transactional notifications ($RPO = 0$); persistent event log precedes all downstream dispatch attempts.
- Automated multi-carrier circuit breaking switches traffic to backup vendors within 30 seconds of carrier degradation.
- Priority queue isolation prevents high-volume marketing batches from causing head-of-line blocking on OTPs.
- Multi-tenant tenant boundaries prevent quota exhaustion or noisy neighbors from affecting other services.
- Sensitive user data (phone numbers, email addresses, OTP codes) is encrypted in transit and at rest.

## Discussion prompts

- How do you design priority queue architectures to physically isolate transactional P0 alerts from marketing campaigns?
- How do dynamic vendor circuit breakers evaluate delivery success rates and shift traffic based on real-time quality and cost?
- How do you implement distributed idempotency key fingerprints to prevent duplicate user notifications?
- How does the system process downstream carrier webhooks at scale without overwhelming internal status databases?
- What is the operational protocol for handling invalid device tokens and carrier feedback loops to avoid provider penalties?
