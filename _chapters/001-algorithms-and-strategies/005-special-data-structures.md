---
slug: Special Data structures 
title: Special Data structures
abstract: Special Data structures
---



### Q. Program to get K smallest numbers from a given stream of numbers

#### Special DS

 Heaps

### opertations supperted

- find-max (or find-min): find a maximum item of a max-heap, or a minimum item of a min-heap, respectively (a.k.a. peek)
- insert: adding a new key to the heap (a.k.a., push)
- extract-max (or extract-min): returns the node of maximum value from a max heap [or minimum value from a min heap] after removing it from the heap (a.k.a., pop)
- delete-max (or delete-min): removing the root node of a max heap (or min heap), respectively
- replace: pop root and push a new key. This is more efficient than a pop followed by a push, since it only needs to balance once, not twice, and is appropriate for fixed-size heaps.

*Approach:* if you want K smallest numbers, then go for max heap, whenever the size of heap increases then remove the element from top.
2 things can happen:

- incoming is greater than root: post heapify, this very element comes back to the top, and get removed due to size impact.
- incoming is smaller than root: post heapify, this element goes somewhere and max among all values comes to the top, and get removed due to size impact. there by preserving the smaller numbers intact.

```java
import java.util.PriorityQueue;

public class PriorityQueueUsage {
    /*
     * Program to get K smallest numbers from a given stream of numbers
     */

    public static void main(String[] args) {
        int[] ints = {10,0,30,4,5,6,8,9};
        int k = 4;
        for (Integer integer : ints) {
            System.out.print(integer+"  ");
        }
        System.out.println();

        PriorityQueue<Integer> maxHeap = new PriorityQueue<Integer>(2,(a,b)-> b-a);
        for (Integer integer : ints) {
            System.out.println(integer+" inserted ");
            maxHeap.offer(integer);
            System.out.println(maxHeap.toString());
           if (maxHeap.size()>k) {
                System.out.println(maxHeap.remove()+" removed ");
           } 
           System.out.println(maxHeap.toString());
           System.out.println();
        }
        while (!maxHeap.isEmpty()) {
            System.out.print(maxHeap.poll()+"  ");
        }
        System.out.println();
    }
}

```

