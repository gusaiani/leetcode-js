const { topKFrequent } = require("../topKFrequentElements");

// Results may come in any order — sort before comparing
const sorted = (arr) => [...arr].sort((a, b) => a - b);

// Example 1: top 2 most frequent
test("returns top 2 frequent elements", () => {
  expect(sorted(topKFrequent([1, 1, 1, 2, 2, 3], 2))).toEqual([1, 2]);
});

// Example 2: k equals array length
test("k equals number of unique elements", () => {
  expect(sorted(topKFrequent([1], 1))).toEqual([1]);
});

// Top 1 most frequent
test("returns single most frequent element", () => {
  expect(topKFrequent([1, 1, 1, 2, 2, 3], 1)).toEqual([1]);
});

// Negative numbers
test("handles negative numbers", () => {
  expect(sorted(topKFrequent([-1, -1, -2], 1))).toEqual([-1]);
});

// All elements appear the same number of times — any k elements are valid
test("all elements equally frequent — result has correct length", () => {
  const result = topKFrequent([1, 2, 3], 2);
  expect(result).toHaveLength(2);
});

// Large k — return all unique elements
test("k equals total unique count", () => {
  expect(sorted(topKFrequent([1, 1, 2, 2, 3, 3], 3))).toEqual([1, 2, 3]);
});
