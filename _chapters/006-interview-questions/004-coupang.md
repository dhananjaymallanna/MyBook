---
title: Coupang  Questions
slug: Coupang  Questions
abstract: Coupang  Questions
---

Round 1: Coding Round
Desing and code a Twitter like system.


Round 2: High Level Design round
Current Projects
Design Stock Exchanges System: A user can have multiple watchlist, and each watchlist can have multiple stocks across different exchanges.


Round 3: Low Level Design Round
Design and code movie ticketing system
Handle concurrent transactions.


Design 4: Focus Round
Discuss about the projects and deep dive
Cultural fit

-------------

Design a rate limiter, similar to https://leetcode.com/problems/design-hit-counter/description/


-----------

Given two strings, str, pattern, find # of discontinous matches of pattern in str. None of the matched letters can be next to each other in str.
examples:


pattern="cat", str="catapult", result=1, explantation: CatApulT
pattern="cat", str="catatapult", result=2, explantation: CatcAtapulT, CatcatApulT, catCatApulT

https://leetcode.com/discuss/interview-question/5854062/Sr-Staff-coupangor-Phone-screen

```java 

public class DiscontinuousPatternMatch {

    // Recursive helper method to count discontinuous matches
    private int countMatches(String str, String pattern, int strIndex, int patIndex, Integer[][] memo) {
        // If we've matched the entire pattern, return 1 as this is a valid match
        if (patIndex == pattern.length()) {
            return 1;
        }

        // If we've exhausted the string, no more matches are possible
        if (strIndex >= str.length()) {
            return 0;
        }

        // Check if the result is already computed and stored in the memoization table
        if (memo[strIndex][patIndex] != null) {
            return memo[strIndex][patIndex];
        }

        // Variable to store the total number of valid matches
        int matches = 0;

        // Search for the current character of the pattern in the string from the current position
        for (int i = strIndex; i < str.length(); i++) {
            // If we find a matching character
            if (str.charAt(i) == pattern.charAt(patIndex)) {
                // Recursively try to match the rest of the pattern
                matches += countMatches(str, pattern, i + 2, patIndex + 1, memo); // Move to the next character in pattern and skip at least 1 char in str
            }
        }

        // Store the result in the memoization table
        memo[strIndex][patIndex] = matches;
        return matches;
    }

    // Public method to initiate the recursive matching
    public int findDiscontinuousMatches(String str, String pattern) {
        // Initialize a memoization table to store results for subproblems
        Integer[][] memo = new Integer[str.length()][pattern.length()];
        // Start the recursive matching process from index 0 for both the string and the pattern
        return countMatches(str, pattern, 0, 0, memo);
    }

    public static void main(String[] args) {
        DiscontinuousPatternMatch dpm = new DiscontinuousPatternMatch();

        String str1 = "catapult";
        String pattern1 = "cat";
        System.out.println("Matches for 'catapult' with 'cat': " + dpm.findDiscontinuousMatches(str1, pattern1));  // Output: 1

        String str2 = "catatapult";
        String pattern2 = "cat";
        System.out.println("Matches for 'catatapult' with 'cat': " + dpm.findDiscontinuousMatches(str2, pattern2));  // Output: 2
    }
}


```

-----------
Throttling Gateway

https://hackmd.io/@mizugakun/H1mA50BZY

-----------

https://assets.leetcode.com/users/images/0dede80b-9d1e-4b60-83b5-4c4c4e0d311c_1609486472.671342.png
