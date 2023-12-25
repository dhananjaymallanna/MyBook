---
title: Typical Pattern to keep in mind
slug: Typical Pattern to keep in mind
abstract: Typical Pattern to keep in mind
---
Application architecture patterns

*   Monolithic architecture
*   Microservice architecture

Decomposition

*   Decompose by business capability
*   Decompose by subdomain
*   Self-contained Service
*   Service per team

Refactoring to microservices

*   Strangler Application
*   Anti-corruption layer

Data management

*   Database per Service
*   Shared database
*   Saga
*   Command-side replica
*   API Composition
*   CQRS
*   Domain event
*   Event sourcing

Transactional messaging

*   Transactional outbox
*   Transaction log tailing
*   Polling publisher

Testing

*   Service Component Test
*   Consumer-driven contract test
*   Consumer-side contract test

Deployment patterns

*   Multiple service instances per host
*   Service instance per host
*   Service instance per VM
*   Service instance per Container
*   Serverless deployment
*   Service deployment platform

Cross cutting concerns

*   Microservice chassis
*   Service Template
*   Externalized configuration

Communication style

*   Remote Procedure Invocation
*   Messaging
*   Domain-specific protocol
*   Idempotent Consumer

External API

*   API gateway
*   Backend for front-end

Service discovery

*   Client-side discovery
*   Server-side discovery
*   Service registry
*   Self registration
*   3rd party registration

Reliability

*   Circuit Breaker

Security

*   Access Token

Observability

*   Log aggregation
*   Application metrics
*   Audit logging
*   Distributed tracing
*   Exception tracking
*   Health check API
*   Log deployments and changes

UI patterns

*   Server-side page fragment composition
*   Client-side UI composition


Sure, here are some brief notes on microservices design patterns along with appropriate Mermaid scripts to illustrate them:

Microservices Design Patterns

Gateway Aggregation Pattern:
   This pattern involves using an API gateway to aggregate various microservices into a single endpoint for clients.

```mermaid
      graph TD;
       A[Client] -->|Request| B(API Gateway);
       B -->|Aggregate| C(Microservice1);
       B -->|Aggregate| D(Microservice2);
       C -->|Response| B;
       D -->|Response| B;
       B -->|Response| A;
```

Saga Pattern:
   The saga pattern is used to manage distributed transactions across multiple microservices by orchestrating a sequence of local transactions.

```mermaid
      sequenceDiagram;
       participant OrderService;
       participant PaymentService;
       participant ShippingService
       OrderService->>PaymentService: Reserve funds
       PaymentService->>ShippingService: Process payment
       ShippingService-->> PaymentService: Confirm shipment
       PaymentService-->> OrderService: Update order status
```
Event Sourcing Pattern:
   In this pattern, changes to the state of a system are captured as a sequence of events.

```mermaid
      graph LR
       A[Command] -->|Generate Event| B(Event Store)
       B -->|Apply Event| C(Read Model)
```

CQRS Pattern (Command Query Responsibility Segregation):
   CQRS separates the command and query responsibilities, allowing for different models to be optimized for reads and writes.
```mermaid
      graph LR
       A[Command] -->|Update| B(Write Model)
       C[Query] -->|Retrieve| D(Read Model)
```

Service Registry Pattern:
   This pattern involves using a service registry to keep track of available services in a microservice architecture. It allows services to dynamically discover and communicate with each other.
```mermaid
      graph LR
       A[Service Registry] -->|Discover| B(Service1)
       A[Service Registry] -->|Discover| C(Service2)
       A[Service Registry] -->|Discover| D(Service3)
```

Circuit Breaker Pattern:
   The circuit breaker pattern is used to handle failures and prevent cascading failures in a microservice architecture. It provides a mechanism to detect and handle failures in remote service calls.
```mermaid
      graph LR
       A[Client] -->|Request| B(Circuit Breaker)
       B -->|Forward Request| C(Service)
       C -->|Response| B
       B -->|Response| A
```
Event-Driven Architecture:
   In this pattern, services communicate with each other through events. Events are used to trigger actions and propagate changes across the system. This pattern enables loose coupling and scalability.
```mermaid
      graph LR
       A[Service1] -->|Publish Event| B(Event Bus)
       B -->|Subscribe| C[Service2]
       B -->|Subscribe| D[Service3]
```
API Gateway Pattern:
   The API gateway pattern acts as a single entry point for clients to access multiple microservices. It provides a unified interface and handles tasks such as authentication, rate limiting, and request routing.
```mermaid
      graph TD
       A[Client] -->|Request| B(API Gateway)
       B -->|Forward Request| C(Service1)
       B -->|Forward Request| D(Service2)
       C -->|Response| B
       D -->|Response| B
       B -->|Response| A
```
Saga Pattern:
   The saga pattern is used to manage distributed transactions across multiple microservices. It orchestrates a sequence of local transactions and ensures consistency in the overall transaction.
```mermaid
      sequenceDiagram
       participant Service1
       participant Service2
       participant Service3
       Service1->>Service2: Step 1
       Service2->>Service3: Step 2
       Service3-->> Service2: Step 3
       Service2-->> Service1: Step 4
```
Database per Service Pattern:
   In this pattern, each microservice has its own dedicated database. This allows services to have independent data models and enables better scalability and autonomy.
```mermaid
      graph LR
       A[Service1] -->|Database1| B
       C[Service2] -->|Database2| D
       E[Service3] -->|Database3| F
```
Command Query Responsibility Segregation (CQRS) Pattern:
   CQRS separates the read and write operations in a microservice architecture. It allows for different models to be optimized for reads and writes, improving performance and scalability.
```mermaid
      graph LR
       A[Command] -->|Update| B(Write Model)
       C[Query] -->|Retrieve| D(Read Model)
```


Distributed Tracing:
   Distributed tracing is a pattern that allows you to trace requests as they flow through a distributed system. It helps in understanding the performance and behavior of individual microservices. 
```mermaid
      graph LR
       A[Client] -->|Request| B(Microservice1)
       B -->|Request| C(Microservice2)
       C -->|Request| D(Microservice3)
       D -->|Response| C
       C -->|Response| B
       B -->|Response| A
```
Health Check API:
   The health check API pattern involves implementing an API endpoint that provides information about the health of a microservice. It helps in monitoring the availability and status of individual microservices. 
```mermaid
      graph LR
       A[Client] -->|Health Check Request| B(Microservice)
       B -->|Health Check Response| A
```
Log Aggregation:
   Log aggregation is a pattern that involves collecting and centralizing logs from multiple microservices. It helps in troubleshooting and analyzing the behavior of the system as a whole. 
```mermaid
      graph LR
       A[Microservice1] -->|Log| B(Log Aggregator)
       C[Microservice2] -->|Log| B
       D[Microservice3] -->|Log| B
```
Audit Logging:
   Audit logging is a pattern that involves capturing and storing logs for auditing purposes. It helps in tracking and monitoring the activities and changes within a microservice architecture. 
```mermaid
      graph LR
       A[Microservice] -->|Audit Log| B(Audit Log Storage)
```