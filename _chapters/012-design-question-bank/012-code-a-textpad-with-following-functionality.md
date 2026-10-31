---
title: "code a TextPad with following functionality"
slug: practice-012-code-a-textpad-with-following-functionality
abstract: "Application and platform design interview practice prompt."
---

## Additional prompt details

  - display() – to display the entire content
  - display(n, m) – to display from line n to m
  - insert(n, text) – to insert text at line n
  - delete(n) – delete line n
  - delete(n, m) – delete from line n to m
  - copy(n, m) – copy contents from line n to m to clipboard
  - paste(n) – paste contents from clipboard to line n
  - undo() – undo last command
  - redo() – redo last command

   expected the textpad to be in memory(not as file) and also  expected to handle error gracefully and the program to be menu driven.

## Functional requirements (FR)

- Identify the primary actors and support their core create, read, update, and lifecycle actions.
- Enforce the domain rules and constraints stated in the original prompt.
- Provide appropriate search, status, history, or reporting capabilities for the use case.
- Give operators a way to inspect failures and safely perform permitted administrative actions.

## Non-functional requirements (NFR)

- Define availability, latency, throughput, and growth targets from the intended workload.
- Preserve data correctness during concurrent operations, retries, and dependency failures.
- Protect user and business data with authentication, authorization, and auditable access.
- Plan for observability, recovery, deployment safety, and cost as usage grows.

## Principal-level discussion

- Define the scale, success measures, and operational ownership before committing to an architecture.
- Compare at least two viable approaches and explain the trade-offs, migration path, and failure behavior.
- Identify the riskiest assumptions and how you would validate them with data or a staged rollout.
