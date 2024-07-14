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