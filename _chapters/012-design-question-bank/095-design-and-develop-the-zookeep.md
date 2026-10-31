---
title: "Design and Develop the Zookeeper using Rocksdb and Google's BigTable"
slug: practice-095-design-and-develop-the-zookeeper-using-rocksdb-and-google-s-bigt
abstract: "Data systems and storage interview practice prompt."
---

## Functional requirements (FR)

- Create, update, retrieve, and remove the records or objects described in the prompt.
- Support the required query, index, eviction, replication, or recovery operations.
- Define behavior for concurrent reads and writes, invalid inputs, and expired or unavailable data.
- Expose operational state such as capacity, health, replication progress, or eviction decisions.

## Non-functional requirements (NFR)

- Specify consistency, durability, and recovery guarantees for each operation.
- Set latency, throughput, memory, and storage targets for expected and peak workloads.
- Handle hot keys, skew, resource exhaustion, and node failure without corrupting data.
- Define backup, migration, compatibility, and observability requirements.

## Principal-level discussion

- Define the scale, success measures, and operational ownership before committing to an architecture.
- Compare at least two viable approaches and explain the trade-offs, migration path, and failure behavior.
- Identify the riskiest assumptions and how you would validate them with data or a staged rollout.
