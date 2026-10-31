---
title: Design a Flash Sale & Inventory Reservation System
slug: design-flash-sale-inventory-reservation
abstract: Principal-level prompt about handling extreme hot-spot inventory contention without overselling, deadlocks, or database exhaustion.
---

## Functional requirements (FR)

- _Add functional requirements here._

## Non-functional requirements (NFR)

- _Add non‑functional requirements here._


## The prompt

Design an e-commerce inventory reservation platform for high-demand flash sales and ticket drops. Tens of thousands of users compete for a limited inventory (e.g., 5,000 units) within seconds of sale opening. The platform must prevent overselling, maintain responsive checkout latencies, and safely release abandoned carts back into available stock.

## Functional requirements

- Reserve items for authenticated users during checkout with a time-bounded hold (e.g., 10 minutes).
- Atomically decrement available stock upon successful reservation and prevent overselling.
- Automatically release reserved items back to available inventory if checkout expires or payment fails.
- Provide real-time stock availability status (`IN_STOCK`, `RESERVED`, `SOLD_OUT`) to browsing clients.
- Enforce strict per-user and per-payment-method quantity limits to prevent bot hoarding.
- Support administrative inventory adjustments, emergency sale pausing, and audit trails.
- Confirm order and record an immutable financial ledger entry upon payment capture.

## Non-functional requirements

- The reservation endpoint maintains low latency ($p99 \le 50\text{ ms}$) under peak burst loads (100,000 attempts/sec).
- Inventory deduction requires strict serializability / linearizability; eventual consistency or negative stock is prohibited.
- When stock reaches zero, subsequent write requests are short-circuited at the edge to protect backend systems.
- Cart expiration is deterministic and reliable; system crashes do not cause inventory to remain permanently locked.
- Double-entry accounting ensures total physical stock equals available + reserved + confirmed units at all times.
- Regional network partitions do not cause divergent inventory states across data centers.
- The system resists scripted bot traffic and distributed denial-of-inventory attacks.

## Discussion prompts

- Where is inventory state mastered: in an in-memory datastore (Redis Lua), relational database, or specialized ledger?
- How do you partition hot-key inventory across multiple memory shards without distributed locking?
- What are the trade-offs between delayed queues, database polling, and key expiration for abandoned cart rollbacks?
- How do you protect payment gateways from downstream saturation when thousands of reservations succeed simultaneously?
- How should the user experience degrade when physical inventory is sold out but carts are still in the payment window?
