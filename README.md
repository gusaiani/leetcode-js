![Tests](https://github.com/gusaiani/leetcode-js/actions/workflows/test.yml/badge.svg)
![Lint](https://github.com/gusaiani/leetcode-js/actions/workflows/lint.yml/badge.svg)

# LeetCode in JavaScript

Solutions to LeetCode problems in JavaScript, each with a test suite.

## Solved Problems

| #    | Problem                                                                                                                                 | Difficulty | Approach               | Time             | Space        |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------- | ---------------- | ------------ |
| 1    | [Two Sum](https://leetcode.com/problems/two-sum/)                                                                                       | Easy       | Hash map               | O(n)             | O(n)         |
| 3    | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)         | Medium     | Sliding window         | O(n)             | O(min(n, m)) |
| 15   | [3Sum](https://leetcode.com/problems/3sum/)                                                                                             | Medium     | Sort + two pointers    | O(n²)            | O(n)         |
| 23   | [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)                                                            | Hard       | Divide and conquer     | O(n log k)       | O(1)         |
| 4    | [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)                                               | Hard       | Binary search          | O(log min(m, n)) | O(1)         |
| 6    | [Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/)                                                                   | Medium     | Row simulation         | O(n)             | O(n)         |
| 9    | [Palindrome Number](https://leetcode.com/problems/palindrome-number/)                                                                   | Easy       | Two pointers on string | O(n)             | O(n)         |
| 12   | [Integer to Roman](https://leetcode.com/problems/integer-to-roman/)                                                                     | Medium     | Greedy (value table)   | O(1)             | O(1)         |
| 13   | [Roman to Integer](https://leetcode.com/problems/roman-to-integer/)                                                                     | Easy       | Linear scan            | O(n)             | O(1)         |
| 14   | [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)                                                           | Easy       | Vertical scan          | O(n × m)         | O(m)         |
| 20   | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)                                                                   | Easy       | Recursive matching     | O(n²)            | O(n)         |
| 21   | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)                                                         | Easy       | Iterative merge        | O(n + m)         | O(n + m)     |
| 26   | [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)                               | Easy       | Reduce                 | O(n)             | O(1)         |
| 28   | [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) | Easy       | KMP algorithm          | O(n + m)         | O(m)         |
| 35   | [Search Insert Position](https://leetcode.com/problems/search-insert-position/)                                                         | Easy       | Linear scan            | O(n)             | O(1)         |
| 38   | [Count and Say](https://leetcode.com/problems/count-and-say/)                                                                           | Medium     | Recursion              | O(2ⁿ)            | O(2ⁿ)        |
| 39   | [Combination Sum](https://leetcode.com/problems/combination-sum/)                                                                       | Medium     | Backtracking           | O(n^(t/m))       | O(t/m)       |
| 51   | [N-Queens](https://leetcode.com/problems/n-queens/description/)                                                                         | Hard       | Backtracking           | O(n!)            | O(n²)        |
| 53   | [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)                                                         | Medium     | Kadane's algorithm     | O(n)             | O(1)         |
| 55   | [Jump Game](https://leetcode.com/problems/jump-game/)                                                                                   | Medium     | Greedy (max reach)     | O(n)             | O(1)         |
| 56   | [Merge Intervals](https://leetcode.com/problems/merge-intervals/)                                                                       | Medium     | Sort + linear merge    | O(n log n)       | O(n)         |
| 58   | [Length of Last Word](https://leetcode.com/problems/length-of-last-word/)                                                               | Easy       | Reverse scan           | O(n)             | O(n)         |
| 66   | [Plus One](https://leetcode.com/problems/plus-one/)                                                                                     | Easy       | Right-to-left carry    | O(n)             | O(1)         |
| 70   | [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)                                                                       | Easy       | Dynamic programming    | O(n)             | O(1)         |
| 83   | [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)                                 | Easy       | Iterative skip         | O(n)             | O(1)         |
| 88   | [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)                                                                 | Easy       | Two pointers (reverse) | O(m + n)         | O(1)         |
| 102  | [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)                                   | Medium     | BFS with queue         | O(n)             | O(n)         |
| 104  | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)                                             | Easy       | DFS recursion          | O(n)             | O(h)         |
| 112  | [Path Sum](https://leetcode.com/problems/path-sum/)                                                                                     | Easy       | DFS recursion          | O(n)             | O(h)         |
| 121  | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)                                       | Easy       | Greedy (min tracking)  | O(n)             | O(1)         |
| 125  | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)                                                                     | Easy       | Two pointers           | O(n)             | O(1)         |
| 136  | [Single Number](https://leetcode.com/problems/single-number/)                                                                           | Easy       | Set (add/delete)       | O(n)             | O(n)         |
| 141  | [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)                                                                   | Easy       | Hash set (references)  | O(n)             | O(n)         |
| 146  | [LRU Cache](https://leetcode.com/problems/lru-cache/)                                                                                   | Medium     | Doubly linked list + map | O(1)           | O(n)         |
| 153  | [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)                             | Medium     | Linear scan            | O(n)             | O(1)         |
| 155  | [Min Stack](https://leetcode.com/problems/min-stack/)                                                                                   | Medium     | Two stacks             | O(1)             | O(n)         |
| 169  | [Majority Element](https://leetcode.com/problems/majority-element/)                                                                     | Easy       | Hash map               | O(n)             | O(n)         |
| 198  | [House Robber](https://leetcode.com/problems/house-robber/description/)                                                                 | Easy       | DP (two variables)     | O(n)             | O(1)         |
| 200  | [Number of Islands](https://leetcode.com/problems/number-of-islands/)                                                                   | Medium     | DFS recursion (sink)   | O(m × n)         | O(m × n)     |
| 202  | [Happy Number](https://leetcode.com/problems/happy-number/)                                                                             | Easy       | Recursion (4-cycle)    | O(log n)         | O(log n)     |
| 208  | [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)                                               | Medium     | Trie (prefix tree)     | O(m)             | O(m)         |
| 206  | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)                                                               | Easy       | Iterative reversal     | O(n)             | O(1)         |
| 226  | [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)                                                                 | Easy       | DFS recursion          | O(n)             | O(h)         |
| 207  | [Course Schedule](https://leetcode.com/problems/course-schedule/description/)                                                           | Medium     | Topological sort (BFS) | O(V + E)         | O(V + E)     |
| 215  | [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)                                       | Medium     | Quickselect            | O(n)             | O(1)         |
| 217  | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)                                                                 | Easy       | Hash map               | O(n)             | O(n)         |
| 232  | [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)                                             | Easy       | Two stacks (lazy)      | O(1) amortized   | O(n)         |
| 238  | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)                                             | Medium     | Prefix/suffix product  | O(n)             | O(1)         |
| 242  | [Valid Anagram](https://leetcode.com/problems/valid-anagram/)                                                                           | Easy       | Hash map               | O(n)             | O(n)         |
| 268  | [Missing Number](https://leetcode.com/problems/missing-number/)                                                                         | Easy       | Gauss sum formula      | O(n)             | O(1)         |
| 283  | [Move Zeroes](https://leetcode.com/problems/move-zeroes/)                                                                               | Easy       | Two pointers           | O(n)             | O(1)         |
| 322  | [Coin Change](https://leetcode.com/problems/coin-change/)                                                                               | Medium     | Dynamic programming    | O(n × amount)    | O(amount)    |
| 347  | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)                                                       | Medium     | Hash map + sort        | O(n log n)       | O(n)         |
| 392  | [Is Subsequence](https://leetcode.com/problems/is-subsequence/)                                                                         | Easy       | Two pointers           | O(n)             | O(n)         |
| 409  | [Longest Palindrome](https://leetcode.com/problems/longest-palindrome/)                                                                 | Easy       | Hash map (freq count)  | O(n)             | O(n)         |
| 448  | [Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)                     | Easy       | Set complement         | O(n)             | O(n)         |
| 461  | [Hamming Distance](https://leetcode.com/problems/hamming-distance/)                                                                     | Easy       | XOR + bit count        | O(1)             | O(1)         |
| 543  | [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)                                                       | Easy       | DFS recursion          | O(n)             | O(h)         |
| 560  | [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)                                                           | Medium     | Prefix sum + hash map  | O(n)             | O(n)         |
| 572  | [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)                                                       | Easy       | DFS recursion          | O(m × n)         | O(h)         |
| 733  | [Flood Fill](https://leetcode.com/problems/flood-fill/)                                                                                 | Easy       | DFS recursion (matrix) | O(m × n)         | O(m × n)     |
| 739  | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)                                                                 | Medium     | Monotonic stack        | O(n)             | O(n)         |
| 876  | [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)                                                   | Easy       | Fast/slow pointers     | O(n)             | O(1)         |
| 994  | [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)                                                                       | Medium     | Multi-source BFS       | O(m × n)         | O(m × n)     |
| 1235 | [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/)                                     | Hard       | DP + binary search     | O(n log n)       | O(n)         |
| 3379 | [Transformed Array](https://leetcode.com/problems/transformed-array/)                                                                   | Easy       | Modular arithmetic     | O(n)             | O(n)         |

## Setup

```
bun install
```

## Scripts

| Command                | Description                        |
| ---------------------- | ---------------------------------- |
| `bun test`             | Run all tests                      |
| `bun test --watch`     | Run tests in watch mode            |
| `bun run lint`         | Check for linting errors           |
| `bun run lint:fix`     | Auto-fix linting errors            |
| `bun run format`       | Format all files with Biome        |
| `bun run format:check` | Check formatting without modifying |

## Code Quality

- **Testing** — Every solution has a dedicated test file ([Jest](https://jestjs.io/)-compatible, run via [Bun](https://bun.sh/))
- **Linting & Formatting** — [Biome](https://biomejs.dev/) for linting and consistent style
- **CI** — GitHub Actions run tests, linting, and format checks on every PR
- **Pre-push hook** — [Husky](https://typicode.github.io/husky/) blocks pushes that fail tests, linting, or formatting
