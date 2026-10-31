---
title: Design Dream11 (Fantasy Sports & Real-Time Leaderboard)
slug: Dream11
abstract: Principal-level architecture drill for designing a high-concurrency fantasy sports platform with real-time match scoring, high-frequency leaderboard computation, and peak traffic burst handling.
---

## The prompt

Design the backend architecture for a large-scale fantasy sports platform (similar to Dream11). Users assemble virtual teams of real-world athletes within budget constraints, join multi-tier cash contests before match lock, and track their live ranks on dynamic leaderboards as real-time sporting events unfold. The platform experiences extreme traffic stampedes right before the match toss and must deliver real-time leaderboard updates to millions of concurrent viewers without degrading checkout or scoring accuracy.

## Functional requirements

- **Team Creation & Validation:** Users can build virtual teams subject to salary caps (100 credits), team composition rules, and captain/vice-captain point multipliers (2x/1.5x).
- **Contest Ingestion & Joining:** Support public mega-contests (millions of entries) and private leagues; atomically reserve entry slots and deduct entry fees from user wallets.
- **Lock-in at Toss:** Enforce strict lock-in timestamps (e.g., match toss / official start time); zero team edits or contest joins permitted past the cutoff deadline.
- **Live Event Ingestion:** Ingest real-time ball-by-ball sports feeds (runs, wickets, catches, boundaries) from external sports data providers (Opta, Sportradar).
- **Dynamic Fantasy Point Calculation:** Translate match events into fantasy points for every active player across all created teams.
- **Real-Time Leaderboard Ranking:** Maintain real-time rank positions and prize payout projections for every participant within their entered contests.
- **Prize Settlement & Wallet Credit:** Execute automated, audit-proof prize distribution based on final rank tables following official match closure.

## Non-functional requirements

- **Traffic Stampede Handling:** Ingestion handles **500,000 contest joins/second** during the critical 15-minute window preceding match start ($T - 15\text{ min}$).
- **Leaderboard Freshness & SLA:** Ranks update and broadcast to active mobile viewers within **$\le 2\text{ seconds}$** of a match event ingestion.
- **Strict Financial Consistency:** Wallet deductions and prize credits require strict ACID compliance; negative wallet balances and double-payouts are strictly prohibited.
- **High Availability:** 99.99% availability during peak live match periods; platform outages during prime tournaments (e.g., IPL) result in severe revenue loss.
- **Horizontal Scalability:** Support **10M concurrent connected users** streaming live leaderboard deltas via persistent WebSockets/SSE.
- **Data Durability:** Immutable record of user team composition locked at match start; zero tolerance for team tampering after the deadline.

## Discussion prompts

- How do you design an in-memory leaderboard capable of ranking 5 million contest entries with sub-second recalculation (Redis Sorted Sets vs. Partitioned Segment Trees)?
- How do you absorb the $T - 15\text{ min}$ traffic spike on wallet deductions and contest reservations without collapsing transactional relational databases?
- What stream processing architecture (e.g., Apache Flink vs. Kafka Streams) best computes stateful point rollups across millions of user teams per ball?
- How do you broadcast ranking updates to 10M concurrent users without creating a network fanout bottleneck on your edge gateways?
- How does the system handle sports feed corrections (e.g., a boundary overturned to a six 2 minutes later) and recalculate historical ranks?
- What distributed saga architecture ensures fault-tolerant prize distribution and tax deduction (TDS) without partial payout failures?