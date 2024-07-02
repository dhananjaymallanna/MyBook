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

### Q. Find the maximum element in the given range

### Q. Find the sum of elements in the given range of an array

#### Special DS

    Segmented tree.

Segment Trees can be used to solve Range Min/Max & Sum Queries and Range Update Queries in O (log n) time.

##### Applications of a Segment Tree

- Finding range sum/product, range max/min, prefix sum/product, etc
- Computational geometry
- Geographic information systemsStatic and Dynamic RMQ (Range Minimum Query)Storing segments in an arbitrary manner

#### Working

Basically, a Segment Tree has only three operations:

- Building Tree: in this step, we create the structure of the segment tree variable and initialise it
- Updating Tree: during this step, we change the tree by updating the value in the array at a point or over an interval
- Querying Tree: we may use this operation to run a range query on the array

In a Segment Tree, the array is stored at the leaves of the tree, while the internal nodes store information about segments represented by its children. The internal nodes are formed in a bottom-up manner by merging the information from its children nodes.

#### Segment Tree Class

```java
class SegmentTree {
       int[] tree;
       int size;
  
       SegmentTree(int[] array) {
           size = array.length;
           tree = new int[2 * size];
           buildTree(array, 0, 0, size - 1);
       }
}
```

Note the size of the segment tree is 2 times the array length.Take a look at the complete binary tree then,

```mermaid!
%%{init: {'theme':'forest',"messageAlign": "center","flowchart": { 'useMaxWidth':false,
"htmlLabels": true
}}}%% 
      graph TD
        0
        0 -->1
        0 -->2
        1 -->3
        1 -->4
        2 -->5
        2 -->6
```

If there are x nodes at leaf then x/2 on the level higher and x/4 above that it goes on until you have a single root node on top.

So this becomes mathematically as

```Text
With x nodes at leaf level

Min length of segment tree array  = x+x/2+x/4+.....+1

And  x/2+x/4+.....+1 shall addup to x-1 hence the length of segment tree is 2x.
```

##### To build the tree

Each element in the Segment tree  will be , where  is the node’s index, and the leaf node represents the elements in the array .

```java
private void buildTree(int[] array, int treeIndex, int left, int right) {
    if (left == right) {
        //base case, that is, filling in the leaf nodes.
        tree[treeIndex] = array[left];
        return;
    }
    int mid = left + (right - left) / 2;
    buildTree(array, 2 * treeIndex + 1, left, mid);
    buildTree(array, 2 * treeIndex + 2, mid + 1, right);
    //NOTE: this will store the info you want it do, in this case i am taking min
    // it can be sum or max or anything that you want this segment tree to do.
    tree[treeIndex] = Math.min(tree[2 * treeIndex + 1], tree[2 * treeIndex + 2]);
}
```

Initial call to do this:

```java
buildTree(array, 0, 0, size - 1);
```

To query

The range queries can be served in O(long(n)).

```java

private int query(int treeIndex, int left, int right, int queryLeft, int queryRight) {
    if (queryLeft <= left && right <= queryRight)
        return tree[treeIndex];
    int mid = left + (right - left) / 2;
    int minValue = Integer.MAX_VALUE;
    if (queryLeft <= mid)
        minValue = Math.min(minValue, query(2 * treeIndex + 1, left, mid, queryLeft, queryRight));
    if (queryRight > mid)
        minValue = Math.min(minValue, query(2 * treeIndex + 2, mid + 1, right, queryLeft, queryRight));
    return minValue;
}

int query(int left, int right) {
    return query(0, 0, size - 1, left, right);
}

```

To update the date at given index in an index tree.

go and update the value at the index and update the remaining values on the backtracking path.
Exactly same logic as the case of creation (Building) of the segmented tree.

```java
private void updateUtil(int treeIndex, int left, int right, int index, int val) {
    if (left == right) { // Leaf node
        tree[treeIndex] = val;
        return;
    }

    int mid = left + (right - left) / 2;

    if (index <= mid)
        updateUtil(2 * treeIndex + 1, left, mid, index, val);
    else
        updateUtil(2 * treeIndex + 2, mid + 1, right, index, val);

    tree[treeIndex] = tree[2 * treeIndex + 1] + tree[2 * treeIndex + 2];
}

public void update(int index, int val) {
    updateUtil(0, 0, size - 1, index, val);
}
```
