const { merge } = require("../mergeSortedArray");

// Example 1: nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3 → [1,2,2,3,5,6]
test("merges two non-empty arrays", () => {
  const nums1 = [1, 2, 3, 0, 0, 0];
  merge(nums1, 3, [2, 5, 6], 3);
  expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
});

// Example 2: nums1=[1], m=1, nums2=[], n=0 → [1]
test("nums2 is empty", () => {
  const nums1 = [1];
  merge(nums1, 1, [], 0);
  expect(nums1).toEqual([1]);
});

// Example 3: nums1=[0], m=0, nums2=[1], n=1 → [1]
test("nums1 is empty", () => {
  const nums1 = [0];
  merge(nums1, 0, [1], 1);
  expect(nums1).toEqual([1]);
});

// All elements of nums2 are smaller
test("nums2 elements all smaller than nums1", () => {
  const nums1 = [4, 5, 6, 0, 0, 0];
  merge(nums1, 3, [1, 2, 3], 3);
  expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
});

// All elements of nums2 are larger
test("nums2 elements all larger than nums1", () => {
  const nums1 = [1, 2, 3, 0, 0, 0];
  merge(nums1, 3, [4, 5, 6], 3);
  expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
});

// Duplicate values across arrays
test("handles duplicate values", () => {
  const nums1 = [1, 2, 2, 0, 0];
  merge(nums1, 3, [2, 3], 2);
  expect(nums1).toEqual([1, 2, 2, 2, 3]);
});
