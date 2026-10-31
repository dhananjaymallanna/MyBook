---
title: "Design an Online Auction"
slug: practice-098-design-an-online-auction
abstract: "Transactions and commerce interview practice prompt."
---

## Additional prompt details

  - An auction is initiated by a seller and consists of a single product. It starts from 0$ and buyers can keep bidding(always at least current_winner + a      predefined increment) until it expires.
  - The seller can define a reserve price. Its presence is visible, but the actual amount is not. If defined and the final bid is less than the reserve        price, the auction will fail with a separate status.
  - Bidders might also make use of an autobidding system. Given a maximum value, each time the user is outbid, the system will automatically try to bid on      behalf of the user with the smallest value possible(the predefined increment above will be used to reach this value; calculation must strictly follow      it), up until the maximum value has been reached.
  - The autobidding algorithm must be efficient time complexity wise.
  - Once an auction completes, an external system will be notified of the result together with the winner(if any).

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
