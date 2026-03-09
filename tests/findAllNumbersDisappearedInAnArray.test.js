const { findDisappearedNumbers } = require("../findAllNumbersDisappearedInAnArray");

// Example 1: [4,3,2,7,8,2,3,1] → [5,6]
test("two missing numbers", () => {
  expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
});

// Example 2: [1,1] → [2]
test("one missing number with duplicate", () => {
  expect(findDisappearedNumbers([1, 1])).toEqual([2]);
});

// No missing numbers (all present exactly once)
test("no missing numbers", () => {
  expect(findDisappearedNumbers([1, 2, 3, 4])).toEqual([]);
});

// All duplicates of 1 → [2, 3, ..., n]
test("all elements are 1", () => {
  expect(findDisappearedNumbers([1, 1, 1, 1])).toEqual([2, 3, 4]);
});

// Single element equal to 1 → no missing
test("single element, no missing", () => {
  expect(findDisappearedNumbers([1])).toEqual([]);
});

// Single element not equal to 1 → [1]
test("single element, one missing", () => {
  expect(findDisappearedNumbers([2, 2])).toEqual([1]);
});
