---
title: newly unread indicator 
slug: newly unread indicator 
abstract: newly unread indicator 
---

 Design Newly Unread Message Indicator
===

<!--ts-->
* [Design Newly Unread Message Indicator](#design-newly-unread-message-indicator)
* [Problem Statement](#problem-statement)
* [Requirements](#requirements)
   * [Core Requirements](#core-requirements)
   * [High Level Requirements](#high-level-requirements)
   * [Micro Requirements](#micro-requirements)
* [Output](#output)
   * [Design Document](#design-document)
   * [Prototype](#prototype)
      * [Recommended Tech Stack](#recommended-tech-stack)
      * [Keep in mind](#keep-in-mind)
* [Outcome](#outcome)
   * [You'll learn](#youll-learn)
* [Share and shoutout](#share-and-shoutout)
<!--te-->

# Problem Statement

This service/feature will inform users about presence of new messages. The number in the indicator is the total number of unique users from which the user has received the message. The indicator becomes `0` as soon as user clicks the button - acknowledging that he/she knows about the message.

The indicator does not tell how many unread messages are there in total, but rather it is simply indicating that some new messages have been received; and as soon as the user clicks the button he/she acknowledges the presence and thus indicator resets to 0.

A user can have thousands of unread messages but the number `3` in the image below indicates that there are 3 messages from 3 different users that he/she newly received.

![Relog New Message Indicator](https://user-images.githubusercontent.com/4745789/139584929-5e00fd58-c731-4f91-aaa8-7383acd99ff4.png)

# Requirements

<!--rs-->
*The problem statement is something to start with, be creative and dive into the product details and add constraints and features you think would be important.*
<!--re-->

## Core Requirements

 - show the **indicator** informing user about newly unread indicators
 - the social network has **1 million** daily active users
 - the response time of the service should be as **low** as possible
 - the update to the indicator should happen in **real-time**

##  High Level Requirements
<!--hs-->
- make your high-level components operate with **high availability**
 - ensure that the data in your system is **durable**, not matter what happens
 - define how your system would behave while **scaling-up** and **scaling-down**
 - make your system **cost-effective** and provide a justification for the same
 - describe how **capacity planning** helped you made a good design decision 
 - think about how other services will interact with your service
<!--he-->

##  Micro Requirements
<!--ms-->
- ensure the data in your system is **never** going in an inconsistent state
 - ensure your system is **free of deadlocks** (if applicable)
 - ensure that the throughput of your system is not affected by **locking**, if it does, state how it would affect
<!--me-->

# Output

## Design Document
<!--ds-->
Create a **design document** of this system/feature stating all critical design decisions, tradeoffs, components, services, and communications. Also specify how your system handles at scale, and what will eventually become a chokepoint.

Do **not** create unnecessary components, just to make design look complicated. A good design is **always simple and elegant**. A good way to think about it is if you were to create a spearate process/machine/infra for each component and you will have to code it yourself, would you still do it?
<!--de-->

## Prototype

To understand the nuances and internals of this system, build a prototype that

- simulate newly unread message indicator on local machine
- updates the counter in real-time

###  Recommended Tech Stack

This is a recommended tech-stack for building this prototype

|Which|Options|
|-----|-----|
|Language|Golang, Java, NodeJS, C++|
|Framework|SocketIO|
|Database|Pick your favourite|

###  Keep in mind

These are the common pitfalls that you should keep in mind while you are building this prototype

- newly unread messages are different from unread messages
- keep the data in faster storage to make system work at scale

# Outcome

##  You'll learn

- database schema design
- designing service focussing on low latency user experience

<!--fs-->
#  Share and shoutout

If you find this assignment helpful, please
 - share this assignment with your friends and peers
 - star this repository and help it reach a wider audience
 - give me a shoutout on Twitter [@arpit_bhayani](https://twitter.com/@arpit_bhayani), or on LinkedIn at [@arpitbhayani](https://www.linkedin.com/in/arpitbhayani/).

This assignment is part of [Arpit's System Design Masterclass](https://arpitbhayani.me/masterclass) - A masterclass that helps you become great at designing scalable, fault-tolerant, and highly available systems.
<!--fe-->
