const { findMedianSortedArrays } = require("../medianOfTwoSortedArrays");

// Example 1: nums1 = [1,3], nums2 = [2] → 2.0
test("odd total length — median is middle element", () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2.0);
});

// Example 2: nums1 = [1,2], nums2 = [3,4] → 2.5
test("even total length — median is average of two middle elements", () => {
  expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
});

// One array is empty
test("nums1 is empty, odd length nums2", () => {
  expect(findMedianSortedArrays([], [1])).toBe(1.0);
});

test("nums2 is empty, even length nums1", () => {
  expect(findMedianSortedArrays([1, 2], [])).toBe(1.5);
});

test("nums1 is empty, even length nums2", () => {
  expect(findMedianSortedArrays([], [2, 3])).toBe(2.5);
});

// Single element each
test("single element each — even total", () => {
  expect(findMedianSortedArrays([1], [2])).toBe(1.5);
});

// Non-overlapping ranges
test("nums1 entirely before nums2", () => {
  expect(findMedianSortedArrays([1, 2], [3, 4, 5])).toBe(3.0);
});

test("nums1 entirely after nums2", () => {
  expect(findMedianSortedArrays([3, 4], [1, 2])).toBe(2.5);
});

// Interleaved arrays
test("interleaved arrays — odd total", () => {
  expect(findMedianSortedArrays([1, 3, 5], [2, 4])).toBe(3.0);
});

test("interleaved arrays — even total", () => {
  expect(findMedianSortedArrays([1, 3, 5, 7], [2, 4, 6, 8])).toBe(4.5);
});

// Duplicate values
test("arrays with duplicate values", () => {
  expect(findMedianSortedArrays([1, 1, 1], [1, 1, 1])).toBe(1.0);
});

// Negative numbers
test("arrays with negative numbers", () => {
  expect(findMedianSortedArrays([-5, -3, -1], [0, 2, 4])).toBe(-0.5);
});

// Different sizes
test("very different sizes", () => {
  expect(findMedianSortedArrays([1], [2, 3, 4, 5, 6])).toBe(3.5);
});
