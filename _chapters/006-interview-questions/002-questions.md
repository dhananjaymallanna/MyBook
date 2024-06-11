---
title: Important Questions
slug: Important Questions
abstract: Important Questions
---
# Q & A


- How to do handle the transcation across the different Microservices? What are the ways and what is the best practice ?

## Answer

Handling transactions across microservices can be tricky because traditional database transactions (ACID) are difficult to achieve across multiple services. Here are some common approaches and best practices:

1. Two-Phase Commit (2PC):

This is a traditional approach where a coordinator service manages the transaction flow.
It involves a "prepare" phase where participants (microservices) confirm readiness, and a "commit" or "rollback" phase based on the outcome.
While it guarantees ACID properties, 2PC can introduce complexity and become a single point of failure.
2. Event Sourcing and Sagas:

This approach breaks down the transaction into a sequence of independent local transactions within each microservice.
Events are published after each local transaction to trigger the next step in the saga (series of local transactions) in another service.
If a failure occurs, compensating transactions can be implemented to undo changes.
This approach is flexible and scalable but requires careful design and handling of eventual consistency (data eventually becomes consistent across services).
3. API Choreography:

Services communicate directly with each other using APIs and messages.
Each service is responsible for its own data consistency.
Similar to event sourcing, eventual consistency is achieved.
This approach is lightweight and promotes loose coupling but requires proper error handling and compensation strategies.
Best Practices:

Identify Transaction Boundaries: Not all interactions require strong ACID transactions. Analyze your use cases to identify where eventual consistency is sufficient.
Focus on Data Integrity: Design your data model to minimize inconsistencies between services.
Compensating Transactions: Implement mechanisms to undo partial changes in case of failures.
Messaging and Queues: Leverage asynchronous messaging to decouple services and improve fault tolerance.
Monitoring and Observability: Monitor transactions across services to identify and address inconsistencies.
Choosing the best approach depends on your specific needs and the level of consistency required for your transactions.  Consider factors like complexity, scalability, and fault tolerance when making your decision.  

- compensating transaction vs event driven architecture (What is the drawback when we use only componsentate?)
- Distributed transcation across the microservice, how to implement?
- How to maintain the data inside the Spring Data or JPA? after Versioning , it has be integer and annototation.
- How does the autowire (Injection) works in the spring?
- Livecycle of a componenet? How the componenets starts? what are the different scopes can a component have?
- JWT token? Encryption/ Decryption
- How to create a single ton class?
- Disadvantage of UID? Time based UID heared about?
- Best practices to follow exception menthods?
- Types of Exception in Java? Does it have any impact on the performance for the applications and how to handle exception in Java?
- JVM - Java Virtual Machine - How does the Architecture works?
- Log 4J and Log factory - how log 4j is different from the other logers.
- How to create your own Array list? Would like to hear like, all the function like get, insert, remove
- Give a huge file with lot of number/Integer. Have to find the top 10 frequently number/text ? in map file.
- Consitent hashing?
- DB Connection Pooling , How do you do the connection pooling? in Java/Golang - How we can tune it? properties of the same?
- Dependency Injection in Golang? and what is the difference on the same in Java.
- Spring boot - Attributes/Properties name to do the connection pooling?
- Partition in Kafka
- State list beans/ Stateful beans (How will you create it) - Spring boot
- Design for - Elevator System / Hint - Need to create a - Unique ID Generator
- ODBC (Open Database Connectivity) / ORM (Object Relational Mapping) - Cassandra
- Database connection in Golang. - If worked on Golang
- Design for Government Book library - Central system/ Can take in Kormangala and will return in Indra nagar/RT nagar etc...
- Design for Automating the entire process in Airport for an customer without human involvment - Eg - Singapore Airport 
- Hash Map VS Hash Table
- Collections - hash map and hash table difference?
- Vector and Array list
- Garbage collectors 
- Service discovery how does it work in Microservices? 
- Path parameters in Spring Boot?
- how to join two table in Spring Data?