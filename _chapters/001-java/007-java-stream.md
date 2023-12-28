---
title: Java Streams
slug: Java Streams
abstract: Java Streams usage and sort of cookbook
---


## Java Streams

This thing is a big Ramayan, lets us go slowly one by one taking each example carefully understanding them, in pakka desi style.

### Interfaces

* [ ] BaseStream
* [ ] Collector
* [ ] DoubleStream
* [ ] DoubleStream.Builder
* [ ] IntStream
* [ ] IntStream.Builder
* [ ] LongStream
* [ ] LongStream.Builder
* [ ] Stream
* [ ] Stream.Builder

### Classes

* [ ] Collectors
* [ ] StreamSupport

### Enums

* [ ] Collector.Characteristics

Lets start with

### what is a java stream?

Java streams represent a pipeline through which data will flow and the functions to operate on the data. A pipeline in this instance consists of a stream source, followed by zero or more intermediate operations, and a terminal operation.

which has the defination as `public interface BaseStream<T,S extends BaseStream<T,S>> extends AutoCloseable`

### what does AutoCloseable signify?

An object that may hold resources (such as file or socket handles) until it is closed. The close() method of an AutoCloseable object is called automatically when exiting a try -with-resources block for which the object has been declared in the resource specification header.

# Java stream

* [X] ~~*basics*~~ [2023-12-19]
* [ ] Stream API

--------------------------------------

### Additional topics to come in here to cover

* Infinite Streams
* Vavr
* Microbenchmarking

# to be continued reading from <https://4comprehension.com/page/6/?s=java+stream>
