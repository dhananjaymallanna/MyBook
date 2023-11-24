---
title: Typical Pattern to keep in mind
slug: Typical Pattern to keep in mind
abstract: Typical Pattern to keep in mind
---
Application architecture patterns

*   [Monolithic architecture](/patterns/monolithic.html)
*   [Microservice architecture](/patterns/microservices.html)

Decomposition

*   [Decompose by business capability](/patterns/decomposition/decompose-by-business-capability.html)
*   [Decompose by subdomain](/patterns/decomposition/decompose-by-subdomain.html)
*   [Self-contained Service](/patterns/decomposition/self-contained-service.html)new
*   [Service per team](/patterns/decomposition/service-per-team.html)new

Refactoring to microservicesnew

*   [Strangler Application](/patterns/refactoring/strangler-application.html)
*   [Anti-corruption layer](/patterns/refactoring/anti-corruption-layer.html)

Data management

*   [Database per Service](/patterns/data/database-per-service.html)
*   [Shared database](/patterns/data/shared-database.html)
*   [Saga](/patterns/data/saga.html)
*   [Command-side replica](/patterns/data/command-side-replica.html)
*   [API Composition](/patterns/data/api-composition.html)
*   [CQRS](/patterns/data/cqrs.html)
*   [Domain event](/patterns/data/domain-event.html)
*   [Event sourcing](/patterns/data/event-sourcing.html)

Transactional messaging

*   [Transactional outbox](/patterns/data/transactional-outbox.html)
*   [Transaction log tailing](/patterns/data/transaction-log-tailing.html)
*   [Polling publisher](/patterns/data/polling-publisher.html)

Testing

*   [Service Component Test](/patterns/testing/service-component-test.html)
*   [Consumer-driven contract test](/patterns/testing/service-integration-contract-test.html)
*   [Consumer-side contract test](/patterns/testing/consumer-side-contract-test.html)

Deployment patterns

*   [Multiple service instances per host](/patterns/deployment/multiple-services-per-host.html)
*   [Service instance per host](/patterns/deployment/single-service-per-host.html)
*   [Service instance per VM](/patterns/deployment/service-per-vm.html)
*   [Service instance per Container](/patterns/deployment/service-per-container.html)
*   [Serverless deployment](/patterns/deployment/serverless-deployment.html)
*   [Service deployment platform](/patterns/deployment/service-deployment-platform.html)

Cross cutting concerns

*   [Microservice chassis](/patterns/microservice-chassis.html)
*   [Service Template](/patterns/service-template.html)
*   [Externalized configuration](/patterns/externalized-configuration.html)

Communication style

*   [Remote Procedure Invocation](/patterns/communication-style/rpi.html)
*   [Messaging](/patterns/communication-style/messaging.html)
*   [Domain-specific protocol](/patterns/communication-style/domain-specific.html)
*   [Idempotent Consumer](/patterns/communication-style/idempotent-consumer.html)

External API

*   [API gateway](/patterns/apigateway.html)
*   [Backend for front-end](/patterns/apigateway.html)

Service discovery

*   [Client-side discovery](/patterns/client-side-discovery.html)
*   [Server-side discovery](/patterns/server-side-discovery.html)
*   [Service registry](/patterns/service-registry.html)
*   [Self registration](/patterns/self-registration.html)
*   [3rd party registration](/patterns/3rd-party-registration.html)

Reliability

*   [Circuit Breaker](/patterns/reliability/circuit-breaker.html)

Security

*   [Access Token](/patterns/security/access-token.html)

Observability

*   [Log aggregation](/patterns/observability/application-logging.html)
*   [Application metrics](/patterns/observability/application-metrics.html)
*   [Audit logging](/patterns/observability/audit-logging.html)
*   [Distributed tracing](/patterns/observability/distributed-tracing.html)
*   [Exception tracking](/patterns/observability/exception-tracking.html)
*   [Health check API](/patterns/observability/health-check-api.html)
*   [Log deployments and changes](/patterns/observability/log-deployments-and-changes.html)

UI patterns

*   [Server-side page fragment composition](/patterns/ui/server-side-page-fragment-composition.html)
*   [Client-side UI composition](/patterns/ui/client-side-ui-composition.html)