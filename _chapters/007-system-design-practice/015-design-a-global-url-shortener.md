---
title: Design a Global URL Shortener with Real-Time Analytics
slug: design-url-shortener-realtime-analytics
abstract: Principal-level prompt about sub-15ms edge redirects, collision-free distributed ID allocation, and streaming telemetry aggregation at scale.
---

## Functional requirements (FR)

- _Add functional requirements here._

## Non-functional requirements (NFR)

- _Add non‑functional requirements here._


## The prompt

Design a global URL shortening and link analytics platform (similar to Bitly or TinyURL). The service must generate short, tamper-resistant aliases for long URLs, execute HTTP 301/302 redirects with minimal latency across global edge caches, and stream rich telemetry (device, user-agent, referrer, geo-location, timestamps) into a real-time analytics engine.

## Functional requirements

- Shorten long URLs into unique, compact 7-character Base62 keys (e.g., `https://uncoding.in/s/7xK9q`).
- Support custom vanity aliases (e.g., `uncoding.in/s/system-design`) with collision detection.
- Execute HTTP redirects from short links to original destination targets.
- Support link expiration timestamps, deactivation controls, and administrative URL updates.
- Ingest and aggregate real-time click metrics: total clicks, unique visitors, geographic distribution, and referrers.
- Screen target destination URLs against malware and phishing blocklists before link creation.

## Non-functional requirements

- Redirection latency is ultra-fast: $p99 \le 15\text{ ms}$ globally using edge workers and distributed caching.
- System handles 10 Billion clicks/month ($\approx 25,000\text{ reads/sec}$ peak) with a 100:1 read-to-write ratio.
- High availability target: 99.999% uptime for the redirection path.
- Distributed unique ID generation guarantees zero collisions without requiring synchronous database checks.
- Analytics pipelines provide eventual consistency with dashboard metrics updating within $\le 5\text{ seconds}$ of click events.
- Telemetry emission operates asynchronously without introducing latency overhead to the user's redirect request.
- Storage scales across 100M new links created each month with multi-year data retention.

## Discussion prompts

- How do you design distributed unique ID allocation (Range Pre-Allocation vs. Snowflake vs. Hash Truncation) to avoid collisions?
- What are the trade-offs between HTTP 301 (Permanent Redirect) and HTTP 302/307 (Temporary Redirect) for analytics fidelity?
- How do you decouple click event logging from the user's critical redirect response path?
- What database architecture (Relational vs. Columnar OLAP like ClickHouse) best handles billions of time-series click events?
- How do you cache the top 20% most active URLs at the edge to absorb 80% of global traffic?
