---
title: Principles of Object-Oriented Design
slug: SOLID Principles
abstract: Principles of Object-Oriented Design
---

## SOLID Principles

SOLID Principles of Object-Oriented Design

These principles help in designing software that is modular, maintainable, and flexible. By following these principles, you can create code that is easier to understand, test, and extend

```mermaid!
      graph LR
         SRP["Single Responsibility Principle $ SRP $ "] -->|"A class should have only one reason to change."| Class1["Each class should have a single responsibility or purpose."]
```

Single Responsibility Principle $ SRP$ :
   A class should have only one reason to change.
   Each class should have a single responsibility or purpose.
   Helps in making classes more focused and easier to maintain.

```mermaid!
      graph LR
         OCP["Open-Closed Principle $ OCP$ "] -->|"Software entities should be open for extension but closed for modification."| Class2["Allows adding new functionality without modifying existing code."]
```

Open-Closed Principle $ OCP$ :
   Software entities $ classes, modules, functions$  should be open for extension but closed for modification.
   Allows adding new functionality without modifying existing code.
   Achieved through the use of abstractions, interfaces, and inheritance.

```mermaid!
      graph LR
         LSP["Liskov Substitution Principle $ LSP$ "] -->|"Subtypes must be substitutable for their base types."| Class3["Derived classes should be able to replace the base class without affecting the correctness of the program."]
```

Liskov Substitution Principle $ LSP$ :
   Subtypes must be substitutable for their base types.
   Derived classes should be able to replace the base class without affecting the correctness of the program.
   Ensures that inheritance is used correctly and avoids unexpected behavior.

```mermaid!
      graph LR
         ISP["Interface Segregation Principle $ ISP$ "] -->|"Clients should not be forced to depend on interfaces they do not use."| Class4["Many specific interfaces are better than a single general-purpose interface."]
```

Interface Segregation Principle $ ISP$ :
   Clients should not be forced to depend on interfaces they do not use.
   Many specific interfaces are better than a single general-purpose interface.
   Promotes the idea of smaller, more focused interfaces.

```mermaid!
      graph LR
         DIP["Dependency Inversion Principle $ DIP$ "] -->|"High-level modules should not depend on low-level modules."| Class5["Both should depend on abstractions."]
         DIP -->|"Abstractions should not depend on details."| Class6["Details should depend on abstractions."]
```

Dependency Inversion Principle $ DIP$ :
   High-level modules should not depend on low-level modules. Both should depend on abstractions.
   Abstractions should not depend on details. Details should depend on abstractions.
   Encourages loose coupling and promotes the use of dependency injection.

## Other Important Principles

```mermaid!
graph LR
    DRY["Don't Repeat Yourself (DRY)"] --> |Abstract Duplication| DuplicationShouldBeAbstracted
```

Don't Repeat Yourself (DRY): Duplic­ation should be abstracted. This principle emphasizes the need to avoid redundant code by abstracting common functionality into reusable components.

```mermaid!
graph LR
   LoD["Law of Demeter"] --> |Talk to related classes| OnlyTalkToRelatedClasses

```

Law of Demeter: Only talk to related classes. This principle suggests that an object should only interact with its immediate "friends" and not reach through the internal details of other objects.

```mermaid!
graph LR
   HP["Hollywood Principle"] --> |Don't call us, we'll call you| DontCallUsWellCallYou
```

Hollywood Principle: "­Don't call us, we'll call you". This principle encourages a design where low-level components are called by high-level components, but the high-level components are not dependent on the low-level components.

```mermaid!
graph LR
   YAGNI["You Ain't Gonna Need It"] --> |Code what you need now| OnlyCodeWhatYouNeedNow
```

You Ain't Gonna Need It: Only code what you need now. This principle advises against adding functionality until it is deemed necessary to avoid unnecessary complexity.

```mermaid!
graph LR
   KISS["Keep It Simple, Stupid"] --> |Favor clarity over cleverness| FavorClarityOverCleverness
```

Keep It Simple, Stupid (KISS): Favor clarity over cleverness. This principle advocates for simplicity and clarity in design over unnecessary complexity or cleverness.

```mermaid!
graph LR
   CoC["Convention Over Configuration"] --> |Defaults cover 90% of uses| DefaultsCover90PercentOfUses
```

Convention Over Config­uration: Defaults cover 90% of uses. This principle suggests that a framework should make assumptions about the best configuration based on conventions, reducing the need for explicit configuration.

```mermaid!
graph LR
   Encapsulation --> |What happens in Vegas...| WhatHappensInVegas
```

Encaps­ulation: What happens in Vegas... This principle encapsulates the internal state of an object and hides its implementation details from the outside world.

```mermaid!
graph LR
   DBC["Design By Contract"] --> |Write tests| AndThenWriteTests
```

Design By Contract: And then write tests. This principle involves defining formal, precise, and verifiable interface specifications for software components, and then using these contracts to ensure correctness.

```mermaid!
graph LR
    FBC["Avoid Fragile Base Class"] --> |Treat Base like a public API| TreatBaseLikeAPublicAPI
```

Avoid Fragile Base Class: Treat Base like a public API. This principle emphasizes treating the base classes as though they are a public API, ensuring that changes to the base classes do not break subclasses.

```mermaid!
graph LR
   
    CCP["Common Closure Principle"] --> |Classes change together| ClassesThatChangeTogetherStayTogether

```

Common Closure Principle: Classes that change together, stay together. This principle suggests that classes that are likely to change together should be encapsulated together.
