---
title: Java Concurrency
slug: Java Concurrency
abstract: Java Concurrency
---

## Golden Rules

1. Make it right
2. Make it fast

## Approach for this

1. Try to move the locks as lower as possible
2. Try to be thread-safe (use only immutable or no states at all)

KeyWords:
Race Condition: Multiple threads are trying to acquire the resources.

Data Race: Typically *check and update* kind of cases where, the date that got modified is up for access immidiatly for update and read.


## Main components

- Executor
- ExecutorService
- ScheduledExecutorService
- Future
- CountDownLatch
- CyclicBarrier
- Semaphore
- ThreadFactory
- BlockingQueue
- DelayQueue
- Locks
- Phaser

## Life Cycle of Thread

![image-title-here](assets/gitbook/images/thread.webp){:class="img-responsive"}





## Java.util.concurrent

The Interfaces in this package are classified on prilimnary levels as collection related and concurrency tools & mechanisms:

| Collection Related Interfaces |
| ------------------------------------------------------- |
| [TransferQueue](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TransferQueue.html "interface in java.util.concurrent")                   |
| [ConcurrentMap](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentMap.html "interface in java.util.concurrent")                   |
| [ConcurrentNavigableMap](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentNavigableMap.html "interface in java.util.concurrent") |
| [BlockingDeque](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/BlockingDeque.html "interface in java.util.concurrent")                   |
| [BlockingQueue](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/BlockingQueue.html "interface in java.util.concurrent")                   |

| Concurrency Tools & Mechanisms                                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Callable](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Callable.html "interface in java.util.concurrent")                                                                         |
| [CompletableFuture.AsynchronousCompletionTask](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.AsynchronousCompletionTask.html "interface in java.util.concurrent") |
| [CompletionService](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletionService.html "interface in java.util.concurrent")                                                       |
| [CompletionStage](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletionStage.html "interface in java.util.concurrent")                                                           |
| [Delayed](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Delayed.html "interface in java.util.concurrent")                                                                           |
| [Executor](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Executor.html "interface in java.util.concurrent")                                                                         |
| [ExecutorService](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ExecutorService.html "interface in java.util.concurrent")                                                           |
| [ForkJoinPool.ForkJoinWorkerThreadFactory](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ForkJoinPool.ForkJoinWorkerThreadFactory.html "interface in java.util.concurrent")         |
| [ForkJoinPool.ManagedBlocker](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ForkJoinPool.ManagedBlocker.html "interface in java.util.concurrent")                                   |
| [Future](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Future.html "interface in java.util.concurrent")                                                                             |
| [RejectedExecutionHandler](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/RejectedExecutionHandler.html "interface in java.util.concurrent")                                         |
| [RunnableFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/RunnableFuture.html "interface in java.util.concurrent")                                                             |
| [RunnableScheduledFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/RunnableScheduledFuture.html "interface in java.util.concurrent")                                           |
| [ScheduledExecutorService](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ScheduledExecutorService.html "interface in java.util.concurrent")                                         |
| [ScheduledFuture](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ScheduledFuture.html "interface in java.util.concurrent")                                                           |
| [ThreadFactory](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ThreadFactory.html "interface in java.util.concurrent")                                                               |

The classes in this package are classified on prilimnary levels collection and concurrency tools & mechanisms;

| Concurrency Handling                   | Concurrent Collection        |
| -------------------------------------- | ---------------------------- |
| AbstractExecutorService                | ArrayBlockingQueue           |
| CompletableFuture                      | ConcurrentHashMap            |
| CountDownLatch                         | ConcurrentHashMap.KeySetView |
| CountedCompleter                       | ConcurrentLinkedDeque        |
| CyclicBarrier                          | ConcurrentLinkedQueue        |
| Exchanger                              | ConcurrentSkipListMap        |
| ExecutorCompletionService              | ConcurrentSkipListSet        |
| Executors                              | CopyOnWriteArrayList         |
| ForkJoinPool                           | CopyOnWriteArraySet          |
| ForkJoinTask                           | DelayQueue                   |
| ForkJoinWorkerThread                   | LinkedBlockingDeque          |
| FutureTask                             | LinkedBlockingQueue          |
| Phaser                                 | LinkedTransferQueue          |
| RecursiveAction                        | PriorityBlockingQueue        |
| RecursiveTask                          | SynchronousQueue             |
| ScheduledThreadPoolExecutor            |                              |
| Semaphore                              |                              |
| ThreadLocalRandom                      |                              |
| ThreadPoolExecutor                     |                              |
| ThreadPoolExecutor.AbortPolicy         |                              |
| ThreadPoolExecutor.CallerRunsPolicy    |                              |
| ThreadPoolExecutor.DiscardOldestPolicy |                              |
| ThreadPoolExecutor.DiscardPolicy       |                              |

Lets take a closer look at those in Concurrency Handling column and try to re-classify them into differnt groups.

### Collection 

![image-title-here](assets/gitbook/images/pngegg.png){:class="img-responsive"}

### Future Flow

![image-title-here](assets/gitbook/images/future_interface.webp){:class="img-responsive"}

### Executor Flow

![image-title-here](assets/gitbook/images/executor.webp){:class="img-responsive"}

### Remaining tools

- CountDownLatch
- CyclicBarrier
- Exchanger
- Executors
- Phaser
- Semaphore
- ThreadLocalRandom
- ForkJoinWorkerThread
- CompletionService
