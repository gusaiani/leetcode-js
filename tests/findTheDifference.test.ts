import { findTheDifference } from "../findTheDifference";

test("added letter appended at the end", () => {
  expect(findTheDifference("abcd", "abcde")).toBe("e");
});

test("handles empty source string", () => {
  expect(findTheDifference("", "y")).toBe("y");
});

test("t is shuffled, added letter at the front", () => {
  expect(findTheDifference("ab", "bac")).toBe("c");
});

test("t is shuffled, added letter in the middle", () => {
  expect(findTheDifference("abcd", "cbade")).toBe("e");
});

test("fully reordered with added letter", () => {
  expect(findTheDifference("xyz", "zaxy")).toBe("a");
});

test("added letter is a duplicate of an existing one", () => {
  expect(findTheDifference("aea", "aaea")).toBe("a");
});

test("duplicates with shuffled order", () => {
  expect(findTheDifference("aabbcc", "cbacbad")).toBe("d");
});

test("single character source", () => {
  expect(findTheDifference("a", "aa")).toBe("a");
});
