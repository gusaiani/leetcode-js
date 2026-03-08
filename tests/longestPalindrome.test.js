const { longestPalindrome } = require("../longestPalindrome");

// Example 1: "abccccdd" → 7 ("dccaccd" or similar)
test("mixed characters", () => {
  expect(longestPalindrome("abccccdd")).toBe(7);
});

// Example 2: "a" → 1
test("single character", () => {
  expect(longestPalindrome("a")).toBe(1);
});

// All same characters → full length
test("all same characters", () => {
  expect(longestPalindrome("aaaa")).toBe(4);
});

// All characters appear once → 1 (pick any one as center)
test("all unique characters", () => {
  expect(longestPalindrome("abcde")).toBe(1);
});

// Even counts only → full length
test("all even frequency characters", () => {
  expect(longestPalindrome("aabbcc")).toBe(6);
});

// Case sensitive: 'A' and 'a' are different
test("case sensitive — uppercase and lowercase treated differently", () => {
  expect(longestPalindrome("Aa")).toBe(1);
});

// One odd-count character in otherwise even set → full length (center slot used)
test("one odd-count character", () => {
  expect(longestPalindrome("aabbc")).toBe(5);
});
