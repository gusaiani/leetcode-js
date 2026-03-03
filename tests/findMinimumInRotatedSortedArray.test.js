const {
  findMinimumInRotatedSortedArray,
} = require("../findMinimumInRotatedSortedArray");

// Example 1: [3,4,5,1,2] → 1
test("rotated at index 3", () => {
  expect(findMinimumInRotatedSortedArray([3, 4, 5, 1, 2])).toBe(1);
});

// Example 2: [4,5,6,7,0,1,2] → 0
test("rotated at index 4", () => {
  expect(findMinimumInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2])).toBe(0);
});

// Example 3: [11,13,15,17] → 11 (no rotation)
test("not rotated", () => {
  expect(findMinimumInRotatedSortedArray([11, 13, 15, 17])).toBe(11);
});

// Single element
test("single element", () => {
  expect(findMinimumInRotatedSortedArray([1])).toBe(1);
});

// Two elements, rotated
test("two elements rotated", () => {
  expect(findMinimumInRotatedSortedArray([2, 1])).toBe(1);
});

// Two elements, not rotated
test("two elements not rotated", () => {
  expect(findMinimumInRotatedSortedArray([1, 2])).toBe(1);
});

// Minimum at the last index
test("rotated by one position", () => {
  expect(findMinimumInRotatedSortedArray([2, 3, 4, 5, 1])).toBe(1);
});
