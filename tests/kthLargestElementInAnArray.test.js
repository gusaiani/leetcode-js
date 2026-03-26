const { findKthLargest } = require("../kthLargestElementInAnArray");

test("example 1 — k=2 in mixed array", () => {
  expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
});

test("example 2 — k=4 with duplicates", () => {
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
});

test("single element", () => {
  expect(findKthLargest([1], 1)).toBe(1);
});

test("k equals array length — returns minimum", () => {
  expect(findKthLargest([7, 10, 4, 3, 20, 15], 6)).toBe(3);
});

test("k=1 — returns maximum", () => {
  expect(findKthLargest([7, 10, 4, 3, 20, 15], 1)).toBe(20);
});

test("all same elements", () => {
  expect(findKthLargest([5, 5, 5, 5], 2)).toBe(5);
});

test("negative numbers", () => {
  expect(findKthLargest([-1, -2, -3, -4], 2)).toBe(-2);
});

/*
[3,2,1,5,6,4]

3 
*/
