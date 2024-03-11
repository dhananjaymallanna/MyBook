---
title: Java Microbenching
slug: Java Microbenching
abstract: Java Microbenching
---

Microbenchmarks deal with the smallest of all benchmarks, and they represent a very simple and easy-to-define metric that tracks and measures the performance of a small and specific piece of code. In contrast of benchmarking, which is the process of running a computer program to evaluate how well the runtime environment performs.

Microbenchmarks are best used for tracking the following:

* A well-defined quantity like rate of operations
* Bandwidth
* Latency
* The amount of time that elapses between X and Y.

Tool tp perform Microbenchmarking in Java is [JMH](https://openjdk.org/projects/code-tools/jmh/). JMH is a Java harness for building, running, and analysing nano/micro/milli/macro benchmarks written in Java and other languages targetting the JVM.

Let us focus on using the benchmarking taking spring into the consideration.

Dependencies:

```maven
<dependency>
    <groupId>org.openjdk.jmh</groupId>
    <artifactId>jmh-core</artifactId>
    <version>1.37</version>
</dependency>
<dependency>
    <groupId>org.openjdk.jmh</groupId>
    <artifactId>jmh-generator-annprocess</artifactId>
    <version>1.37</version>
</dependency>
```

The different modes of benchmarking are:

* Throughput
* AverageTime
* SampleTime
* SingleShotTime

example:

```java
@BenchmarkMode(Mode.Throughput)
```

The benchmarking can be performed with or without the warmup (how many times a benchmark will dry run before results are collectedinorder to conpensate for more realistic use cases.) 

```Java
@Fork(value = 1, warmups = 2)

@Fork annotation, we can set up how the benchmark execution happens: 

**value** parameter controls how many times the benchmark will be executed
**warmup** parameter controls how many times a benchmark will dry run before results are collected
```

```Java
@Warmup(iterations = 5) tells JMH that there will be five warm-up iterations

if iterations value is not provided default=20
```




for the curious ones.

* https://openjdk.org/projects/code-tools/