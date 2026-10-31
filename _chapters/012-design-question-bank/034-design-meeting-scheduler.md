---
title: "Design Meeting Scheduler"
slug: practice-034-design-meeting-scheduler
abstract: "Scheduling and resource allocation interview practice prompt."
---

## Additional prompt details

    - Here there are n given meeting rooms. Book a meeting in any meeting room at given interval(starting time, end time). Also send notifications to all person who are invited for meeting.
    - You should use calender for tracking date and time. And also history of all the meetings which are booked and meeting room.
write an API for client who will give date and time and API should return meeting room with booked scheduled time. client should also query for history of last 20 booked meetings.
    - Is meeting room available? etc

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
