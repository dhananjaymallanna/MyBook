---
title: "Design a calendar Application (similar like Google Calendar)"
slug: practice-025-design-a-calendar-application-similar-like-google-calendar
abstract: "Scheduling and resource allocation interview practice prompt."
---

## Additional prompt details

   -Ability to create, update, delete an Event
     - An event would typically consist of {start, end, location, Owner, user-list, title}.
     - Events can either be like meetings(with a dedicated location and appropriate guest-list) or as well be like holidays, birthdays, reminders etc.
     - An event once created, can be either accepted or rejected by the constituent users - if neither it should be in neutral state.
  - Get Calendar for a user Ui
  - Get Event details.
  - For a given set of users[U1, U2,....Un] identity a common free slot of time.

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
