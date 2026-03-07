const { isSubsequence } = require("../isSubsequence");

// Example 1: s="abc", t="ahbgdc" → true
test("basic subsequence match", () => {
  expect(isSubsequence("abc", "ahbgdc")).toBe(true);
});

// Example 2: s="axc", t="ahbgdc" → false
test("not a subsequence", () => {
  expect(isSubsequence("axc", "ahbgdc")).toBe(false);
});

// Empty s is always a subsequence
test("empty s", () => {
  expect(isSubsequence("", "ahbgdc")).toBe(true);
});

// Empty t with non-empty s → false
test("empty t with non-empty s", () => {
  expect(isSubsequence("a", "")).toBe(false);
});

// Both empty → true
test("both empty", () => {
  expect(isSubsequence("", "")).toBe(true);
});

// s equals t
test("s equals t", () => {
  expect(isSubsequence("abc", "abc")).toBe(true);
});

// s longer than t → false
test("s longer than t", () => {
  expect(isSubsequence("abcd", "abc")).toBe(false);
});

// Single character match
test("single character match", () => {
  expect(isSubsequence("b", "abc")).toBe(true);
});

// Single character no match
test("single character no match", () => {
  expect(isSubsequence("z", "abc")).toBe(false);
});
