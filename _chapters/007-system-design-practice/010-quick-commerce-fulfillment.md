---
title: Design Instamart (Quick Commerce 10-Minute Delivery)
slug: design-instamart-quick-commerce-fulfillment
abstract: Principal-level prompt about dark store inventory synchronization, real-time geo-fencing, picker route optimization, and dynamic delivery SLA tracking.
---

## The prompt

Design a quick commerce delivery platform (similar to Swiggy Instamart, Blinkit, or Zepto) that delivers groceries within a promised 10-to-15-minute SLA. The platform coordinates a distributed network of hundreds of micro-fulfillment centers ("dark stores"), tracks real-time inventory on physical shelves, coordinates in-store picker-packers, and dispatches delivery riders under tight time budgets.

## Functional requirements

- Map customer geolocation to the serving dark store pod using real-time polygon/hexagonal geo-fencing.
- Display catalog with real-time in-stock visibility; hide out-of-stock items before checkout.
- Temporarily lock/reserve items in the dark store when added to cart or checkout initiated.
- Coordinate dark store picking and packing workflows with optimized walking routes on picker handheld devices.
- Assign orders to the nearest delivery rider to ensure rider arrival coincides with bag packing completion.
- Provide live GPS tracking and dynamic ETA calculation to the customer throughout fulfillment.
- Support customer substitutions or refunds if physical shelf inventory is damaged during packing.

## Non-functional requirements

- Catalog and stock availability queries return within $p99 \le 50\text{ ms}$ under 50,000 browsing QPS.
- Inventory discrepancy between digital catalog and physical dark store shelves remains $< 0.1\%$.
- Order placement transaction completes within $p99 \le 300\text{ ms}$ with zero risk of phantom stock overselling.
- The platform functions reliably during dark store network disconnects, supporting offline local picking.
- Dynamic delivery SLA (e.g., "12 mins" vs. "25 mins") adapts in real time based on weather, packer queue, and rider density.
- Order processing scales across 1,000 dark stores and 2M daily orders with zero cross-store interference.
- Audit trails track every inventory movement, damage adjustment, and packer speed metric.

## Discussion prompts

- How do you model geo-fencing (Uber H3 hexagons vs. PostGIS spatial polygons) for high-frequency mobile GPS queries?
- How do you prevent out-of-stock surprises when multiple mobile users add the last item to their cart simultaneously?
- How do you optimize warehouse layout and picker route heuristics (Traveling Salesman) to pack bags in under 150 seconds?
- How does the system handle delivery surge pricing and throttle order intake when dark store packer queues overflow?
- What is the operational contract when a rider encounters a traffic disruption and the 10-minute SLA is breached?
