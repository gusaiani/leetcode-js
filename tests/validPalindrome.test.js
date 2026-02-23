const { validPalindrome } = require("../validPalindrome");

// Example 1: "A man, a plan, a canal: Panama" → true
test("classic palindrome with punctuation", () => {
  expect(validPalindrome("A man, a plan, a canal: Panama")).toBe(true);
});

// Example 2: "race a car" → false
test("not a palindrome", () => {
  expect(validPalindrome("race a car")).toBe(false);
});

// Example 3: " " → true (empty after filtering)
test("only spaces", () => {
  expect(validPalindrome(" ")).toBe(true);
});

test("single character", () => {
  expect(validPalindrome("a")).toBe(true);
});

test("two characters", () => {
  expect(validPalindrome("ab")).toBe(false);
});
