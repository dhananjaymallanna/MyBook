---
title: Design a Proximity Search & Nearby Places Platform
slug: design-proximity-search-nearby-places
abstract: Principal-level prompt about spatial indexing, boundary queries, and high-frequency vehicle coordinate ingestion at global scale.
---

## Functional requirements (FR)

- _Add functional requirements here._

## Non-functional requirements (NFR)

- _Add non‑functional requirements here._


## The prompt

Design a geospatial proximity search platform (similar to Yelp, Google Maps, or Uber Driver Matching). The system allows mobile clients to search for nearby static points of interest (restaurants, gas stations, stores) or dynamic moving assets (available ride-share drivers) within a specified radius, supporting complex attribute filters and continuous location streams.

## Functional requirements

- Query places or moving entities within a geographic radius $R$ of latitude/longitude coordinates $(\text{lat}, \text{lng})$.
- Support filtering by categories, business operating hours, ratings, and custom attributes.
- Allow business owners to register, update, and manage location metadata and hours.
- Ingest high-frequency location updates from moving vehicles (e.g., driver coordinates broadcast every 4 seconds).
- Rank search results by a composite score of distance, rating, business relevance, and promotional weighting.
- Provide cursor-based pagination for radius search results across high-density metropolitan areas.

## Non-functional requirements

- Proximity search queries execute with ultra-low latency ($p99 \le 40\text{ ms}$) across 100,000 search QPS.
- Location ingestion handles 500,000 writes/second from moving vehicles without degrading search latency.
- High availability target: 99.99% for search and discovery APIs.
- Spatial indexing gracefully accommodates extreme density differences (Manhattan vs. rural highways).
- Static business updates propagate globally within 1 minute; dynamic driver positions refresh within 3 seconds.
- Storage scales across 100M global places with multi-region geo-replication.
- Network bandwidth is minimized via binary serialization protocols (Protobuf) for mobile updates.

## Discussion prompts

- What are the architectural trade-offs between Geohash (Base32), QuadTrees, and Google S2 Hilbert curve projections?
- How do you handle boundary edge cases where nearest places lie in an adjacent grid cell across a coordinate boundary?
- Why should the write-heavy moving vehicle stream be decoupled from the read-heavy static POI index?
- How do you prevent spatial hotspots from overloading a single database partition in dense urban centers?
- How do you design efficient caching strategies for radius queries when mobile users constantly change coordinates?
