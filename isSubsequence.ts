/**
 * LeetCode 392. Is Subsequence
 * https://leetcode.com/problems/is-subsequence/
 *
 * Given two strings s and t, return true if s is a subsequence of t,
 * or false otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original
 * string by deleting some (can be none) of the characters without disturbing
 * the relative positions of the remaining characters.
 */

function isSubsequence(s: string, t: string): boolean {
  if (s === "") return true;
  if (t === "") return false;

  const arr2 = t.split("");

  let foundChars = 0;

  for (const char of arr2) {
    if (char === s.charAt(foundChars)) {
      foundChars++;
      if (foundChars === s.length) return true;
    }
  }

  return false;
}

export { isSubsequence };
