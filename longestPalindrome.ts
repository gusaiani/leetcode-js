/**
 * LeetCode 409. Longest Palindrome
 * https://leetcode.com/problems/longest-palindrome/
 *
 * Given a string s which consists of lowercase or uppercase letters, return
 * the length of the longest palindrome that can be built with those letters.
 *
 * Letters are case sensitive, so "Aa" is not considered a palindrome.
 */

function longestPalindrome(s: string): number {
  if (s.length === 0) return 0;

  const charCount = new Map<string, number>();
  let longestPalindrome = 0;
  let hasOddCountedChar = false;

  for (const char of s) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char)! + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  for (const [, value] of charCount) {
    longestPalindrome += Math.floor(value / 2) * 2;
    if (value % 2 !== 0) hasOddCountedChar = true;
  }

  return hasOddCountedChar ? longestPalindrome + 1 : longestPalindrome;
}

export { longestPalindrome };
