---
title: Design a Multi-Currency Payment Gateway & Ledger
slug: design-payment-gateway-ledger
abstract: Principal-level prompt about idempotent payment capture, double-entry financial ledgers, and automated reconciliation across unstable payment rails.
---

## The prompt

Design a global payment processing platform and financial ledger for a marketplace operating across multiple countries and currencies. The system authorizes, captures, and refunds customer payments through external payment service providers (Stripe, Adyen, PayPal), distributes payouts to merchants, and maintains an immutable double-entry ledger of all monetary movements.

## Functional requirements

- Process payments across credit cards, bank transfers, and digital wallets with multi-currency support.
- Guarantee strict idempotency for all authorization, capture, and refund requests.
- Maintain an immutable, double-entry financial ledger where every transaction balances ($\sum \text{debits} = \sum \text{credits}$).
- Support automated retries, smart routing across payment processors, and fallback during vendor outages.
- Ingest asynchronous webhooks for settlement status, chargebacks, disputes, and delayed bank confirmations.
- Calculate merchant payouts, fee deductions, and currency conversions with configurable settlement schedules.
- Provide real-time ledger balance queries and daily financial reconciliation reports.

## Non-functional requirements

- Payment processing is zero-loss ($RPO = 0$); an acknowledged payment cannot be lost or unrecorded.
- Idempotency guarantees prevent duplicate charges under client retries, network timeouts, and concurrent requests.
- Transactional consistency is strictly enforced across ledger balances; phantom money creation is mathematically impossible.
- Payment API availability meets 99.999% uptime with automated circuit breaking against degraded acquiring banks.
- Sensitive financial data adheres to PCI-DSS Level 1 compliance, tokenization, and strict data residency regulations.
- The platform can reconcile millions of daily transactions against bank settlement files within a 4-hour batch window.
- Audit logs capture every state change, operator intervention, and automated fee adjustment with non-repudiation.

## Discussion prompts

- How do you design an idempotency key abstraction across distributed gateways and asynchronous payment webhooks?
- What database model (Relational, Distributed SQL, Event Sourcing) best guarantees immutable double-entry ledger invariants?
- How do you handle "in-flight" payments when network connections drop between the gateway and payment processor?
- How does the system reconcile discrepancy reports when external bank settlement files do not match internal ledger state?
- How do you structure currency conversion and fee calculation without introducing floating-point rounding errors?
