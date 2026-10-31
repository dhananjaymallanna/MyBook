---
title: "Design and Implement a Simple Java GC (Java 7+)"
slug: practice-018-design-and-implement-a-simple-java-gc-java-7
abstract: "Data systems and storage interview practice prompt."
---

## Additional prompt details

  - A heap which represents JVM when a Java program starts.
  - At least three parts in the heap that represent Eden Space, Tenured Space and Perm Space.
  - Different rounds of garbage collecting in these above three spaces (checking all objects to see if they have any live references at all, if not, kill them, reclaim the allocated memory, otherwise, move them to later spaces..)

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
