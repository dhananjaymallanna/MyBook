---
slug: Problems to must solve
title: Problems to solve
abstract: Complexities of DSA
---





## Array problems

--------

### Q. Move Negative elements to front

Move Negative elements to front is a simple problem that tests your knowledge of how to move elements across an array. Partition Scheme and has direct application in algorithms like QuickSort.

  ```java

import java.util.Arrays;

public class MoveToFront {
    /*
    Example:
        Input:
        2 -9 10 12 5 -2 10 -4
        Note:
        The order of negative elements are same.
        All negative elements have been moved to the front.
    */

    public static void main(String[] args) {
        int[] input = {2, -9, 10, 12, 5, -2, 10, -4};
        System.out.println(Arrays.toString(input));

        // we have to move all negatives to front so all positives must go to end
        //if order does not matter
        for (int i = 0,j=input.length-1; i < j ; ) {
            if (input[i]<0){
                i++;
            } else{
                System.out.println( "swapping "+ input[i]+" with "+input[j]);
                int temp = input[i];
                input[i] = input[j];
                input[j] = temp;
                j--;
                System.out.println(Arrays.toString(input) );
            }
        }

        System.out.print(Arrays.toString(input) );
        System.out.println();
        System.out.println();
        System.out.println();

        /*
        [2, -9, 10, 12, 5, -2, 10, -4]
        swapping 2 with -4
        [-4, -9, 10, 12, 5, -2, 10, 2]
        swapping 10 with 10
        [-4, -9, 10, 12, 5, -2, 10, 2]
        swapping 10 with -2
        [-4, -9, -2, 12, 5, 10, 10, 2]
        swapping 12 with 5
        [-4, -9, -2, 5, 12, 10, 10, 2]
        FINALLY
        [-4, -9, -2, 5, 12, 10, 10, 2]
        */

        // FOR PRESERVING RELATIVE ORDER OF NEGITIVES
        input = new int[]{2, -9, 10, 12, 5, -2, 10, -4};
        int j = 0;
        for (int i = 0; i < input.length; i++) {
            if (input[i] < 0) {
                System.out.println( "swapping "+ input[i]+" with "+input[j]);
                int temp = input[i];
                input[i] = input[j];
                input[j] = temp;
                j++;
                System.out.println(Arrays.toString(input) );
            }
        }
        System.out.print(Arrays.toString(input) );
    }

    /*
    swapping -9 with 2
    [-9, 2, 10, 12, 5, -2, 10, -4]
    swapping -2 with 2
    [-9, -2, 10, 12, 5, 2, 10, -4]
    swapping -4 with 10
    [-9, -2, -4, 12, 5, 2, 10, 10]
    [-9, -2, -4, 12, 5, 2, 10, 10]
    * */
}

  ```

### Q. 2 Sum Problem

2 Sum problem is a standard problem where you need to find two elements that add up to a given number.

```text
    Input: arr[] = {0, -1, 2, -3, 1}, x= -2
    Output: [-3,1]
    Explanation: If we calculate the sum of the output,1 + (-3) = -2
    Input: arr[] = {1, -2, 1, 0, 5}, x = 0
    Output: No
```

#### Approaches

| **Approach** | **Time Complexity** | **Space Complexity** |
| naive(Brute Force) | O(n^2)| O(1) |
| Improved Approach using Binary Search | O(N logN) | O(1) |
| Optimal Approach using Hash Map | O(N) | O(N) |

#### Brute Force

```java
    void two_sum(int[] list, int sum)
    {
        int length = list.length;
        int count = 0;
        for(int i = 0; i<length; i++)
            for(int j = i+1; j<length; j++)
                if(list[i] + list[j] == sum)
                    System.out.println(list[i] +" "+ list[j]);
    }
```

#### Hash Map based approach

```java

    public class TwoSum {
        public static int[] findTwoSum(int[] arr, int x) {
            HashMap<Integer, Integer> seen = new HashMap<>();
            for (int i = 0; i < arr.length; i++) {
            int complement = x - arr[i];
            if (seen.containsKey(complement)) {
                return new int[]{complement, arr[i]};
            }
            seen.put(arr[i], i);
            }
            return null;
        }

        public static void main(String[] args) {
            int[] arr = {0, -1, 2, -3, 1};
            int x = -2;

            int[] result = findTwoSum(arr, x);

            if (result != null) {
            System.out.println("Two elements that add up to " + x + " are: " + result[0] + " and " + result[1]);
            } else {
            System.out.println("No two elements found that add up to " + x);
            }
        }
    }

```

### Q. 2 Sum Closest

Find 2 elements with sum closest to target

```java
    public class TwoSumClosest {
        public static int[] findClosestSum(int[] arr, int target) {
            int closestSum = Integer.MAX_VALUE;
            int[] closestPair = null;
            for (int i = 0; i < arr.length - 1; i++) {
                for (int j = i + 1; j < arr.length; j++) {
                    int currentSum = arr[i] + arr[j];
                    int diff = Math.abs(currentSum - target);
                    if (diff < closestSum) {
                        closestSum = diff;
                        closestPair = new int[]{arr[i], arr[j]};
                    }
                }
            }
            return closestPair;
        }

        public static void main(String[] args) {
            int[] arr = {0, -1, 2, -3, 1};
            int target = -2;
            int[] result = findClosestSum(arr, target);
            if (result != null) {
                System.out.println("Two elements with closest sum to " + target + " are: " + result[0] + " and " + result[1]);
            }
        }
    }

```

### Q. A 3 Sum Problem

Given an array, we need to find if there is a triplet in the array whose sum is equal to a given value. If such a triplet is present, we need to print it and return true. Else, return false.

```txt
    Input: array = {12, 3, 4, 1, 6, 9}, sum = 24; 
    Output: 12, 3, 9 
    Explanation: There is a triplet (12, 3 and 9) present 
    in the array whose sum is 24. 

    Input: array = {1, 2, 3, 4, 5}, sum = 9 
    Output: 5, 3, 1 
    Explanation: There is a triplet (5, 3 and 1) present 
    in the array whose sum is 9.
```

#### Brute Force Approach

```java

    public class ThreeSumBruteForce {
        public static void main(String[] args) {
            int arr[] = { 1, 4, 2, 6, 10, 8}; 
            int sum = 9; 
            int arr_size = arr.length;
            triplet(arr, arr_size, sum); 
        }

        static Boolean triplet(int arr[], int arr_size, int sum) { 
            //i for first element
            for (int i = 0; i < arr_size - 2; i++) { 
                //j for second element
                for (int j = i + 1; j < arr_size - 1; j++) {  
                    //k for third element
                    for (int k = j + 1; k < arr_size; k++) { 
                        if (arr[i] + arr[j] + arr[k] == sum) { 
                            System.out.println("Triplet is " +arr[i]+" "+arr[j]+ "  "+arr[k]);
                            return true; 
                        } 
                    } 
                } 
            } 
            //false if no such triplet is found 
            return false; 
        } 
    }
```

1. A 3 Sum Closest Problem

    You have attempted the 2 Sum Closest problem variant but can you use similar ideas to solve [3 Sum Closest](https://iq.opengenus.org/closest-3-sum-problem/) problem as well.

1. 4 Sum Problem

    [4 Sum problem](https://iq.opengenus.org/4-sum-problem/) brings in new ideas and puts your knowledge from previous problems to test. If you are able to solve it, try the 4 Sum Closest problem on your own.

Linked List problems
--------------------

1. Linked List with no NULLs

    This is an important topic that you must cover. In interviews at top companies like Google, you must [implement Linked List without using NULL](https://iq.opengenus.org/linked-list-with-no-nulls/) as this is the standard coding practice in Industry.

1. XOR Linked List

    [XOR Linked List](https://iq.opengenus.org/xor-linked-list/) is the memory efficient version of [Doubly Linked List](https://iq.opengenus.org/doubly-linked-list/). The concept of using XOR in such cases in very important for Interviews.

1. Linked List vs Array

    Understand the differences between [Array and Linked List](https://iq.opengenus.org/array-vs-linked-list/). Often, asked in initial rounds.

1. Binary Search on LL

    Binary Search is frequently used to solve Interview problem. Is [Binary Search on Linked List](https://iq.opengenus.org/binary-search-in-linked-list/) equally efficient?.

1. Middle element in LL

    This problem of ["Finding middle element of a Linked List"](https://iq.opengenus.org/find-middle-of-a-linked-list/) involves the technique of Slow and Fast pointer which is widely used.

1. Sort LL on absolute values

    [Sort Linked List](https://iq.opengenus.org/sort-a-linked-list-already-sorted-on-absolute-values/) whose values have already been sorted on absolute values is a HOT interview problem.

1. Loop in Linked List

    There are [3 methods to detect a loop](https://iq.opengenus.org/detect-loop-in-linked-list/) in Linked List.

1. Reverse a Linked List

    Reversing a Linked List may seem to be a simple problem but it uses 3 pointers. The challenge is to [reverse a Linked List using 2 pointers](https://iq.opengenus.org/reverse-linked-list-using-2-pointers-xor/). This involves the idea of XOR.

1. Cycle detection

    This is a HOT interview question. There are over 3 methods to [detect Cycle in a Linked List](https://iq.opengenus.org/cycle-detection-algorithms/) and a follow-up question will to be [remove a cycle](https://iq.opengenus.org/detect-and-remove-loop-in-linked-list/).

Stack problems
--------------

1. 2 Stacks in one Array

    This problem of implementing [2 Stacks in 1 array](https://iq.opengenus.org/two-stacks-in-one-array/) is a simple problem. The main challenge is with the next problem.

1. N Stacks in one Array

    This [problem](https://iq.opengenus.org/k-stacks-in-one-array/) is much more challenging problem. Understand the solution carefully as this is a HOT interview question now. Similar problem is [N Queues in one Array](https://iq.opengenus.org/k-queues-in-array/).

1. Monotonic Stack

    [Monotonic Stack](https://iq.opengenus.org/tag/monotonic-stack/) is a core technique which exploits the properties of Stack to solve several challenging problems. Go through some example problems to hone your skills.

1. Merge Intervals

    The problem of [Merge Intervals](https://iq.opengenus.org/merge-intervals/) is a HOT interview problem. It is, often formulate as Time interval or duration of an event.

Queue problems
--------------

1. Delete middle element of Queue

    [Delete middle element of Queue](https://iq.opengenus.org/delete-middle-element-of-queue/) is a simple problem that tests how you can use core operations to build other operations. If needed, you should quickly revise the [basics of Queue](https://iq.opengenus.org/queue/) and [types of Queue](https://iq.opengenus.org/queue-types-and-implementation/).

1. Monotonic Queue

    [Monotonic Queue](https://iq.opengenus.org/monotonic-queue/) is a core technique using Queue to solve challenging problems like Daily Temperate problem.

1. Queue using Stack

    [Implementing Queue](https://iq.opengenus.org/queue-using-stack/) using Stack data structure is another important Interview problem to test your concepts. The corresponding problem is to [Implement Stack using Queue](https://iq.opengenus.org/stack-using-queue/).

1. Next Larger / Smaller element in Array

    [Next Larger / Smaller element in Array](https://iq.opengenus.org/next-larger-smaller-element/) is a difficult interview problem that use the idea of Monotonic Queue.

1. Maximal Rectangle problem

    [Maximal Rectangle problem](https://iq.opengenus.org/maximal-rectangle-problem/) is another difficult interview problem that use the idea of Monotonic Queue.

Binary Tree
-----------

1. Diameter and Height

    Finding the [Diameter](https://iq.opengenus.org/diameter-of-binary-tree/) and [Height](https://iq.opengenus.org/find-height-or-depth-of-binary-tree/) of a Binary Tree is a simple yet core problem that everyone should be fluent in. Every few students know that the average height of a random Binary Tree is [O(N^0.5) (see how?)](https://iq.opengenus.org/average-height-of-random-binary-tree/).

1. No NULL implementation

    Implementing [Binary Tree with no NULLs](https://iq.opengenus.org/binary-search-tree-with-no-nulls/) is an approach that sets you apart from other candidates. Avoiding NULLs is Industry standard.

1. Largest Independent Set

    Finding the [Largest Independent Set](https://iq.opengenus.org/largest-independent-set-in-binary-tree/) in Binary Tree is a problem that requires the application of Dynamic Programming. This is an important interview problem.

1. Copy Binary Tree

    [Copying a Binary Tree with random pointers](https://iq.opengenus.org/copy-a-binary-tree-with-random-pointers/) is a challenging problem. The trick is to handle the random pointers efficiently as the destination node may not have been processed. A related concept is [Threaded Binary Tree](https://iq.opengenus.org/threaded-binary-tree/).

1. Traversal of Binary Tree

    [Zig Zag traversal](https://iq.opengenus.org/zigzag-traversal-of-binary-tree/) and [Level Order traversal](https://iq.opengenus.org/level-order-traversal-binary-tree/) of a Binary Tree is a problem that tests your Binary Tree handling skills. Different [types of view](https://iq.opengenus.org/views-in-binary-tree/) of a Binary Tree is equally important problem.

1. Self-balancing Trees

    [Self-balancing Trees](https://iq.opengenus.org/different-self-balancing-binary-trees/) are important concepts. Interviewers usually ask to list a few self-balancing binary trees. Some advanced levels may ask to explain the idea behind [Red Black Tree](https://iq.opengenus.org/red-black-tree-insertion/).

1. Spreadsheet

    A HOT interview question is to [design a spreadsheet / Excel sheet](https://iq.opengenus.org/data-structure-for-spreadsheet/). This ivolve the idea of using Binary Tree.

Trie problems
-------------

1. Maximum XOR of two numbers

    This problem of finding the [Maximum XOR of two numbers](https://iq.opengenus.org/maximum-xor-trie/) involve the use of Trie data structure which is not obvious from the problem statement.

1. Longest Common Suffix

    This is a HOT interview problem. Finding the [Longest Common Suffix](https://iq.opengenus.org/longest-common-suffix/) cannot be done efficiently using Trie. Similarly, you can solve the [Longest Common Prefix](https://iq.opengenus.org/longest-common-prefix/) problem.

1. All Valid Word Breaks of a Sentence

    Word Break Problem is a standard problem that involve the use of DP and Greedy algorithms. This variant: [All Valid Word Breaks of a Sentence](https://iq.opengenus.org/all-valid-word-breaks/) use Trie to solve it optimally.

1. Autocomplete feature

    [Autocomplete feature](https://iq.opengenus.org/autocomplete-using-trie-data-structure/) is the most common feature of True data structure and Interviews revolve around this specific application.

Hash Map / Set
--------------

1. Collision Resolution

    There are [different Collision Resolution techniques](https://iq.opengenus.org/different-collision-resolution-techniques-in-hashing/) in a Hash Set and is frequently asked in Interviews.

1. LFU (Least Frequently Used) Cache

    Designing [LFU (Least Frequently Used) Cache](https://iq.opengenus.org/least-frequently-used-cache/) is a HOT interview question that involve the use of Hash Map. Another related problem is to design [Least Recently Used (LRU) Cache](https://iq.opengenus.org/implement-lru-cache/).

1. Quadratic Probing

    The concept of [Quadratic Probing](https://iq.opengenus.org/quadratic-probing/) and [Linear Probing](https://iq.opengenus.org/linear-probing/) are frequently asked in Interviews.

1. Hash Functions

    Knowing multiple examples of [Hash Functions](https://iq.opengenus.org/hash-functions-examples/) is important for Interview as it is the fundamental component of Hash Set. You may need to hash an array or set.

1. All O\`one Data Structure

    This problem is about designing a custom Data Structure. These type of problems are HOT in interview. Try: [All O\`one Data Structure](https://iq.opengenus.org/all-oone-data-structure/).

Sorting Algorithms
------------------

1. Search in Sorted 2D matrix

    The problem to [Search an element in Sorted 2D matrix](https://iq.opengenus.org/search-element-in-sorted-2d-matrix/) is a HOT interview problem.

1. Quick Sort

    [Quick Sort](https://iq.opengenus.org/quick-sort/) is the most important topic in Sorting. Revise [Time Complexity](https://iq.opengenus.org/time-and-space-complexity-of-quick-sort/) of Quick Sort, [Median of Medians](https://iq.opengenus.org/median-of-medians/) algorithm. Practice these [MCQs for Interviews](https://iq.opengenus.org/questions-on-quick-sort/).

1. Hybrid Sorting Algorithm

    The concept of [Hybrid Sorting](https://iq.opengenus.org/hybrid-sorting-algorithms/) presents to the Interviewer that you understand how real-world algorithms are designed. There is no single algorithm that works best for all cases.

1. Radix Sort

    Knowing a few Non-comparison based sorting algorithms is important and [Radix Sort](https://iq.opengenus.org/radix-sort/) is a strong example. [Analyze Time Complexity](https://iq.opengenus.org/time-complexity-for-non-comparison-based-sorting/) for Non-Comparison based Sorting algorithm.

1. Sort on Linked List

    Sorting on array and linked list are two different things. One may work well on array but not on Linked List and vice versa. [Insertion sort on Linked List](https://iq.opengenus.org/insertion-sort-linked-list/) is a must.

Mathematical Algorithms
-----------------------

1. Analyze Algorithms

    Having an overview of [Mathematics for Analyzing Algorithms](https://iq.opengenus.org/mathematics-for-analyzing-algorithms/) is a fundamental skill that you should have.

1. Permutation

    Permutation is a HOT interview questions. Problems like [K-th permutation](https://iq.opengenus.org/k-permutation-of-first-n-integers/), [Lexicographical Next Permutation](https://iq.opengenus.org/lexicographical-next-permutation/), [Heap's algorithm](https://iq.opengenus.org/heaps-algorithm-for-generating-permutations/) for generating permutations and [Counting derangements](https://iq.opengenus.org/counting-derangements/) are must practice problems.

1. N-th root of a number

    There are 3 mainstream algorithms to find the [N-th root of a number](https://iq.opengenus.org/n-th-root-of-number/) which everyone should have an idea of. You can also use [Binary Search](https://iq.opengenus.org/binary-search-algorithm/) to find [Square Root](https://iq.opengenus.org/square-root-of-number/) and [Cube Root](https://iq.opengenus.org/cube-root-using-binary-search/) of a number.

1. Regula Falsi Method

    [Regula Falsi Method](https://iq.opengenus.org/regula-falsi-method/) and [Newton Raphson Method](https://iq.opengenus.org/newton-raphson-method/) are used to find root of a Polynomial.

1. Find GCD

    [Binary GCD algorithm or Stein's algorithm](https://iq.opengenus.org/binary-gcd-algorithm/) is the most basic algorithm to find GCD of numbers efficiently. [Euclidean Algorithm](https://iq.opengenus.org/euclidean-algorithm-greatest-common-divisor-gcd/) is an efficient alternative.

1. Integer Factorization

    There are multiple [Integer Factorization Algorithms](https://iq.opengenus.org/integer-factorization-algorithms/) and [Pollard's rho algorithm](https://iq.opengenus.org/pollards-rho-algorithm/) for factorization is a must.

1. Generate 0 and 1

    This is a HOT interview problem. [Generate 0 and 1](https://iq.opengenus.org/generate-0-and-1-with-25-and-75-probability/) with 25% and 75% probability using standard random functions.

1. Swap two numbers

    This is a HOT MCQ interview problem. There are over [6 different techniques](https://iq.opengenus.org/swap-two-variables/) to swap two numbers.

String Algorithms
-----------------

1. Sub-strings of a string

    This is more like a brute force approach but candidates fail to implement or design an algorithm to [generate all sub-strings of a string](https://iq.opengenus.org/print-all-sub-strings/). This will help you solve most standard problems.

1. Number of palindromic substrings

    There are over 4 algorithms to find the [Number of palindromic substrings in a string](https://iq.opengenus.org/number-of-palindromic-substrings/) which involves use of Dynamic Programming and Modifed Manacher’s algorithm.

1. Pattern Search

    This is often asked in last Interview rounds at FAANG. [KMP algorithm](https://iq.opengenus.org/knuth-morris-pratt-algorithm/) is the standard technique while [Aho Corasick Algorithm](https://iq.opengenus.org/aho-corasick-algorithm/) helps you generalize the problem (asked frequently). [Rabin-Karp Pattern](https://iq.opengenus.org/rabin-karp-string-pattern-searching-algorithm/) Searching Algorithm is another efficient algorithm.

1. String Matching

    The concept of [String Hashing](https://iq.opengenus.org/string-hashing/) and [Rolling Hash](https://iq.opengenus.org/rolling-hash/) is important in String Matching as it takes O(N) time to match a string but only O(1) time to match an integer. [Shift OR algorithm](https://iq.opengenus.org/shift-or-algorithm-for-string-matching/) for String Matching and [String Matching using Bitset](https://iq.opengenus.org/string-matching-using-bitset/) is a MUST for Interviews.

1. Sorted order of characters

    The problem [Alien Dictionary problem](https://iq.opengenus.org/alien-dictionary/): Sorted order of characters is a HOT interview problem involving the concept of [Topological Sort](https://iq.opengenus.org/topological-sort-bfs/).

Dynamic Programming
-------------------

1. Basic problems on DP

    Standard DP problems that are common in Interviews are: [Longest Geometric Progression](https://iq.opengenus.org/longest-geometric-progression/), Calculate [Binomial Coefficient](https://iq.opengenus.org/calculate-binomial-coefficient/) and [Coin Change](https://iq.opengenus.org/the-coin-change-problem/) Problem.

1. Shortest Path with k edges

    This is a HOT interview problem where DP is applied on Graph problem. Finding the [Shortest Path with k edges](https://iq.opengenus.org/shortest-path-with-k-edges/) and [Number of paths with k edges](https://iq.opengenus.org/number-of-paths-with-k-edges/) with Dynamic Programming is a must practice.

1. Assembly Line Scheduling

    Scheduling problems are HOT interview problems. [Assembly Line Scheduling](https://iq.opengenus.org/assembly-line-scheduling-dp/) using DP is a must. Similarly, [Weighted Job scheduling](https://iq.opengenus.org/weighted-job-scheduling/) problem is a variant that is popular in Interviews.

1. Knapsack Problem

    Knapsack Problem is one of the most common Interview problems. [0-1 Knapsack Problem](https://iq.opengenus.org/0-1-knapsack-problem/) is a variant that uses Dynamic Programming.

1. Box Stacking Problem

    [Box Stacking Problem](https://iq.opengenus.org/box-stacking-problem/) is a common problem for FAANG interviews. A variant of this is asked in every 3 out of 4 interviews.

1. Travelling Salesman Problem

    [Travelling Salesman Problem](https://iq.opengenus.org/travelling-salesman-problem-dp/) and its variants are frequently asked in Interviews. It involves DP and bitmasking concepts. This is NP-Complete problem.

Greedy Algorithms
-----------------

1. Activity Selection Problem

    [Activity Selection Problem](https://iq.opengenus.org/activity-selection-problem-greedy-algorithm/) is one of the important problems where Greedy Algorithm is the direct solution. A variant of this: [Scheduling tasks to Minimize Lateness](https://iq.opengenus.org/scheduling-to-minimize-lateness/) is a critical Interview problem.

1. Egyptian Fraction Problem

    [Egyptian Fraction Problem](https://iq.opengenus.org/egyptian-fraction-problem/) is an important Interview problem that lies at the intersection of Mathematical and Greedy Algorithms.

1. Fractional Knapsack Problem

    [Fractional Knapsack Problem](https://iq.opengenus.org/fractional-knapsack/) is a variant of Knapsack Problems that can be solved using Greedy Algorithms.

1. Largest Cube Formed

    The problem of [Largest Cube Formed](https://iq.opengenus.org/find-the-largest-cube-formed-by-deleting-minimum-digits-from-a-number/) by deleting digits is interesting because of Time Complexity Analysis which many may get wrong in Interviews. It is O(N1/3 logN logN).

1. Maximal Clique

    Greedy Algorithms are also applied on Graph based problems. Finding [Single Maximal Clique](https://iq.opengenus.org/greedy-approach-to-find-single-maximal-clique/) is a challenging Interview problem that is asked.

1. Fitting Shelves Problem

    This problem of [Fitting Shelves](https://iq.opengenus.org/fitting-shelves-problem/) is HOT interview problem requiring Greedy Algorithm.

Backtracking problems
---------------------

1. Backtracking Algorithm for Sudoku

    [Solving Sudoku](https://iq.opengenus.org/backtracking-sudoku/) using Backtracking is a standard technique though the implementation strategy is challenging in an Interview setting.

1. 8 Queens Problem

    Solving [8 Queens Problem](https://iq.opengenus.org/8-queens-problem-backtracking/) using Backtracking is yet another important Interview problem. In similar chess setting, MCQs on number of possibilities of a given condition are asked frequently.

1. Subset Sum Problem

    Subset Sum Problem is a very common problem and many try to solve it using DP. Very few practice a variant where [Backtracking is applied](https://iq.opengenus.org/subset-sum-problem-backtracking/) on Subset Sum Problem.

1. Knight's Tour Problem

    In case of problems dealing with Chess, Backtracking is a potential technique. Solving [Knight's Tour Problem](https://iq.opengenus.org/knights-tour-problem/) is important for Interviews and involve Backtracking and Warnsdorff's algorithm.

1. Word Break Problem

    [Word Break Problem](https://iq.opengenus.org/word-break-problem/) is an important Interview problem that involve concepts like Backtracking and Dynamic Programming.

Divide and Conquer
------------------

1. Closest Pair of Points

    [Closest Pair of Points](https://iq.opengenus.org/closest-pair-of-points/) is the most important Interview Problem based on Geometry and uses the concept of Divide and Conquer to solve it.

1. Karatsuba Algorithm

    Very few realize that there are algorithms that optimized fundamental operations like Multiplication. [Karatsuba Algorithm](https://iq.opengenus.org/karatsuba-algorithm/) uses the concept of Divide and Conquer to multiply two number efficiently.

1. Floor in sorted array

    Finding [floor in sorted array](https://iq.opengenus.org/floor-in-sorted-array/) is an easy problem that is asked in Interviews. Having a good hold on [Binary Search](https://iq.opengenus.org/binary-search-iterative-recursive/) is a must.

1. Elements with difference K

    Finding [2 elements with difference K in a sorted array](https://iq.opengenus.org/elements-with-difference-k-in-sorted-array/) is a fundamental problem that many get wrong.

1. Peak Element in an Array

    The problem of finding [Peak Element in an Array](https://iq.opengenus.org/peak-element-in-array/) tests your understanding of Divide and Conquer technique.

Decrease and Conquer
--------------------

1. Fake Coin Problem

    [Fake Coin Problem](https://iq.opengenus.org/fake-coin-problem/) is the most frequently asked Interview Problem that involve the concept of Decrease and Conquer. Very few use this technique.

1. Basics of Decrease & Conquer

    Revise the basics of [Decrease and Conquer](https://iq.opengenus.org/decrease-and-conquer/) along with overview of fundamental problems.

Graph Algorithms
----------------

1. Islands Problem

    [Number of Islands in MxN matrix](https://iq.opengenus.org/number-of-islands/) (of 0 and 1) and [Making A Large Island](https://iq.opengenus.org/making-a-large-island/) by changing one 0 to 1 are HOT interview problems. This involve the concept of BFS and DFS.

1. Transitive Closure Of A Graph

    [Transitive Closure Of A Graph using Graph Powering](https://iq.opengenus.org/transitive-closure-graph-powering/) is a core concept that helps to solve several challenging interview problems.

1. Dijkstra's algorithm

    [Dijkstra's algorithm](https://iq.opengenus.org/dijkstras-algorithm-finding-shortest-path-between-all-nodes/) will help you solve shortest path problems. [Time Complexity](https://iq.opengenus.org/time-and-space-complexity-of-dijkstra-algorithm/) of Dijkstra's algorithm is a HOT interview problem.

1. Topological Sort

    Topological Sort is used to order nodes in a Graph linearly. There are multiple ways to implement Topological Sort like [using BFS](https://iq.opengenus.org/topological-sort-bfs/), [using DFS](https://iq.opengenus.org/topological-sorting-dfs/) and [Kahn's Algorithm](https://iq.opengenus.org/kahns-algorithm-topological-sort/). Understand the [applications](https://iq.opengenus.org/applications-of-topological-sort/) to understand the potential.

1. Bridges in Graph

    The problem of finding [all bridges in a Graph](https://iq.opengenus.org/find-all-bridges-in-graph/) is a hot Interview topic.

1. Hamiltonian Path & Cycle (+ Eulerian)

    The concept of [Hamiltonian Cycle](https://iq.opengenus.org/hamiltonian-cycle/) and [Hamiltonian Path](https://iq.opengenus.org/hamiltonian-path/) is critical for Interviews. Remember this is a NP-Hard problem but it is important to identify when an interview problem requires Hamiltonian Path (a path that goes through all nodes in the graph once).  
    The alternative concept is [Eulerian path](https://iq.opengenus.org/fundamentals-of-euler-path/) which is a path that covers all edges in the graph. It can be found efficiently (not NP-Hard) using algorithms like [Fleury's Algorithm](https://iq.opengenus.org/fleury-algorithm-finding-eulerian-tours-in-a-graph/).

1. Count all paths

    [Finding all paths](https://iq.opengenus.org/count-paths-from-top-left-to-bottom-right-of-a-matrix/) is a way to count the paths but there exists other optimal ways where we can find the the total count without finding the actual paths.

1. Minimum Spanning Tree

    The concept of Minimum Spanning Tree is important. [Kruskal Minimum Spanning Tree](https://iq.opengenus.org/kruskal-minimum-spanning-tree-algorithm/) Algorithm and [Prim Minimum Spanning Tree](https://iq.opengenus.org/prim-minimum-spanning-tree-algorithm/) Algorithm are two core algorithms to find MST. Several graph based problems can be solved easily using MST like the [Water Distribution problem in a village](https://iq.opengenus.org/water-distribution/).

Computational Geometry
----------------------

1. Number of integral points

    This problem of finding the [Number of integral points](https://iq.opengenus.org/integral-points-between-two-points/) between two points is a basic Interview problem. This involves [Pick's theorem](https://iq.opengenus.org/picks-theorem/). A variant is [Number of Integral points inside a triangle](https://iq.opengenus.org/number-of-integral-points-inside-triangle/).

1. Oriented area of a triangle

    [Oriented area of a triangle](https://iq.opengenus.org/oriented-area-of-triangle/) is an important Interview problem for Computational Geometry.

1. Furthest Pair of Points

    Closest Pair of Points is a standard problem yet [Furthest Pair of Points](https://iq.opengenus.org/furthest-pair-of-points/) is becoming a common questions in Interviews. It involves Rotating Calipers method.

Game Theory
-----------

1. Game of Kayle

    Game Theory problems are rare in Interviews but there are 2 concepts that are tested. [Sprague-Grundy Theorem and Game of Kayle](https://iq.opengenus.org/sprague-grundy-theorem-game-of-kayle/) is one core concept.

Time Complexity Analysis
------------------------

1. Dynamic Array

    [Time Complexity Analysis of Dynamic Array](https://iq.opengenus.org/time-complexity-of-dynamic-array/) is a HOT interview questions. Candidates are asked how it works better than standard Array.

1. Multiplication

    This is a tricky interview question. Many candidate think multiplication is a simple operation but it is not. Understanding the [Time Complexity Analysis of Multiplication](https://iq.opengenus.org/time-complexity-of-multiplication/) is important.

1. Interpolation Search

    Binary Search is a common theme among interviews and [Time Complexity of Interpolation Search](https://iq.opengenus.org/time-complexity-of-interpolation-search/) is a HOT follow-up question in such cases.

Advanced problems
-----------------

1. Range Minimum query

    The problem of Range Minimum query is common in advanced Interview rounds in FAANG. This can be solved using [Segment Tree](https://iq.opengenus.org/range-minimum-query-segment-tree/) and [Square Root Decomposition](https://iq.opengenus.org/range-minimum-query-square-root-decomposition/).

1. Distinct Elements

    The problem of finding [Number of Distinct elements in a range](https://iq.opengenus.org/number-of-distinct-elements-in-given-range/) is a HOT interview problem. A follow-up interview question is to [support single element updates](https://iq.opengenus.org/distinct-elements-in-range-query-with-single-element-updation/).

1. Count inversions in array

    This is another HOT interview problem in advanced rounds: [Count inversions in an array](https://iq.opengenus.org/count-inversions-in-an-array-using-fenwick-tree/). This is solved using the idea of [Fenwick Tree](https://iq.opengenus.org/fenwick-tree-range-product/).

1. Longest Increasing Subsequence

    The problem of Longest Increasing Subsequence is a standard problem that is solved using [Binary Search and Dynamic Programming](https://iq.opengenus.org/longest-increasing-subsequence/). The challenge is to use [Fenwick Tree to solve LIS problem](https://iq.opengenus.org/longest-increasing-subsequence-fenwick-tree/).

    find [Longest Common Increasing Subsequence](https://iq.opengenus.org/longest-common-increasing-subsequence/) and

    [Longest Increasing Consecutive Subsequence](https://iq.opengenus.org/longest-increasing-consecutive-subsequence/).
