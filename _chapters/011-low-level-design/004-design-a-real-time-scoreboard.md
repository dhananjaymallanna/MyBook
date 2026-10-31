---
title: Design a Real-Time Scoreboard & Summary Board
slug: Summary Board
abstract: Low-level and system design drill for designing an ultra-low latency real-time summary board and ranking engine for competitive programming and gaming tournaments.
---

## Functional requirements (FR)

- _Add functional requirements here._

## Non-functional requirements (NFR)

- _Add non‑functional requirements here._


## The prompt

Design a real-time scoreboard and summary board system for live competitive programming contests (similar to LeetCode, Codeforces) or esports matches. As participants submit solutions, scores update dynamically, ranks shift in real time, and the summary board presents paginated rank views, problem penalty breakups, and historical submission timelines.

## Functional requirements

- **Score & Penalty Ingestion:** Ingest verdict events (`ACCEPTED`, `WRONG_ANSWER`, `TIME_LIMIT_EXCEEDED`) and update participant points and time penalty scores.
- **Dynamic Rank Calculation:** Compute participant rank ordering based on:
  1. Total points solved (descending).
  2. Total penalty time (ascending).
  3. Timestamp of last accepted submission (tie-breaker).
- **Paginated Scoreboard View:** Support cursor-based pagination over thousands of participants with rank lookups (e.g., "Find my rank").
- **Contest Freezing:** Support contest scoreboard freeze during the final 60 minutes to prevent strategic gaming, while continuing private score evaluation.
- **Problem Statistics:** Provide per-problem metrics: total submissions, acceptance rate, and first-to-solve ("first blood") badges.

## Non-functional requirements

- **Latency Budget:** Rank lookups and leaderboard page views execute in $p99 \le 30\text{ ms}$.
- **Throughput:** Ingest 10,000 submission evaluations/second during contest ending surges without ranking drift.
- **High Availability:** 99.99% availability during live active contests.
- **Consistency:** Linearizable ordering of rank updates; a participant's score must reflect their latest accepted submission immediately upon refresh.

## Low-Level Object-Oriented Model

```java
// Core domain interfaces and models
public enum Verdict {
    ACCEPTED, WRONG_ANSWER, TIME_LIMIT_EXCEEDED, RUNTIME_ERROR
}

public class Submission {
    private final String submissionId;
    private final String participantId;
    private final String problemId;
    private final Verdict verdict;
    private final long timestampSeconds;
    // Constructor, getters...
}

public class ProblemStats {
    private final String problemId;
    private int score;
    private int penaltyMinutes;
    private boolean solved;
    // Getters and update logic...
}

public class ParticipantSummary implements Comparable<ParticipantSummary> {
    private final String participantId;
    private int totalScore;
    private int totalPenalty;
    private long lastSolvedTimestamp;

    @Override
    public int compareTo(ParticipantSummary other) {
        if (this.totalScore != other.totalScore) {
            return Integer.compare(other.totalScore, this.totalScore); // Higher score first
        }
        if (this.totalPenalty != other.totalPenalty) {
            return Integer.compare(this.totalPenalty, other.totalPenalty); // Lower penalty first
        }
        return Long.compare(this.lastSolvedTimestamp, other.lastSolvedTimestamp); // Earlier timestamp first
    }
}
```

## Discussion prompts

- How do you implement real-time rank computation at scale: Redis Sorted Sets (`ZADD`, `ZREVRANK`) vs. in-memory Binary Indexed Trees / Skip Lists?
- How do you handle leaderboard tie-breaking when two participants achieve identical scores and penalties?
- How does the system implement "scoreboard freezing" where participants see only their own updates while the public board freezes?
- What caching and broadcast strategy minimizes database read pressure when 50,000 participants refresh the top 100 leaderboard simultaneously?
