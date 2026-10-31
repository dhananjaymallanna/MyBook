---
title: Design Instamart (Quick Commerce 10-Minute Delivery)
slug: design-instamart-quick-commerce
abstract: Architecture drill for designing an ultra-fast grocery delivery platform (Instamart / Blinkit / Zepto) with dark store inventory, geo-fenced order routing, real-time picker-packer orchestration, and dynamic delivery SLA tracking.
---

> **Target Level:** Principal / Staff Software Engineer (L6+)  
> **Archetype:** Hyper-Local Logistics & Real-Time Physical Supply Chain  
> **Reference Systems:** Swiggy Instamart, Blinkit, Zepto, DoorDash DashMart

---

## 1. Problem Statement & Scope

Quick Commerce platforms deliver grocery orders within 10 to 15 minutes by leveraging a distributed network of micro-fulfillment centers ("dark stores") located within 2-3 km of residential densities. The system must coordinate real-time dark store inventory, instantaneous cart reservations, picker-packer hardware queues, and dynamic delivery fleet dispatching under tight SLA deadlines.

---

## 2. Functional Requirements (FR)

* **FR-1 (Hyper-Local Catalog & Stock Resolution):** Based on the customer's real-time GPS location, resolve the serving dark store pod and display only in-stock inventory with sub-second accuracy.
* **FR-2 (Cart Reservation & Lock):** When a user adds an item to cart or initiates checkout, temporarily hold inventory at that specific dark store pod to prevent out-of-stock disappointments.
* **FR-3 (Order Placement & Payment Orchestration):** Atomic order placement, payment capture, and dispatch to dark store warehouse management systems (WMS).
* **FR-4 (Dark Store Picker/Packer Orchestration):** Provide prioritized batch picking routes on picker handheld devices (HHT) to complete item picking and bag bagging in $< 150\text{ seconds}$.
* **FR-5 (Rider Matching & Dynamic SLA Tracking):** Auto-assign the nearest available delivery rider (arriving within 2 minutes of packing) and stream real-time GPS tracking to the customer.

---

## 3. Non-Functional Requirements (NFR)

* **NFR-1 (Scale & Throughput):**
  * Support **1,000 Dark Stores** across 20 metro cities.
  * Orders per day: **2M orders/day** (~25 orders/sec sustained, peak at **200 orders/sec** during dinner rush).
  * Catalog browsing traffic: **50,000 QPS** across mobile apps.
* **NFR-2 (Strict Latency Budgets):**
  * Geo-location to Dark Store mapping: $p99 \le 10\text{ ms}$.
  * In-stock Catalog retrieval: $p99 \le 50\text{ ms}$.
  * Order placement transaction: $p99 \le 300\text{ ms}$.
* **NFR-3 (High Availability & Fault Resilience):**
  * Ordering platform availability: **99.99%**.
  * Dark store offline mode: If a dark store loses internet connectivity, automatically reroute traffic or mark store as temporarily paused to prevent unfulfilled orders.
* **NFR-4 (Strict Inventory Accuracy):**
  * Discrepancy between physical shelf inventory and digital catalog must be $< 0.1\%$ to avoid missing items in packed bags.
* **NFR-5 (Predictive SLA Calculation):**
  * Dynamic SLA promise (e.g., "12 mins" vs. "18 mins") calculated based on weather, active packer queue depth, and rider availability.

---

## 4. Back-of-the-Envelope Estimation

* **Dark Store Density:** 1,000 stores $\times$ 4,000 active SKUs per store = **4 Million store-item inventory pairs**.
* **Memory Footprint for Inventory:** $4\text{M records} \times 128\text{ bytes} \approx 512\text{ MB}$. Entire national inventory state fits easily into a single Redis cluster with multi-replica read availability.
* **Picker Packing SLA Breakdown (10-Minute Budget):**
  * Order Placement & Payment: 30 seconds
  * Dark Store Picking & Bagging: 150 seconds (2.5 mins)
  * Rider Handoff: 60 seconds (1 min)
  * Transit (2 km @ 25 km/h): 300 seconds (5 mins)
  * Doorstep Delivery Buffer: 60 seconds (1 min)
  * **Total Time:** 600 seconds (10 minutes).

---

## 5. Architectural Blueprint

```
                      +-----------------------------+
                      |     Customer Mobile App     |
                      +--------------+--------------+
                                     | Lat, Lng
                                     v
                      +-----------------------------+
                      |   API Gateway / Edge Proxy  |
                      +--------------+--------------+
                                     |
               +---------------------+---------------------+
               | Catalog & Geo Path                        | Order Placement
               v                                           v
+-----------------------------+             +-----------------------------+
|    Geo-Fencing Resolver     |             |   Order Lifecycle Engine    |
|   (Uber H3 Hexagon Index)   |             | (Distributed Saga Manager)  |
+--------------+--------------+             +--------------+--------------+
               | Store ID                                  |
               v                                           |
+-----------------------------+                            |
| Local Dark Store Inventory  |                            |
|  (Redis Shard per Store)    |<--- Atomically Deduct Stock|
+--------------+--------------+                            |
               |                                           |
               | Cache Reads                               | Notify Dark Store
               v                                           v
+-----------------------------+             +-----------------------------+
| Catalog Read Replica DB     |             |  Warehouse Management (WMS) |
| (PostgreSQL / Read Pool)    |             |  (Picker HHT Tablet Queue)  |
+-----------------------------+             +--------------+--------------+
                                                           |
                                                           v
                                            +-----------------------------+
                                            | Rider Dispatch & Tracking   |
                                            | (Kafka Geolocation Stream)  |
                                            +-----------------------------+
```

---

## 6. Principal Engineering Deep-Dive Discussions

1. **Geo-Fencing with Uber H3 Hexagonal Hierarchies:**
   * Why polygon containment checks (`ST_Contains` in PostGIS) are too slow for 50,000 QPS mobile location updates.
   * Solution: Index dark store delivery service radii into Uber H3 Hexagonal cell sets (Level 8 / 9 resolution). Converting user $(\text{lat}, \text{lng})$ to an H3 index is a pure mathematical $O(1)$ bit-shift operation, instantly resolving the dark store ID.
2. **Preventing Out-of-Stock (OOS) During Bag Picking:**
   * Phantom Stock issue: App shows 1 milk carton remaining, but it is damaged on the physical shelf.
   * Safety stock buffer algorithms: Artificially masking last $N$ items ($S_{visible} = \max(0, S_{physical} - 2)$) during high traffic.
   * In-store substitution protocol: Immediate real-time WebSocket push to customer: "Brand A out of stock, approve Brand B within 45 seconds or refund".
3. **Optimizing Dark Store Layout & Traveling Salesman Picking Routes:**
   * Structuring dark store layout into fast-moving zones (front shelves) and slow-moving zones (back shelves).
   * Computing multi-item pick paths via greedy nearest-neighbor TSP heuristics on warehouse grid coordinates to minimize picker walking distance.
4. **Dynamic SLA Engine & Surge Throttling:**
   * When dark store backlog exceeds 15 unpicked orders or rain slows rider transit speeds, dynamically expanding promised delivery SLA from 10 minutes to 25 minutes or enforcing dynamic surge delivery fees to throttle incoming demand.
