---
title: Java functional programming
slug: Java functional programming
abstract: Java functional programming
---

what do you mean by functional?
it is an interface that contains only one abstract method.

what is predicate ?
predicates mean functions with one argument that return a boolean value

consider an example:

```java
@FunctionalInterface
public interface EvenOdd {
    
    Boolean isEven(int number);
    // rest can be only complete methods
}
```

in this there is only one method hence that is an potential predicate.

The above defined predicate can be used in the following manner:

```java

public class StreamOne
 {
    public static void main(String[] args) {
        EvenOdd evenOdd = num-> num%2==0; //Here we have provided the implementation for that predicate.
        System.out.println("\n\n");
        System.out.println(evenOdd.isEven(20));
        System.out.println(evenOdd.isEven(21));
    }
}

```

for simpler understanding, we could consider the example as:

```java

public boolean isEven(int num){

    Boolean val = num%2==0;
    return val;
}

```

if we look carefully the compiler already knows that the 
* method is alway public as this is from an interface
* compiler knows that it has a boolean return type, as there is only one method to look at.
* compiler knows the method name, as there is only one method to look at.
  
so we can omit all that info to

```java

(num)->{
    Boolean val = num%2==0;
    return val;
}

```

and now because it has only one argument, we can get away with the bracket

```java
num->{
    Boolean val = num%2==0;
    return val;
}

```

if we can make the method body to one liner then we can even remove the curly braces.

```java
num -> num%2==0;
```

That is how we got this predicate.

## Java provided functional interfaces

|Interface|Description |
|----|-----------------|
|[BiConsumer](https://docs.oracle.com/javase/8/docs/api/java/util/function/BiConsumer.html "interface in java.util.function")<T,U> | Represents an operation that accepts two input arguments and returns no result. |
|[BiFunction](https://docs.oracle.com/javase/8/docs/api/java/util/function/BiFunction.html "interface in java.util.function")<T,U,R> | Represents a function that accepts two arguments and produces a result. |
|[BinaryOperator](https://docs.oracle.com/javase/8/docs/api/java/util/function/BinaryOperator.html "interface in java.util.function")\<T> | Represents an operation upon two operands of the same type, producing a result of the same type as the operands. |
|[BiPredicate](https://docs.oracle.com/javase/8/docs/api/java/util/function/BiPredicate.html "interface in java.util.function")<T,U> | Represents a predicate (boolean-valued function) of two arguments. |
|[BooleanSupplier](https://docs.oracle.com/javase/8/docs/api/java/util/function/BooleanSupplier.html "interface in java.util.function") | Represents a supplier of `boolean`\-valued results. |
|[Consumer](https://docs.oracle.com/javase/8/docs/api/java/util/function/Consumer.html "interface in java.util.function")\<T> | Represents an operation that accepts a single input argument and returns no result. |
|[DoubleBinaryOperator](https://docs.oracle.com/javase/8/docs/api/java/util/function/DoubleBinaryOperator.html "interface in java.util.function") | Represents an operation upon two `double`\-valued operands and producing a `double`\-valued result. |
|[DoubleConsumer](https://docs.oracle.com/javase/8/docs/api/java/util/function/DoubleConsumer.html "interface in java.util.function") | Represents an operation that accepts a single `double`\-valued argument and returns no result. |
|[DoubleFunction](https://docs.oracle.com/javase/8/docs/api/java/util/function/DoubleFunction.html "interface in java.util.function")\<R> | Represents a function that accepts a double-valued argument and produces a result. |
|[DoublePredicate](https://docs.oracle.com/javase/8/docs/api/java/util/function/DoublePredicate.html "interface in java.util.function") | Represents a predicate (boolean-valued function) of one `double`\-valued argument. |
|[DoubleSupplier](https://docs.oracle.com/javase/8/docs/api/java/util/function/DoubleSupplier.html "interface in java.util.function") | Represents a supplier of `double`\-valued results. |
|[DoubleToIntFunction](https://docs.oracle.com/javase/8/docs/api/java/util/function/DoubleToIntFunction.html "interface in java.util.function") | Represents a function that accepts a double-valued argument and produces an int-valued result. |
|[DoubleToLongFunction](https://docs.oracle.com/javase/8/docs/api/java/util/function/DoubleToLongFunction.html "interface in java.util.function") | Represents a function that accepts a double-valued argument and produces a long-valued result. |
|[DoubleUnaryOperator](https://docs.oracle.com/javase/8/docs/api/java/util/function/DoubleUnaryOperator.html "interface in java.util.function") | Represents an operation on a single `double`\-valued operand that produces a `double`\-valued result. |
|[Function](https://docs.oracle.com/javase/8/docs/api/java/util/function/Function.html "interface in java.util.function")<T,R> | Represents a function that accepts one argument and produces a result. |
|[IntBinaryOperator](https://docs.oracle.com/javase/8/docs/api/java/util/function/IntBinaryOperator.html "interface in java.util.function") | Represents an operation upon two `int`\-valued operands and producing an `int`\-valued result. |
|[IntConsumer](https://docs.oracle.com/javase/8/docs/api/java/util/function/IntConsumer.html "interface in java.util.function") | Represents an operation that accepts a single `int`\-valued argument and returns no result. |
|[IntFunction](https://docs.oracle.com/javase/8/docs/api/java/util/function/IntFunction.html "interface in java.util.function")\<R> | Represents a function that accepts an int-valued argument and produces a result. |
|[IntPredicate](https://docs.oracle.com/javase/8/docs/api/java/util/function/IntPredicate.html "interface in java.util.function") | Represents a predicate (boolean-valued function) of one `int`\-valued argument. |
|[IntSupplier](https://docs.oracle.com/javase/8/docs/api/java/util/function/IntSupplier.html "interface in java.util.function") | Represents a supplier of `int`\-valued results. |
|[IntToDoubleFunction](https://docs.oracle.com/javase/8/docs/api/java/util/function/IntToDoubleFunction.html "interface in java.util.function") | Represents a function that accepts an int-valued argument and produces a double-valued result. |
|[IntToLongFunction](https://docs.oracle.com/javase/8/docs/api/java/util/function/IntToLongFunction.html "interface in java.util.function") | Represents a function that accepts an int-valued argument and produces a long-valued result. |
|[IntUnaryOperator](https://docs.oracle.com/javase/8/docs/api/java/util/function/IntUnaryOperator.html "interface in java.util.function") | Represents an operation on a single `int`\-valued operand that produces an `int`\-valued result. |
|[LongBinaryOperator](https://docs.oracle.com/javase/8/docs/api/java/util/function/LongBinaryOperator.html "interface in java.util.function") | Represents an operation upon two `long`\-valued operands and producing a `long`\-valued result. |
|[LongConsumer](https://docs.oracle.com/javase/8/docs/api/java/util/function/LongConsumer.html "interface in java.util.function") | Represents an operation that accepts a single `long`\-valued argument and returns no result. |
|[LongFunction](https://docs.oracle.com/javase/8/docs/api/java/util/function/LongFunction.html "interface in java.util.function")\<R> | Represents a function that accepts a long-valued argument and produces a result. |
|[LongPredicate](https://docs.oracle.com/javase/8/docs/api/java/util/function/LongPredicate.html "interface in java.util.function") | Represents a predicate (boolean-valued function) of one `long`\-valued argument. |
|[LongSupplier](https://docs.oracle.com/javase/8/docs/api/java/util/function/LongSupplier.html "interface in java.util.function") | Represents a supplier of `long`\-valued results. |
|[LongToDoubleFunction](https://docs.oracle.com/javase/8/docs/api/java/util/function/LongToDoubleFunction.html "interface in java.util.function") | Represents a function that accepts a long-valued argument and produces a double-valued result. |
|[LongToIntFunction](https://docs.oracle.com/javase/8/docs/api/java/util/function/LongToIntFunction.html "interface in java.util.function") | Represents a function that accepts a long-valued argument and produces an int-valued result. |
|[LongUnaryOperator](https://docs.oracle.com/javase/8/docs/api/java/util/function/LongUnaryOperator.html "interface in java.util.function") | Represents an operation on a single `long`\-valued operand that produces a `long`\-valued result. |
|[ObjDoubleConsumer](https://docs.oracle.com/javase/8/docs/api/java/util/function/ObjDoubleConsumer.html "interface in java.util.function")\<T> | Represents an operation that accepts an object-valued and a `double`\-valued argument, and returns no result. |
|[ObjIntConsumer](https://docs.oracle.com/javase/8/docs/api/java/util/function/ObjIntConsumer.html "interface in java.util.function")\<T> | Represents an operation that accepts an object-valued and a `int`\-valued argument, and returns no result. |
|[ObjLongConsumer](https://docs.oracle.com/javase/8/docs/api/java/util/function/ObjLongConsumer.html "interface in java.util.function")\<T> | Represents an operation that accepts an object-valued and a `long`\-valued argument, and returns no result. |
|[Predicate](https://docs.oracle.com/javase/8/docs/api/java/util/function/Predicate.html "interface in java.util.function")\<T> | Represents a predicate (boolean-valued function) of one argument. |
|[Supplier](https://docs.oracle.com/javase/8/docs/api/java/util/function/Supplier.html "interface in java.util.function")\<T> | Represents a supplier of results. |
|[ToDoubleBiFunction](https://docs.oracle.com/javase/8/docs/api/java/util/function/ToDoubleBiFunction.html "interface in java.util.function")<T,U> | Represents a function that accepts two arguments and produces a double-valued result. |
|[ToDoubleFunction](https://docs.oracle.com/javase/8/docs/api/java/util/function/ToDoubleFunction.html "interface in java.util.function")\<T> | Represents a function that produces a double-valued result. |
|[ToIntBiFunction](https://docs.oracle.com/javase/8/docs/api/java/util/function/ToIntBiFunction.html "interface in java.util.function")<T,U> | Represents a function that accepts two arguments and produces an int-valued result. |
|[ToIntFunction](https://docs.oracle.com/javase/8/docs/api/java/util/function/ToIntFunction.html "interface in java.util.function")\<T> | Represents a function that produces an int-valued result. |
|[ToLongBiFunction](https://docs.oracle.com/javase/8/docs/api/java/util/function/ToLongBiFunction.html "interface in java.util.function")<T,U> | Represents a function that accepts two arguments and produces a long-valued result. |
|[ToLongFunction](https://docs.oracle.com/javase/8/docs/api/java/util/function/ToLongFunction.html "interface in java.util.function")\<T> | Represents a function that produces a long-valued result. |
|[UnaryOperator](https://docs.oracle.com/javase/8/docs/api/java/util/function/UnaryOperator.html "interface in java.util.function")\<T> | Represents an operation on a single operand that produces a result of the same type as its operand.
