---
title: Design a Video Ingestion, Transcoding & Streaming Platform
slug: design-video-ingestion-transcoding-streaming
abstract: Principal-level prompt about parallel chunked video transcoding, adaptive bitrate streaming (HLS/DASH), and multi-tier CDN edge caching.
---

## The prompt

Design a global video ingestion and streaming platform (similar to YouTube or Netflix). Content creators upload high-resolution video files (4K/1080p, multiple gigabytes in size). The system must reliably ingest, validate, transcode into multiple resolutions and adaptive bitrate streams (HLS/DASH), and distribute video chunks across global CDNs for smooth, buffer-free playback across varied client bandwidth conditions.

## Functional requirements

- Chunked, resumable multipart video uploads for large source video files.
- Automated media pipeline: audio extraction, thumbnail generation, content moderation, and audio-video validation.
- Transcode master videos into multiple resolutions (1080p, 720p, 480p, 360p) and codecs (H.264, H.265/HEVC, AV1).
- Package video into adaptive bitrate streaming formats (HLS with `.m3u8` playlists and MPEG-DASH with `.mpd` manifests).
- Stream video chunks to global viewers with automatic bitrate switching based on real-time client bandwidth.
- Support digital rights management (DRM) encryption, signed playback tokens, and geo-restriction policies.
- Ingest real-time viewer playback metrics: start time, buffering ratio, rebuffer events, and completion rates.

## Non-functional requirements

- Ingestion supports uploads up to 50 GB per file with resilient resume across network interruptions.
- Transcoding turnaround time: a 10-minute 1080p video must complete initial processing and become playable within 3 minutes.
- Video playback starts instantly with low buffer ratios: $p95 \text{ Time to First Frame (TTFF)} \le 1.5\text{ seconds}$.
- Storage and CDN caching achieve high efficiency: popular video chunks achieve $\ge 95\%$ CDN edge cache hit ratios.
- High availability: 99.99% uptime for video streaming delivery.
- Transcoding worker fleet auto-scales dynamically with spot/preemptible instances to minimize compute costs.
- System accommodates petabyte-scale storage growth and terabits/second of egress video bandwidth.

## Discussion prompts

- How do you partition and parallelize video transcoding (chunking at keyframe / GOP boundaries) across a worker fleet?
- What are the storage tiering strategies (Hot S3, Cold Glacier) for raw master videos vs. transcoded HLS chunks?
- How does Adaptive Bitrate (ABR) streaming dynamically switch resolutions during client network fluctuations?
- How do multi-tier CDN architectures (Edge Cache, Origin Shield, Transcoding Storage) prevent origin overload on viral videos?
- How do you design worker task leasing and checkpointing to handle spot instance preemption during a 30-minute transcoding job?
