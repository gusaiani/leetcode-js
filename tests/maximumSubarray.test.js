const { maxSubArray } = require("../maximumSubarray");

// Example 1: subarray [4,-1,2,1] sums to 6
test("mixed positive and negative values", () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});

// Example 2: single element
test("single element", () => {
  expect(maxSubArray([1])).toBe(1);
});

// Example 3: all positive — entire array is the answer
test("all positive values", () => {
  expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
});

// All negative — must still pick one element
test("all negative values returns least negative", () => {
  expect(maxSubArray([-2, -1, -3])).toBe(-1);
});

// Single negative element
test("single negative element", () => {
  expect(maxSubArray([-1])).toBe(-1);
});

// Large negative followed by positives
test("best subarray starts mid-array", () => {
  expect(maxSubArray([-100, 1, 2, 3])).toBe(6);
});

// Alternating — best is any single positive
test("alternating positive and negative", () => {
  expect(maxSubArray([1, -1, 1, -1, 1])).toBe(1);
});
