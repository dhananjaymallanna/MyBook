---
title: Java Streams
slug: Java Streams
abstract: Java Streams usage and sort of cookbook
---


## Java Streams

| Modifier and Type | Method and Description |
| --- | --- |
| `[BiConsumer](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/function/BiConsumer.html "interface in java.util.function")<[A](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/stream/Collector.html "type parameter in Collector"),[T](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/stream/Collector.html "type parameter in Collector")>` | `[accumulator](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/stream/Collector.html#accumulator--)()`
A function that folds a value into a mutable result container.

 |
| `[Set](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/Set.html "interface in java.util")<[Collector.Characteristics](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/stream/Collector.Characteristics.html "enum in java.util.stream")>` | `[characteristics](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/stream/Collector.html#characteristics--)()`

Returns a `Set` of `Collector.Characteristics` indicating the characteristics of this Collector.

 |
| `[BinaryOperator](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/function/BinaryOperator.html "interface in java.util.function")<[A](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/stream/Collector.html "type parameter in Collector")>` | `[combiner](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/stream/Collector.html#combiner--)()`

A function that accepts two partial results and merges them.

 |
| `[Function](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/function/Function.html "interface in java.util.function")<[A](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/stream/Collector.html "type parameter in Collector"),[R](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/stream/Collector.html "type parameter in Collector")>` | `[finisher](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/stream/Collector.html#finisher--)()`

Perform the final transformation from the intermediate accumulation type `A` to the final result type `R`.

 |
| `static <T,A,R> [Collector](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/stream/Collector.html "interface in java.util.stream")<T,A,R>` | `[of](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/stream/Collector.html#of-java.util.function.Supplier-java.util.function.BiConsumer-java.util.function.BinaryOperator-java.util.function.Function-java.util.stream.Collector.Characteristics...-)([Supplier](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/function/Supplier.html "interface in java.util.function")<A> supplier, [BiConsumer](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/function/BiConsumer.html "interface in java.util.function")<A,T> accumulator, [BinaryOperator](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/function/BinaryOperator.html "interface in java.util.function")<A> combiner, [Function](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/function/Function.html "interface in java.util.function")<A,R> finisher, [Collector.Characteristics](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/stream/Collector.Characteristics.html "enum in java.util.stream")... characteristics)`

Returns a new `Collector` described by the given `supplier`, `accumulator`, `combiner`, and `finisher` functions.

 |
| `static <T,R> [Collector](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/stream/Collector.html "interface in java.util.stream")<T,R,R>` | `[of](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/stream/Collector.html#of-java.util.function.Supplier-java.util.function.BiConsumer-java.util.function.BinaryOperator-java.util.stream.Collector.Characteristics...-)([Supplier](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/function/Supplier.html "interface in java.util.function")<R> supplier, [BiConsumer](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/function/BiConsumer.html "interface in java.util.function")<R,T> accumulator, [BinaryOperator](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/function/BinaryOperator.html "interface in java.util.function")<R> combiner, [Collector.Characteristics](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/stream/Collector.Characteristics.html "enum in java.util.stream")... characteristics)`

Returns a new `Collector` described by the given `supplier`, `accumulator`, and `combiner` functions.

 |
| `[Supplier](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/function/Supplier.html "interface in java.util.function")<[A](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/stream/Collector.html "type parameter in Collector")>` | `[supplier](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collector.html../../../java/util/stream/Collector.html#supplier--)()`

A function that creates and returns a new mutable result container.

 |

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

## Java stream

* [X] ~~*basics*~~ [2023-12-19]
* [ ] Stream API

--------------------------------------

### Additional topics to come in here to cover

* Infinite Streams
* Vavr
* Microbenchmarking

## to be continued reading from <https://4comprehension.com/page/6/?s=java+stream>
