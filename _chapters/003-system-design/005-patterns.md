---
title: Typical Pattern to keep in mind
slug: Typical Pattern to keep in mind
abstract: Typical Pattern to keep in mind
---

# Tabularised data

<table>
   <tr>
      <td>
         <p>Application architecture patterns</p>
         <ul>
            <li>Monolithic architecture</li>
            <li>Microservice architecture</li>
         </ul>
         <p>Decomposition</p>
         <ul>
            <li>Decompose by business capability</li>
            <li>Decompose by subdomain</li>
            <li>Self-contained Service</li>
            <li>Service per team</li>
         </ul>
         <p>Refactoring to microservices</p>
         <ul>
            <li>Strangler Application</li>
            <li>Anti-corruption layer</li>
         </ul>
         <p>Data management</p>
         <ul>
            <li>Database per Service</li>
            <li>Shared database</li>
            <li>Saga</li>
            <li>Command-side replica</li>
            <li>API Composition</li>
            <li>CQRS</li>
            <li>Domain event</li>
            <li>Event sourcing</li>
         </ul>
         <p>Transactional messaging</p>
         <ul>
            <li>Transactional outbox</li>
            <li>Transaction log tailing</li>
            <li>Polling publisher</li>
         </ul>
         <p>Testing</p>
         <ul>
            <li>Service Component Test</li>
            <li>Consumer-driven contract test</li>
            <li>Consumer-side contract test</li>
         </ul>
         <p>Deployment patterns</p>
         <ul>
            <li>Multiple service instances per host</li>
            <li>Service instance per host</li>
            <li>Service instance per VM</li>
            <li>Service instance per Container</li>
            <li>Serverless deployment</li>
            <li>Service deployment platform</li>
         </ul>
      </td>
      <td>
         <p>Cross cutting concerns</p>
         <ul>
            <li>Microservice chassis</li>
            <li>Service Template</li>
            <li>Externalized configuration</li>
         </ul>
         <p>Communication style</p>
         <ul>
            <li>Remote Procedure Invocation</li>
            <li>Messaging</li>
            <li>Domain-specific protocol</li>
            <li>Idempotent Consumer</li>
         </ul>
         <p>External API</p>
         <ul>
            <li>API gateway</li>
            <li>Backend for front-end</li>
         </ul>
         <p>Service discovery</p>
         <ul>
            <li>Client-side discovery</li>
            <li>Server-side discovery</li>
            <li>Service registry</li>
            <li>Self registration</li>
            <li>3rd party registration</li>
         </ul>
         <p>Reliability</p>
         <ul>
            <li>Circuit Breaker</li>
         </ul>
         <p>Security</p>
         <ul>
            <li>Access Token</li>
         </ul>
         <p>Observability</p>
         <ul>
            <li>Log aggregation</li>
            <li>Application metrics</li>
            <li>Audit logging</li>
            <li>Distributed tracing</li>
            <li>Exception tracking</li>
            <li>Health check API</li>
            <li>Log deployments and changes</li>
         </ul>
         <p>UI patterns</p>
         <ul>
            <li>Server-side page fragment composition</li>
            <li>Client-side UI composition</li>
         </ul>
      </td>
   </tr>
</table>

## Microservices Design Patterns

### Gateway Aggregation Pattern
   This pattern involves using an API gateway to aggregate various microservices into a single endpoint for clients.

```mermaid!
%%{init: {'theme':'forest',"messageAlign": "center","flowchart": { 'useMaxWidth':false,
"htmlLabels": true
}}}%%
      graph TD;
       A[Client] -->|Request| B(API Gateway);
       B -->|Aggregate| C(Microservice1);
       B -->|Aggregate| D(Microservice2);
       C -->|Response| B;
       D -->|Response| B;
       B -->|Response| A;
```

### Saga Pattern
   The saga pattern is used to manage distributed transactions across multiple microservices by orchestrating a sequence of local transactions.

```mermaid!
%%{init: {'theme':'forest',"messageAlign": "center","flowchart": { 'useMaxWidth':false,
"htmlLabels": true
}}}%%
      sequenceDiagram;
       participant OrderService;
       participant PaymentService;
       participant ShippingService
       OrderService->>PaymentService: Reserve funds
       PaymentService->>ShippingService: Process payment
       ShippingService-->> PaymentService: Confirm shipment
       PaymentService-->> OrderService: Update order status
```
### Event Sourcing Pattern
   In this pattern, changes to the state of a system are captured as a sequence of events.

```mermaid!
%%{init: {'theme':'forest',"messageAlign": "center","flowchart": { 'useMaxWidth':false,
"htmlLabels": true
}}}%%
      graph LR
       A[Command] -->|Generate Event| B(Event Store)
       B -->|Apply Event| C(Read Model)
```

### CQRS Pattern (Command Query Responsibility Segregation)
   CQRS separates the command and query responsibilities, allowing for different models to be optimized for reads and writes.

```mermaid!
%%{init: {'theme':'forest',"messageAlign": "center","flowchart": { 'useMaxWidth':false,
"htmlLabels": true
}}}%% 
      graph LR
       A[Command] -->|Update| B(Write Model)
       C[Query] -->|Retrieve| D(Read Model)
```

### Service Registry Pattern
   This pattern involves using a service registry to keep track of available services in a microservice architecture. It allows services to dynamically discover and communicate with each other.
```mermaid!
%%{init: {'theme':'forest',"messageAlign": "center","flowchart": { 'useMaxWidth':false,
"htmlLabels": true
}}}%%
      graph LR
       A[Service Registry] -->|Discover| B(Service1)
       A[Service Registry] -->|Discover| C(Service2)
       A[Service Registry] -->|Discover| D(Service3)
```

### Circuit Breaker Pattern
   The circuit breaker pattern is used to handle failures and prevent cascading failures in a microservice architecture. It provides a mechanism to detect and handle failures in remote service calls.
```mermaid!
%%{init: {'theme':'forest',"messageAlign": "center","flowchart": { 'useMaxWidth':false,
"htmlLabels": true
}}}%%
      graph LR
       A[Client] -->|Request| B(Circuit Breaker)
       B -->|Forward Request| C(Service)
       C -->|Response| B
       B -->|Response| A
```

### Event-Driven Architecture
   In this pattern, services communicate with each other through events. Events are used to trigger actions and propagate changes across the system. This pattern enables loose coupling and scalability.

```mermaid!
%%{init: {'theme':'forest',"messageAlign": "center","flowchart": { 'useMaxWidth':false,
"htmlLabels": true
}}}%%
      graph LR
       A[Service1] -->|Publish Event| B(Event Bus)
       B -->|Subscribe| C[Service2]
       B -->|Subscribe| D[Service3]
```

### Database per Service Pattern
   In this pattern, each microservice has its own dedicated database. This allows services to have independent data models and enables better scalability and autonomy.

```mermaid!
%%{init: {'theme':'forest',"messageAlign": "center","flowchart": { 'useMaxWidth':false,
"htmlLabels": true
}}}%%
      graph LR
       A[Service1] -->|Database1| B
       C[Service2] -->|Database2| D
       E[Service3] -->|Database3| F
```

### Distributed Tracing
   Distributed tracing is a pattern that allows you to trace requests as they flow through a distributed system. It helps in understanding the performance and behavior of individual microservices. 
```mermaid!
%%{init: {'theme':'forest',"messageAlign": "center","flowchart": { 'useMaxWidth':false,
"htmlLabels": true
}}}%%
      graph LR
       A[Client] -->|Request| B(Microservice1)
       B -->|Request| C(Microservice2)
       C -->|Request| D(Microservice3)
       D -->|Response| C
       C -->|Response| B
       B -->|Response| A
```

### Health Check API
   The health check API pattern involves implementing an API endpoint that provides information about the health of a microservice. It helps in monitoring the availability and status of individual microservices. 
```mermaid!
%%{init: {'theme':'forest',"messageAlign": "center","flowchart": { 'useMaxWidth':false,
"htmlLabels": true
}}}%%
      graph LR
       A[Client] -->|Health Check Request| B(Microservice)
       B -->|Health Check Response| A
```

### Log Aggregation
   Log aggregation is a pattern that involves collecting and centralizing logs from multiple microservices. It helps in troubleshooting and analyzing the behavior of the system as a whole. 
```mermaid!
%%{init: {'theme':'forest',"messageAlign": "center","flowchart": { 'useMaxWidth':false,
"htmlLabels": true
}}}%%
      graph LR
       A[Microservice1] -->|Log| B(Log Aggregator)
       C[Microservice2] -->|Log| B
       D[Microservice3] -->|Log| B
```

### Audit Logging
   Audit logging is a pattern that involves capturing and storing logs for auditing purposes. It helps in tracking and monitoring the activities and changes within a microservice architecture. 
```mermaid!
%%{init: {'theme':'forest',"messageAlign": "center","flowchart": { 'useMaxWidth':false,
"htmlLabels": true
}}}%%
      graph LR
       A[Microservice] -->|Audit Log| B(Audit Log Storage)
```