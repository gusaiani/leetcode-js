![Tests](https://github.com/gusaiani/leetcode-js/actions/workflows/test.yml/badge.svg)
![Lint](https://github.com/gusaiani/leetcode-js/actions/workflows/lint.yml/badge.svg)

# LeetCode in JavaScript

Solutions to LeetCode problems in JavaScript, each with a test suite.

## Solved Problems

| #    | Problem                                                                                                                                 | Difficulty | Approach               | Time             | Space        |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------- | ---------------- | ------------ |
| 1    | [Two Sum](https://leetcode.com/problems/two-sum/)                                                                                       | Easy       | Hash map               | O(n)             | O(n)         |
| 3    | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)         | Medium     | Sliding window         | O(n)             | O(min(n, m)) |
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
| 58   | [Length of Last Word](https://leetcode.com/problems/length-of-last-word/)                                                               | Easy       | Reverse scan           | O(n)             | O(n)         |
| 66   | [Plus One](https://leetcode.com/problems/plus-one/)                                                                                     | Easy       | Right-to-left carry    | O(n)             | O(1)         |
| 83   | [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)                                 | Easy       | Iterative skip         | O(n)             | O(1)         |
| 112  | [Path Sum](https://leetcode.com/problems/path-sum/)                                                                                     | Easy       | DFS recursion          | O(n)             | O(h)         |
| 268  | [Missing Number](https://leetcode.com/problems/missing-number/)                                                                         | Easy       | Gauss sum formula      | O(n)             | O(1)         |
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
