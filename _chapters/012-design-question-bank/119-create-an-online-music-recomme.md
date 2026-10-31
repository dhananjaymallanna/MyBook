---
title: "Create an online music recommendation system which suggests songs according to user taste"
slug: practice-119-create-an-online-music-recommendation-system-which-suggests-song
abstract: "Search, analytics, and intelligence interview practice prompt."
---

## Additional prompt details

   - Application has two major things :
         - The songs, which are cataloged in the app’s data store. Songs can be described by attributes such as genre, tempo, singer.
         - The people : Each person has a playlist of songs that they can choose to play from.

          - Design a system that recommends a set of songs from our music library to the user based on his preferences (matching genre / singer/ tempo)             taking into account his current playlist.
          - Pick a song based on the following order:
          - One which matches with maximum matching attributes.
          - When only one attribute is matching, pick one in the following order : genre > singer > tempo.
          - To decide priority between two genres\singer\tempo, consider the number of songs in each category in the user's playlist to decide which               song gets more priority. One with a higher number of songs gets high priority. If the number of songs are the same, show in any order.
          -

## Functional requirements (FR)

- Ingest or maintain the source data required for the requested search, ranking, analytics, or alert behavior.
- Let authorized users query results using the filters, time ranges, or preferences in scope.
- Refresh derived results as source data changes and expose freshness or confidence where relevant.
- Provide controls for subscriptions, thresholds, or saved views where requested.

## Non-functional requirements (NFR)

- Set measurable freshness, query-latency, and throughput objectives.
- Define correctness bounds for aggregation, ranking, deduplication, and late-arriving data.
- Protect user and event data and enforce tenant access boundaries.
- Make data lag, query failures, alert delivery, and cost visible to operators.

## Principal-level discussion

- Define the scale, success measures, and operational ownership before committing to an architecture.
- Compare at least two viable approaches and explain the trade-offs, migration path, and failure behavior.
- Identify the riskiest assumptions and how you would validate them with data or a staged rollout.
