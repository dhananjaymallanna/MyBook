---
title: "You are required to implement an in-memory cache module/library which you will embed in your application to improve the application performance, by holding heavily accessed (read/written) application specific objects. To start, we would begin with following minimal requirements"
slug: practice-138-you-are-required-to-implement-an-in-memory-cache-module-library
abstract: "Data systems and storage interview practice prompt."
---

## Additional prompt details

   - Your cache module should be generic, re-usable and easy to integrate across various modules within your production/organization.

   - The cache will be bounded by a fixed capacity (number of items) for holding the objects, which will be mentioned during early initialization of the p        program.

   - Upon hitting the capacity, the cache module can invoke one of various cache eviction strategies to make room for newer objects. You are required to          incorporate cache eviction in your code to handle aforementioned condition.

   - You could choose to implement various cache eviction strategies such as 'Least recently used', 'Least frequently used', 'time based expiration'et.al

   - In one of our unique use cases, we would like to change the eviction policy of the cache during runtime and the cache should start evicting keys based on the new eviction policy set.

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
