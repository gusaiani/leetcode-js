const { subarraySumEqualsK } = require("../subarraySumEqualsK");

// Example 1: [1,1,1], k=2 → 2 ([1,1] starting at index 0 and at index 1)
test("two subarrays sum to k", () => {
  expect(subarraySumEqualsK([1, 1, 1], 2)).toBe(2);
});

// Example 2: [1,2,3], k=3 → 2 ([3] and [1,2])
test("multiple non-overlapping subarrays", () => {
  expect(subarraySumEqualsK([1, 2, 3], 3)).toBe(2);
});

// Single element equals k
test("single element equals k", () => {
  expect(subarraySumEqualsK([5], 5)).toBe(1);
});

// Single element does not equal k
test("single element does not equal k", () => {
  expect(subarraySumEqualsK([1], 2)).toBe(0);
});

// Negative numbers
test("array with negative numbers", () => {
  expect(subarraySumEqualsK([1, -1, 1], 1)).toBe(3);
});

// No valid subarray
test("no subarray sums to k", () => {
  expect(subarraySumEqualsK([1, 2, 3], 7)).toBe(0);
});

// Entire array sums to k
test("entire array sums to k", () => {
  expect(subarraySumEqualsK([1, 2, 3], 6)).toBe(1);
});
