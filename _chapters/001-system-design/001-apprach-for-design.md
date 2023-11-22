---
title: Approach for System Design
slug: Approach for System Design
abstract: Approach for System Design
---

* ask for the use cases and list them 
* ask for the TPS and make a note of it.
* from the usecases derive components
* look for various mean to connect the componets
* once connectd look for the expected behaviour so as to optimise the connections like 
  * using cache for speeding response time, 
  * use queue when the async behaviour is allowed and notications are needed
  * webrtc when the data is to be streamed (also to avoid repeated handshake)
* now that you have connections, create the API methods and payload struture for request and response.
* with request and response in hand figure out the data that you want to save or store
  * look for nature of data at hand
  * look for your query pattern 
  * look for what you want to do to this data
* Use above information to 
  * replication statergy
  * storage space requirement
  * selection of ideal way for storage
* With latency in hand, TPS requirements, CPU core availability caliculate the number of Nodes needed.
    * lets us say 

    TPS = 10,000.  -------- 1
    say the API has latency of 10 milliseconds
    Hence, 1 thread can process 100 rps  -------- 2
    say CPU has 2 cores, so max 4 threads are running in parallel (hypothetically) -------- 3
    i.e. the machine can serve 400 rps. -------- 4

    from 1 and 4:
    number of such cpus neeed = 10000/400 = 25.

        Number of active threads = cpuCore * (latency/(latency-ioTime))

    When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are 
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$


[Learn more about getting started with this theme.]({{ site.baseurl }}/index.html#getting-started)

---
```
This file is located at: {{ page.path }}
```
---
    
