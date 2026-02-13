const { searchInsert } = require("../searchInsertPosition");

// Example 1: target found in array
test("[1,3,5,6], target 5 → 2", () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
});

// Example 2: target not found, insert in middle
test("[1,3,5,6], target 2 → 1", () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
});

// Example 3: target not found, insert at end
test("[1,3,5,6], target 7 → 4", () => {
  expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
});

// Insert at the beginning
test("[1,3,5,6], target 0 → 0", () => {
  expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
});

// Single element — target found
test("[1], target 1 → 0", () => {
  expect(searchInsert([1], 1)).toBe(0);
});

// Single element — insert before
test("[3], target 1 → 0", () => {
  expect(searchInsert([3], 1)).toBe(0);
});

// Single element — insert after
test("[3], target 5 → 1", () => {
  expect(searchInsert([3], 5)).toBe(1);
});

// Target matches first element
test("[2,4,6,8], target 2 → 0", () => {
  expect(searchInsert([2, 4, 6, 8], 2)).toBe(0);
});

// Target matches last element
test("[2,4,6,8], target 8 → 3", () => {
  expect(searchInsert([2, 4, 6, 8], 8)).toBe(3);
});

// Insert between every pair
test("[10,20,30], target 15 → 1", () => {
  expect(searchInsert([10, 20, 30], 15)).toBe(1);
});

test("[10,20,30], target 25 → 2", () => {
  expect(searchInsert([10, 20, 30], 25)).toBe(2);
});

// Negative numbers
test("[-5,-3,0,4], target -4 → 1", () => {
  expect(searchInsert([-5, -3, 0, 4], -4)).toBe(1);
});
