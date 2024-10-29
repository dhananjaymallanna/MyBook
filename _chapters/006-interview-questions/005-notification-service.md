---
title: High Level Design
slug: High Level Design
abstract: High Level Design 
---

# Notification Service

## Functional Requirements:
- Ability to Send Notifications: The first thing the system should be able to do is send notifications.
- Pluggable: It means we should be able to add the new features without making a lot of changes to the system.
- SaaS: It should be built as a SaaS product. This is because the main idea is we should know who’s sending what number of notifications, and we should be able to rate limit.


## Non-Functional Requirements:
- High Availability: The notification service system platform should always be available because it can be used by other companies, then downtime would cost us a lot.
- Many Clients: Moreover, it should be built in a way that it’s easy enough to add more clients.

![image-title-here](assets/gitbook/images/hld/notication.excalidraw.png){:class="img-responsive"}

# Job Scheduler

![image-title-here](assets/gitbook/images/hld/job.excalidraw.png){:class="img-responsive"}
