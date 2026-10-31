---
title: "Design library management system"
slug: practice-139-design-library-management-system
abstract: "Messaging and event delivery interview practice prompt."
---

## Additional prompt details

  - Any library member should be able to search books by their title, author, subject category as well by the publication date.

  - Each book will have a unique identification number and other details including a rack number which will help to physically locate the book.

  - There could be more than one copy of a book, and library members should be able to check-out and reserve any copy. We will call each copy of a book, a book item.

  - The system should be able to retrieve information like who took a particular book or what are the books checked-out by a specific library member.

  - There should be a maximum limit (5) on how many books a member can check-out.

  - There should be a maximum limit (10) on how many days a member can keep a book.

  - The system should be able to collect fines for books returned after the due date.

  - Members should be able to reserve books that are not currently available.

  - The system should be able to send notifications whenever the reserved books become available, as well as when the book is not returned within the due date.

  - Each book and member card will have a unique barcode. The system will be able to read barcodes from books and members’ library cards.

## Functional requirements (FR)

- Accept messages or events from authorized producers and route them to the intended recipients or subscribers.
- Support subscription, filtering, delivery status, and runtime changes to subscribers or destinations where required.
- Retry transient failures and expose failed, delayed, or dead-lettered work for inspection.
- Allow producers or consumers to identify and safely handle duplicate deliveries.

## Non-functional requirements (NFR)

- Specify delivery semantics, ordering scope, retention, and replay behavior.
- Meet explicit latency and throughput objectives while isolating noisy tenants or consumers.
- Protect message payloads and endpoint credentials; prevent unauthorized subscriptions and delivery.
- Remain observable during provider failures, backlogs, retry storms, and partial regional outages.

## Principal-level discussion

- Define the scale, success measures, and operational ownership before committing to an architecture.
- Compare at least two viable approaches and explain the trade-offs, migration path, and failure behavior.
- Identify the riskiest assumptions and how you would validate them with data or a staged rollout.
