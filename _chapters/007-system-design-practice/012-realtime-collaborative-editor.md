---
title: Design a Real-Time Collaborative Document Platform
slug: design-realtime-collaborative-editor
abstract: Principal-level prompt about conflict-free concurrent editing, operational transformation vs CRDTs, presence broadcasting, and snapshot compaction.
---

## The prompt

Design a real-time collaborative workspace platform (similar to Google Docs, Figma Multiplayer, or Notion). Multiple distributed users can concurrently open, edit, format, and comment on the same rich-text document or whiteboard canvas. The system must synchronize changes instantaneously, maintain causal ordering, and resolve concurrent conflicting keystrokes without data loss.

## Functional requirements

- Concurrent character-level insertion, deletion, and formatting synchronization across multiple active typers.
- Guarantee that all collaborators' document views converge to the exact same content when edits cease.
- Stream real-time collaborator presence, active selection highlights, and cursor positions.
- Record an immutable revision history changelog, enabling point-in-time snapshot rollback and version comparison.
- Support offline editing and automatically reconcile local uncommitted operations upon network reconnection.
- Enforce granular document access permissions (Viewer, Commenter, Editor, Owner) in real time.

## Non-functional requirements

- Local keystrokes render instantaneously ($0\text{ ms}$ latency via optimistic local updates).
- Cross-client keystroke propagation latency remains $p95 \le 100\text{ ms}$ globally over persistent WebSockets.
- Hot documents support up to 100 concurrent typers and 1,000 passive viewers without degraded broadcast latency.
- Zero data loss guarantee ($RPO = 0$): acknowledged operations cannot be lost during server crashes.
- Document state converges deterministically without requiring client-side page refreshes.
- Wire protocol payload sizes are minimized ($\le 50\text{ bytes}$ per operation) using binary serialization (CBOR/Protobuf).
- Document session authority handles server crashes seamlessly via stateful failover and snapshot replay.

## Discussion prompts

- What are the architectural trade-offs between Operational Transformation (OT) and CRDTs (e.g., Yjs, Automerge)?
- How do you route collaborators to a single document session authority without introducing distributed locking overhead?
- How do you prevent broadcast fanout storms when hundreds of viewers observe a live, rapidly typed document?
- What is the compaction and snapshotting strategy to prevent replaying millions of historical operations on document load?
- How does the system handle split-brain network partitions where two disconnected clusters of users edit the same document?
