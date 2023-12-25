---
title: DS Collection
slug: DS Collection
abstract: DS Collection
---

[<img src="https://img.youtube.com/vi/EEb6JP3NXBI/hqdefault.jpg" width="185" height="150"/>](https://www.youtube.com/embed/EEb6JP3NXBI)

OAuth2 

```mermaid
graph LR;
A[Client Application]-->|1. Initiate Authorization Flow| B[OAuth2 Provider];
    B-->|2. User Authorization $ Grant/Deny Permission $|A;
    B -->|3. Authorization Code $ Redirect to Client $ |A;
     A -->|4. Token Exchange $ Authorization Code $| B;
    B -->|5. Access Token $ Authorized Requests $| A;
```

