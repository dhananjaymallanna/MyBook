---
title: Coupang Staff & Principal Engineering Interview Set
slug: Coupang  Questions
abstract: Production design drills and problem-solving references from Coupang senior interview loops, covering real-time stock watchlists, movie ticketing concurrency, and rate-limiting gateways.
---

## Functional requirements (FR)

- _Add functional requirements here._

## Non-functional requirements (NFR)

- _Add non‑functional requirements here._


## 1. System Design Drill: Real-Time Multi-Exchange Stock Watchlist

### The prompt

Design a real-time stock watchlist and market data platform for a trading system (similar to Robinhood, TradingView, or Zerodha). A user can create multiple customized watchlists, where each watchlist tracks hundreds of equities across global exchanges (NYSE, NASDAQ, LSE, NSE). The system must broadcast real-time price ticks and volume updates to millions of active screens simultaneously.

### Functional requirements

- **Watchlist Management:** Users can create, update, reorder, and delete up to 25 custom watchlists per account.
- **Cross-Exchange Support:** A single watchlist can contain stocks listed across different international exchanges with differing market hours and currencies.
- **Real-Time Price Streaming:** Deliver live price ticks (bid, ask, last traded price, daily % change) to connected client devices.
- **Price Alerts & Triggers:** Users can set conditional price alert thresholds (e.g., "Notify me when AAPL crosses $220.00").
- **Historical Charting Data:** Fetch historical candle intervals (1m, 5m, 1h, 1D) for any stock in the active watchlist view.

### Non-functional requirements

- **Latency Budget:** Ticker tick-to-screen broadcast latency must be $p99 \le 50\text{ ms}$.
- **Throughput & Scale:** Ingest 500,000 market feed updates/second during market open; fan out to 2M concurrent active WebSocket connections.
- **Availability:** 99.999% uptime during official trading hours; dropped feeds can cause financial liability.
- **Connection Optimization:** Group and multiplex market subscriptions so that multiple users watching the same stock share upstream exchange feeds (zero duplicate exchange connections).

### Discussion prompts

- How do you design connection multiplexing and market data fanout trees (Pub/Sub clusters vs. shared memory IPC)?
- What wire protocol (Binary WebSockets, Protobuf, gRPC streaming) best minimizes mobile network bandwidth?
- How do you handle cold-start reconnect storms when 500,000 mobile apps reconnect simultaneously after an exchange halt?

---

## 2. Low-Level Design Drill: High-Concurrency Movie Ticketing System

### The prompt

Design a high-concurrency seat reservation engine for a cinema booking platform (similar to BookMyShow or Fandango). When a blockbuster movie opens, thousands of users compete for the same premium seats. The system must coordinate seat locks, temporary reservation holds, and payment webhooks without double-booking or leaving orphan locked seats.

### Functional requirements

- Display real-time seating layout and availability (`AVAILABLE`, `LOCKED`, `BOOKED`).
- Atomically lock selected seats for a 10-minute payment completion window.
- Release locked seats immediately back to the seat pool if the user cancels or payment times out.
- Finalize booking and mark seats as permanently booked upon successful payment authorization.

### Non-functional requirements

- Absolute zero double-booking tolerance (strict linearizable seat reservation).
- Seat lock evaluation latency $p99 \le 50\text{ ms}$ under 20,000 concurrent reservation attempts.
- Automated cleanup of expired locks within $\le 1\text{ second}$ of expiration timestamp.

### Discussion prompts

- Distributed locking with Redis Redlock vs. Optimistic Concurrency Control (OCC) with database row versioning (`WHERE version = ?`).
- How to structure reservation expiry cleanup using Redis TTLs vs. delayed execution queues.

---

## 3. Algorithm & Code Solutions

### Problem 1: Discontinuous Pattern Matching

Given two strings `str` and `pattern`, find the number of discontinuous matches of `pattern` in `str` where no matched characters are adjacent in `str`.

```java
public class DiscontinuousPatternMatch {

    private int countMatches(String str, String pattern, int strIndex, int patIndex, Integer[][] memo) {
        if (patIndex == pattern.length()) {
            return 1;
        }
        if (strIndex >= str.length()) {
            return 0;
        }
        if (memo[strIndex][patIndex] != null) {
            return memo[strIndex][patIndex];
        }

        int matches = 0;
        for (int i = strIndex; i < str.length(); i++) {
            if (str.charAt(i) == pattern.charAt(patIndex)) {
                // Advance in pattern and skip at least 1 character in str to ensure discontinuity
                matches += countMatches(str, pattern, i + 2, patIndex + 1, memo);
            }
        }

        memo[strIndex][patIndex] = matches;
        return matches;
    }

    public int findDiscontinuousMatches(String str, String pattern) {
        Integer[][] memo = new Integer[str.length()][pattern.length()];
        return countMatches(str, pattern, 0, 0, memo);
    }

    public static void main(String[] args) {
        DiscontinuousPatternMatch dpm = new DiscontinuousPatternMatch();
        System.out.println("Matches ('catapult', 'cat'): " + dpm.findDiscontinuousMatches("catapult", "cat")); // 1
        System.out.println("Matches ('catatapult', 'cat'): " + dpm.findDiscontinuousMatches("catatapult", "cat")); // 2
    }
}
```

---

### Problem 2: Multi-Window Throttling Gateway

Non-critical requests are evaluated across multiple sliding windows simultaneously:
- At most 3 transactions per 1 second.
- At most 20 transactions per 10 seconds.
- At most 60 transactions per 60 seconds.

```java
public class ThrottlingGateway {
    public int countDroppedRequests(int n, int[] requestTime) {
        int dropped = 0;
        for (int i = 0; i < n; i++) {
            if (i > 2 && requestTime[i] == requestTime[i - 3]) {
                dropped++;
            } else if (i > 19 && requestTime[i] - requestTime[i - 20] < 10) {
                dropped++;
            } else if (i > 59 && requestTime[i] - requestTime[i - 60] < 60) {
                dropped++;
            }
        }
        return dropped;
    }
}
```

---

## 4. Alert System Architecture

![Alert System Architecture](assets/gitbook/images/one.drawio.png){:class="img-responsive"}
