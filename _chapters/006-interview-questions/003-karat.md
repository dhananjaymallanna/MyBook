---
title: Karat Questions
slug: Karat Questions
abstract: Karat Questions
---

# KARAT ROUND

## Questions
---------

**Google document sharing application has a round robin scheme of serving by the load balancer. Do you foresee any issue? If so how do you overcome it?**

 Using a round-robin load balancing scheme for a Google document sharing application can lead to some potential issues, especially considering the dynamic nature of user interactions and varying server loads. Here are some challenges and solutions:

1. **Uneven Load Distribution**:
   - **Issue**: Round-robin assigns requests in a circular order without considering the current load on each server, potentially leading to uneven load distribution.
   - **Solution**: Implement a weighted round-robin approach that allocates requests based on the server's current load and capacity. Monitoring server performance metrics can help adjust weights dynamically.

2. **Session Persistence**:
   - **Issue**: Round-robin does not account for sessions, potentially leading to a user being directed to different servers during a session, which can cause state inconsistencies.
   - **Solution**: Use session affinity (sticky sessions) to ensure that a user’s requests are consistently routed to the same server throughout their session, maintaining state continuity.

3. **Resource Utilization**:
   - **Issue**: Servers with varying resource capabilities might be under or over-utilized, impacting performance.
   - **Solution**: Implement a load-aware balancing strategy that considers server health checks and resource availability, redistributing loads as needed.

4. **Latency Variations**:
   - **Issue**: Some servers may be geographically farther from the user, leading to latency variations.
   - **Solution**: Use Geo-DNS or latency-based routing to direct users to the nearest or fastest server, minimizing latency.

5. **Failure Handling**:
   - **Issue**: If a server goes down, round-robin may still attempt to route requests to it.
   - **Solution**: Incorporate health checks and failover mechanisms to remove or replace unhealthy servers from the rotation promptly.

By considering these factors and implementing the suggested solutions, you can enhance the efficiency and reliability of a load-balanced Google document sharing application. If you want to explore any of these solutions further, let me know!

----------------

**Table User with userInfo and another table User_Relationship with columns as User1 ( Indexed ) and User2 ( Indexed ) and relationship ( with values as Friend ). The User_Relationship could be bi-directional so i.e., if A is friend of B then USER_Relationship table can have it as A, B, Friend as a row or B,A, Friend.** 
  
**How do you find a good scalable solution to find count of friends for a given user**

To find a scalable solution for counting friends for a given user in a bi-directional relationship table, consider these strategies:

Database Indexing: Ensure that both User1 and User2 in the User_Relationship table are indexed. This will speed up the query performance significantly by allowing the database to quickly locate rows where the user appears.

Consistent Storage: Store each relationship consistently, either always as (User1, User2) or by maintaining both directions. This will simplify queries and ensure data consistency.

SQL Query: Use a SQL query that accounts for the bi-directionality of the relationships. Here's an example:

SELECT COUNT(*) FROM User_Relationship WHERE (User1 - :givenUserId OR User2 - :givenUserId) AND relationship - 'Friend';
This query checks both columns to account for the possibility of the user being either User1 or User2.

Caching: Implement caching for frequently requested users. Cache the friend count and update it whenever there is a change in the user's relationships, reducing database load.

Denormalized Data: Maintain a denormalized count of friends in the User table itself, which gets updated automatically whenever a friendship is added or removed. This provides instant access to the count but requires careful update logic to keep counts accurate.

Partitioning: For very large datasets, consider partitioning the User_Relationship table by user IDs. This can improve query performance and make the system more manageable.

By combining these techniques, you can create a scalable and efficient solution for counting friends, even as the number of users and relationships grows. If you have more specific requirements or need further assistance, feel free to ask!

-------------------
**There are notifications sent out for documents upon they are signed by the users. The documents are in millions and we have the document ids in the table. However there are failed notifications and due to system issue they are not even captured on the logs.**
**Only the sent notifications are logged**
 
**How do you scale the solution to identify all the failed notifications.**

To effectively identify and handle failed notifications in a system where only sent notifications are logged, consider implementing the following scalable solutions:

Implement an acknowledgment mechanism where the receiving system confirms receipt of each notification. If an acknowledgment isn't received within a specific timeframe, flag the notification as potentially failed.

Introduce a retry mechanism for notifications that don't receive an acknowledgment. This ensures that transient issues don't result in permanent notification failures.

Maintain a dedicated "notifications status" table that tracks the status of each notification (e.g., pending, sent, failed). Update this status based on acknowledgments and retries.

Use a message queue to manage notifications. This allows you to track which messages have been processed and which haven't, offering better control over retries and error handling.

Regularly audit the "notifications status" table against the list of document IDs to identify any discrepancies where notifications were not successfully acknowledged or flagged.

Implement monitoring and alerting systems to detect anomalies in notification volumes or patterns, which could indicate underlying issues.

Consider logging all notification attempts, including failures, in a separate log or database table, allowing for post-mortem analysis and system improvements.

Enhance system observability by implementing distributed tracing to capture the flow and status of notifications across different system components.

**Alternative Approach**
- Retrieve the sorted list of all the notifications (by id) from the DB into a file "allNotifs.log" (A)
- Collect all the logs from all the systems that have sent out the notificationsMerge the logs into a file called "sentNotifs.log" (B), sort them by idI
- terate over the 2 log files, and keep adding to the failed notifications, whenever A[i].id < B[j].id and increment i. If equal, increment both i, j

------------

**There is a graph of node capabilities across various nodes. How will have to identify the throughput of the entire system through the nodes.**

To evaluate the throughput of a system based on the capabilities of various nodes in a graph, you can approach this problem by following these steps:

Model the Graph: Represent the system as a directed graph where each node signifies a processing unit and edges denote communication pathways.

Node Capabilities: Assign a throughput value to each node, indicating its capacity to process data, and an edge weight to represent communication delays or bandwidth limits.

Identify Bottlenecks: Analyze the graph to identify nodes or edges that could act as bottlenecks. Bottlenecks are nodes or connections with the lowest throughput, which could limit the overall system performance.

Maximum Flow Algorithm: Use algorithms like the Ford-Fulkerson method or Edmonds-Karp algorithm to compute the maximum flow from the source node to the sink node in the graph. This will give you the maximum throughput of the system.

Capacity Utilization: Calculate the utilization of each node and edge to ensure none are operating beyond their capacity, which can degrade performance.

Optimize: Consider restructuring the graph by redistributing loads, increasing node capacities, or adding parallel paths to improve throughput.
Simulate: Run simulations with various input loads to observe how the system behaves and validate theoretical throughput calculations.

---------

**In what cases do you choose strong consistency vs eventual consistency and there are 3 scenarios**
**a. In case of banking application where there are deposits and payments**
**b. Metadata retrieval for media streaming**
**c. Data analytics for # of viewers etc.,**


a. Banking Application (Deposits and Payments):

Choose Strong Consistency.
Rationale: Financial transactions require accuracy and reliability. It's crucial that deposits and payments are immediately reflected in account balances to prevent issues like overdrafts or double spending. Strong consistency ensures that all users see the same data at the same time, maintaining data integrity.

b. Metadata Retrieval for Media Streaming:

Choose Eventual Consistency.
Rationale: Metadata, such as movie descriptions or thumbnails, can tolerate slight delays in propagation. Eventual consistency allows the system to provide high availability and responsiveness, which is important for user experience in media streaming services.

c. Data Analytics for Number of Viewers:

Choose Eventual Consistency.
Rationale: Analytics often aggregate data over time, and slight delays in consistency are acceptable. Eventual consistency allows the system to handle large volumes of data efficiently without impacting the timeliness of insights derived from the analytics.

----------

**Our application provides interesting analysis around stats during sporting events. This app uses third party API to fetch real time and historical data/stats. Recently, this third party API has gone fragile. How would you upgrade your system to deal with this issue?**

To enhance your application's resilience against a fragile third-party API, consider implementing these strategies:

**Caching Layer:** Implement a caching mechanism for real-time and historical data to reduce dependency on the API. This ensures continuity of service even if the API becomes temporarily unavailable.
Rate Limiting and Throttling: Use rate limiting to manage the frequency of API calls, reducing the risk of being throttled by the third-party service.
**Retries and Circuit Breaker Patterns:** Implement a retry logic with exponential backoff for transient failures. Use a circuit breaker pattern to prevent repeated calls to an unstable API, allowing it time to recover.
**Fallback Data Source:** Establish fallback mechanisms using alternative data sources or historical data for critical stats, ensuring the app remains functional.
**Monitoring and Alerts:** Set up monitoring to detect API failures promptly and trigger alerts for quick intervention and troubleshooting.
**Load Balancing and Redundancy:** If possible, use multiple third-party API providers to distribute load and provide redundancy in case one API fails.
**Data Validation and Integrity Checks:** Implement checks to ensure the data received from the API is accurate and consistent, mitigating the impact of erroneous data.

-------

**Shown a graph with Cpu and ram utilisation and derive whats wrong with it**

To diagnose issues using a graph that shows CPU and RAM utilization, consider the following analysis steps:
#### CPU Utilization:

**High CPU Utilization:** Consistently high CPU usage may indicate the system is overburdened, possibly due to inefficient code, insufficient CPU resources, or an unoptimized workload distribution. Consider identifying and optimizing the processes consuming the most CPU.
**Low CPU Utilization:** If CPU usage is unusually low, it might suggest underutilization of resources, possibly due to bottlenecks elsewhere, such as in I/O operations or network latency.
**Spikes in CPU Usage:** Look for patterns or specific times when spikes occur, which could correlate with particular tasks or processes. Investigating these spikes can help identify issues with specific applications or tasks.

#### RAM Utilization:
**High RAM Utilization:** Persistent high RAM usage may suggest memory leaks, inefficient memory use, or inadequate memory allocation for running applications. Investigating which processes are consuming the most memory can help pinpoint issues.
**Low RAM Utilization:** While generally less concerning, consistently low RAM usage might indicate that the system is over-provisioned, leading to unnecessary costs.
**Fluctuations in RAM Usage:** Sudden changes in RAM usage may indicate problems with applications that allocate and release memory inefficiently. Monitoring these changes can help identify areas for optimization.
#### Correlation Between CPU and RAM
**High CPU and RAM Usage Together:** Indicates that applications are resource-intensive, potentially leading to performance issues. Optimizing code and resource allocation can help alleviate this.
**High CPU and Low RAM Usage (or vice versa):** Suggests a mismatch in resource allocation. For example, a CPU-bound process with low RAM usage might benefit from optimization, whereas a memory-bound process with low CPU usage could indicate inefficient memory management.

By analyzing these patterns and correlations, you can identify potential issues and areas for optimization. If you have specific data or need further assistance, feel free to ask!

-----------

**Scnearios when threads get exhausted in a process?**


Threads can become exhausted in a process under several scenarios, leading to performance degradation or application failure:

**Unbounded Thread Creation:** Creating threads without limits can exhaust system resources, leading to thread contention and increased context switching, which degrades performance.
**Resource Locking:** Threads waiting indefinitely for locked resources (e.g., database connections or file handles) can result in thread exhaustion as more threads compete for the same resources.
**Blocking Operations:** Threads blocked on I/O operations, network calls, or other long-duration tasks can become exhausted if the system cannot efficiently manage or release these resources.
**Deadlocks:** When two or more threads are waiting on each other to release resources, it can lead to deadlock situations where threads are indefinitely stuck, consuming available threads.
**Infinite Loops:** If threads enter an infinite loop due to faulty logic, they can continuously consume CPU resources, leading to thread exhaustion.
**Insufficient Pooling:** In thread pool implementations, if the pool size is too small to handle the workload, threads can become exhausted due to queued tasks waiting for available threads.
**Memory Leaks:** Threads holding onto memory resources can cause leaks, leading to exhaustion as memory becomes unavailable for new threads.

To mitigate these issues, consider implementing best practices such as setting thread pool limits, using non-blocking I/O operations, avoiding deadlocks through proper resource management, and monitoring thread usage and performance.

-------

**What would you to improve your system to process 1000 requested per second where it process 1 request for second now.**

To scale a system from processing 1 request per second to 1000 requests per second, consider implementing these strategies:

Optimize Code and Algorithms: Review and optimize your application's code and algorithms to ensure they run efficiently, minimizing processing time for each request.
Horizontal Scaling: Add more servers or instances to distribute the load. Use a load balancer to evenly distribute incoming requests across these servers, improving overall throughput.
Caching: Implement caching strategies to store frequently accessed data, reducing the need to recompute or fetch data for each request. This can significantly decrease response times.
Database Optimization: Optimize database queries and indexes for faster data retrieval. Consider using read replicas or partitioning to handle increased data load.
Asynchronous Processing: Shift non-critical tasks to asynchronous processing, allowing the system to handle more concurrent requests without waiting for these tasks to complete.
Microservices Architecture: Decompose the application into smaller, independent services that can be scaled individually, enhancing flexibility and scalability.
Use Content Delivery Networks (CDN): For serving static content, use CDNs to offload traffic from your servers and reduce latency for global users.
Optimize Network and I/O Operations: Reduce latency by optimizing network configurations, using faster protocols, and minimizing data transfer sizes.
Monitoring and Auto-Scaling: Implement monitoring tools to track system performance and set up auto-scaling to dynamically adjust resources based on demand.
By combining these strategies, you can effectively scale your system to handle the increased load while maintaining performance and reliability.

----------

**There are 100000 vending machines all around the world which need to update a database about maintaince activities like restocking or any technical failure. The update happens at midnight for all the machines. A batch system runs after the update and creates work orders for the maintaince task. Do you see a problem in this design?**

Updating all 100,000 vending machines at midnight could lead to a bottleneck, causing network congestion or server overload. Consider staggering updates or using a distributed system to balance the load.

you might consider implementing a more distributed update schedule to ease network load and reduce the risk of server overload. This way, you can still maintain efficiency without the pressure of simultaneous updates

Randomized Scheduling: Implement a random delay for each machine's update to naturally distribute the load over a longer period.
Priority-based Updates: Assign priority levels to machines based on factors like location, usage frequency, or failure rates, updating higher-priority machines first.
Rolling Updates: Use a rolling update strategy by dividing machines into smaller groups and updating each group sequentially over time.
Event-driven Updates: Trigger updates based on specific events or conditions rather than fixed schedules.

-------

**There is a photo sharing application where users can upload a photo and share it using a link. There are 26 servers to store these photos. The server where a photo is stored is decided by the starting character of the user's name. For example: if the user's name is 'Sundar' the photo will go to the 19th server.1A, 2B, 3C, 4D, 5E, 6F, 7G, 8H, 9I, 10J, 11K, 12L, 13M, 14N, 15O, 16P, 17Q, 18R, 19S, 20T, 21U, 22V, 23W, 24X, 25Y, 26Z**

**Do you see any problem with this design?**

This design could lead to uneven load distribution across servers since some starting letters (like 'S' or 'J') might be more common than others. This could result in certain servers being overloaded while others are underutilized. A more balanced approach could use hashing or distribute based on user ID instead.

Consider using a consistent hashing technique, which distributes photos more evenly among the servers regardless of the user's name. Another approach is to assign users a unique identifier and hash this ID to determine the server, ensuring a more balanced distribution. You could also implement a load balancer to dynamically allocate storage based on current server loads.

**What parameters will you consider to calculate the cost of the database?**
To calculate the cost of a database, consider parameters like storage capacity, data transfer rates, read/write operations, the number of database instances, backup and recovery needs, and any additional features like high availability or security

----------

**Any concerns with Consistent Hashing for multiple servers serving music uploading/streaming service**
Consistent hashing is generally effective for distributing load across multiple servers. However, potential concerns include handling node failures or additions, which can cause data to be temporarily inaccessible or require rebalancing. Additionally, ensuring a uniform distribution of data can be challenging if the hash function isn't well-chosen.

**How would you handle large files that cannot fit in on a single machine**

For large files that can't fit on a single machine, you could use a distributed file system like HDFS (Hadoop Distributed File System) or cloud storage solutions like Amazon S3. These systems automatically split files into smaller chunks, store them across multiple nodes, and manage data redundancy.

**How would you scale your backend if your app is going from a single country to international app**

To scale your backend for international expansion, consider deploying across multiple regions to reduce latency and improve performance. Implement a content delivery network (CDN) for faster content delivery, and ensure your database is distributed for better access and redundancy. Additionally, consider localizing content and adapting to different compliance and data protection regulations.
**Pros and cons of preloading hints or loading them from the server for a game. Hints could be text/image/video based.**

Preloading hints can reduce in-game downtime and provide a seamless experience, especially if network connectivity is unreliable. However, it increases initial load times and requires more storage. Loading from the server allows for dynamic and updated content but can lead to delays if the network is slow.
