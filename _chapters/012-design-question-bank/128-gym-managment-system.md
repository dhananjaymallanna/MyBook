---
title: "Gym Managment System"
slug: practice-128-gym-managment-system
abstract: "Scheduling and resource allocation interview practice prompt."
---

## Additional prompt details

  - Design a backend system for a new enterprise application that Flipkart is launching, FlipFit.
    Flipkart is partnering up with gyms across Bangalore to enter into the fitness space. For the Beta launch the requirements are as follows:
      - There are only 2 centers for now - Koramangala and Bellandur. We might expand to multiple others if we get traction.
        Each center has 6 slots. 3 in the morning of an hour each from 6am to 9am and similarly 3 in the evening from 6pm to 9pm. The centers are open.         7 days a week.
      - Each slot at a center can have only 2 possible workout variations for now - Weights and Cardio.
      - The number of people that can attend each workout at each slot for a given station is fixed. Assume default slot capacity as 3(for every               workout type across centers).
      - Same User cannot book at the same center at the same slot and the same workout type twice.
      - User can perform the following operations:
      - Register onto the platform
      - View the workouts for a particular day
      - Book a workout for a user if seats are available in that time slot at that center
      - View his/her plan based on day as input
      - For simplicity’s sake you can assume that the workout info will be entered by the Admin only once.

      - Bonus : Build an Admin view as well to modify the workout info at a center/slot level.

## Functional requirements (FR)

- Create, view, change, and cancel bookings or allocations for the resources described in the prompt.
- Search availability by the relevant time, location, capacity, or participant constraints.
- Notify affected users when a booking, assignment, or availability state changes.
- Provide history and current status for users, operators, and resource owners.

## Non-functional requirements (NFR)

- Prevent double booking and define how conflicting requests are serialized or rejected.
- Keep availability queries responsive during peak demand and define freshness expectations.
- Handle retries, time-zone boundaries, cancellation races, and partial notification failures safely.
- Protect personal and location data and make allocation decisions observable and auditable.

## Principal-level discussion

- Define the scale, success measures, and operational ownership before committing to an architecture.
- Compare at least two viable approaches and explain the trade-offs, migration path, and failure behavior.
- Identify the riskiest assumptions and how you would validate them with data or a staged rollout.
