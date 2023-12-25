---
title: DS Collection
slug: DS Collection
abstract: DS Collection
---

[<img src="https://img.youtube.com/vi/EEb6JP3NXBI/hqdefault.jpg" width="185" height="150"/>](https://www.youtube.com/embed/EEb6JP3NXBI)


+-----------------+                +------------------+
  | <link>Client</link>          |                | <link>OAuth2 Provider</link>  |
  | <link>Application</link>     |                |                  |
  +--------+--------+                +--------+---------+
           |                                 |
           | 1. Initiate Authorization Flow    |
           +-------------------------------->|
           |                                 |
           | 2. User Authorization            |
           |    (Grant/Deny Permission)       |
           +<--------------------------------+
           |                                 |
           | 3. Authorization Code            |
           |    (Redirect to Client)          |
           +-------------------------------->|
           |                                 |
           | 4. Token Exchange                |
           |    (Authorization Code)          |
           +<--------------------------------+
           |                                 |
           | 5. Access Token                 |
           |    (Authorized Requests)         |
           +-------------------------------->|

Certainly! Below is the Mermaid script for the textual representation of the OAuth2 flow diagram:

graph TD
    A[Client Application] -->|1. Initiate Authorization Flow| B[OAuth2 Provider]
    B -->|2. User Authorization (Grant/Deny Permission)| A
    B -->|3. Authorization Code (Redirect to Client)| A
    A -->|4. Token Exchange (Authorization Code)| B
    B -->|5. Access Token (Authorized Requests)| A

You can use this Mermaid script to render the OAuth2 flow diagram in your markdown file or any platform that supports Mermaid diagrams.
