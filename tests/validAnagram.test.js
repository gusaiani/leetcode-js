const { isAnagram } = require("../validAnagram");

// Example 1: s = "anagram", t = "nagaram" → true
test("valid anagram", () => {
  expect(isAnagram("anagram", "nagaram")).toBe(true);
});

// Example 2: s = "rat", t = "car" → false
test("not an anagram", () => {
  expect(isAnagram("rat", "car")).toBe(false);
});

test("different lengths", () => {
  expect(isAnagram("ab", "a")).toBe(false);
});

test("same string", () => {
  expect(isAnagram("abc", "abc")).toBe(true);
});

test("single character match", () => {
  expect(isAnagram("a", "a")).toBe(true);
});
