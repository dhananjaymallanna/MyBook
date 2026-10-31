---
title: "Design System where User can create alerts on StockOptions"
slug: practice-135-design-system-where-user-can-create-alerts-on-stockoptions
abstract: "Transactions and commerce interview practice prompt."
---

## Additional prompt details

   - Raise an Alert When "APPL" stock transaction happens for more than $100.
   - Raise an Alert When "GOOGL" stock transaction happens for less than $40.
   - ou have one black-box Api say market-api

   - you can call for particular stockoption and data will keep on flowing for that stockoption in form of say json , and will keep on flowing ; like below json

				{
					string company;// Apple
					double price; // 134.22
					int nb_shares;//100
					long timestamp;//24542212
				},...

## Functional requirements (FR)

- Create and manage the primary transaction or listing lifecycle from initiation through completion or cancellation.
- Support lookup of current status, transaction history, and the parties or items involved.
- Apply domain rules for pricing, eligibility, inventory, settlement, or auction outcomes as stated in the prompt.
- Provide auditable records for user actions and externally visible state changes.

## Non-functional requirements (NFR)

- Prevent duplicate or conflicting transactions under retries and concurrent requests; define the required consistency boundary.
- Protect account, payment, and transaction data with authentication, authorization, encryption, and auditable access.
- Set explicit latency and availability targets for read and write paths, including degraded operation during dependency failures.
- Define reconciliation, recovery, and retention objectives for financial or order records.

## Principal-level discussion

- Define the scale, success measures, and operational ownership before committing to an architecture.
- Compare at least two viable approaches and explain the trade-offs, migration path, and failure behavior.
- Identify the riskiest assumptions and how you would validate them with data or a staged rollout.
