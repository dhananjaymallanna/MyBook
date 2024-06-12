---
title: Important Questions
slug: Important Questions
abstract: Important Questions
---
# Q & A

## Question
- How to do handle the transcation across the different Microservices? What are the ways and what is the best practice ?

## Answer

Handling transactions across microservices can be tricky because traditional database transactions (ACID) are difficult to achieve across multiple services. Here are some common approaches and best practices:

1. Two-Phase Commit (2PC):

This is a traditional approach where a coordinator service manages the transaction flow.<br>
It involves a "prepare" phase where participants (microservices) confirm readiness, and a "commit" or "rollback" phase based on the outcome.<br>
While it guarantees ACID properties, 2PC can introduce complexity and become a single point of failure.<br>

2. Event Sourcing and Sagas:

This approach breaks down the transaction into a sequence of independent local transactions within each microservice. <br>
Events are published after each local transaction to trigger the next step in the saga (series of local transactions) in another service. <br>
If a failure occurs, compensating transactions can be implemented to undo changes. <br>
This approach is flexible and scalable but requires careful design and handling of eventual consistency (data eventually becomes consistent across services).<br>

3. API Choreography:

Services communicate directly with each other using APIs and messages. <br>
Each service is responsible for its own data consistency. <br>
Similar to event sourcing, eventual consistency is achieved. <br>
This approach is lightweight and promotes loose coupling but requires proper error handling and compensation strategies. <br>


** Best Practices: **

**Identify Transaction Boundaries:** Not all interactions require strong ACID transactions. Analyze your use cases to identify where eventual consistency is sufficient.
Focus on Data Integrity: Design your data model to minimize inconsistencies between services.<br>
**Compensating Transactions:** Implement mechanisms to undo partial changes in case of failures.<br>
**Messaging and Queues:** Leverage asynchronous messaging to decouple services and improve fault tolerance.<br>
**Monitoring and Observability:** Monitor transactions across services to identify and address inconsistencies.
Choosing the best approach depends on your specific needs and the level of consistency required for your transactions.  Consider factors like complexity, scalability, and fault tolerance when making your decision. <br> 

- compensating transaction vs event driven architecture (What is the drawback when we use only componsentate?)

https://learn.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction

- Distributed transcation across the microservice, how to implement?
    - 2pc and saga explain both.

https://blog.bitsrc.io/distributed-transactions-in-microservices-d07aba281f90


- How to maintain the data inside the Spring Data or JPA? after Versioning , it has be integer and annototation.
    https://denuwanhimangahettiarachchi.medium.com/maintain-the-data-versioning-info-with-spring-data-envers-42b6dfc19e27

- How does the autowire (Injection) works in the spring?
    https://www.baeldung.com/spring-autowire#:~:text=Enabling%20%40Autowired%20Annotations,is%20called%20Spring%20bean%20autowiring.

- Livecycle of a componenet? How the componenets starts? what are the different scopes can a component have?

https://docs.spring.io/spring-framework/reference/core/beans/factory-scopes.html

https://medium.com/@TheTechDude/spring-bean-lifecycle-full-guide-f865966e89ce



- JWT token? Encryption/ Decryption

- How to create a single ton class?
- Disadvantage of UID? Time based UID heared about?

https://www.baeldung.com/java-generating-time-based-uuids#:~:text=A%20time%2Dbased%20UUID%2C%20also,multiple%20UUIDs%20are%20generated%20simultaneously.

- Best practices to follow exception menthods?

https://howtodoinjava.com/best-practices/java-exception-handling-best-practices/

- Types of Exception in Java? Does it have any impact on the performance for the applications and how to handle exception in Java?

    https://www.baeldung.com/java-exceptions-performance

    https://www.geeksforgeeks.org/exceptions-in-java/


- JVM - Java Virtual Machine - How does the Architecture works?
- Log 4J and Log factory - how log 4j is different from the other logers.

    https://stackify.com/compare-java-logging-frameworks/

- How to create your own Array list? Would like to hear like, all the function like get, insert, remove
- Give a huge file with lot of number/Integer. Have to find the top 10 frequently number/text ? in map file.
- Consitent hashing?
- DB Connection Pooling , How do you do the connection pooling? in Java/Golang - How we can tune it? properties of the same?

    https://www.baeldung.com/spring-boot-tomcat-connection-pool

    https://naveen-metta.medium.com/mastering-connection-pooling-in-spring-boot-a-comprehensive-guide-deb29f69a7e3

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