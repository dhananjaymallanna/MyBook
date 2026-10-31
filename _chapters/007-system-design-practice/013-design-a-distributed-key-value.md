---
title: Design a Distributed Key-Value Store
slug: design-distributed-key-value-store
abstract: Principal-level prompt about building a masterless distributed storage engine with consistent hashing, tunable quorum consistency, and anti-entropy repair.
---

## Functional requirements (FR)

- _Add functional requirements here._

## Non-functional requirements (NFR)

- _Add non‑functional requirements here._


## The prompt

Design a distributed, leaderless key-value storage engine modeled on Amazon Dynamo and Apache Cassandra. The system provides high-throughput point lookups (`get` and `put`) across hundreds of commodity server nodes, handles hardware and network partition failures gracefully, and allows client applications to tune consistency levels according to their business needs.

## Functional requirements

- `put(key, value, [ttl])`: Store or update an arbitrary byte or string payload for a given key.
- `get(key)`: Retrieve the stored value associated with a given key.
- `delete(key)`: Mark a key as deleted using a tombstone.
- Support tunable read and write consistency levels (`ONE`, `QUORUM`, `ALL`).
- Support configurable data replication factors across independent availability zones and regions.
- Provide deterministic conflict resolution using Last-Write-Wins (LWW) or Vector Clocks.

## Non-functional requirements

- Scale to 10 Billion records and 100 TB of data across 100 nodes.
- Read throughput: 1,000,000 QPS with $p99 \le 5\text{ ms}$; Write throughput: 200,000 QPS with $p99 \le 3\text{ ms}$.
- High availability target: 99.999% uptime adhering to an AP (Availability & Partition Tolerance) architecture.
- Cluster supports elastic node addition and removal with minimal data migration and zero downtime.
- Background anti-entropy repair processes reconcile divergent replica data without taking nodes offline.
- Storage engine maximizes sequential disk I/O efficiency using Log-Structured Merge (LSM) trees and Bloom filters.
- Zero single point of failure (SPOF); all coordination is distributed via peer-to-peer gossip protocols.

## Discussion prompts

- How does consistent hashing with virtual nodes prevent hot-spot partitions and smooth out rebalancing?
- What are the write-path dynamics: Write-Ahead Log (WAL), MemTable, SSTables, and compaction?
- How do Bloom filters optimize read paths by eliminating unnecessary disk seeks on missing keys?
- What are the mathematical trade-offs of quorum configurations ($W + R > N$) vs. latency and availability?
- What is the difference between Hinted Handoff for transient node downtime and Merkle tree anti-entropy for permanent repair?
