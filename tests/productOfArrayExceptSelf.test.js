const { productExceptSelf } = require("../productOfArrayExceptSelf");

// Example 1
test("basic case", () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

// Two elements
test("two elements", () => {
  expect(productExceptSelf([2, 3])).toEqual([3, 2]);
});

// Single zero — only the zero's position gets the full product
test("single zero in array", () => {
  expect(productExceptSelf([1, 0])).toEqual([0, 1]);
});

// Two zeros — all products are zero
test("two zeros in array", () => {
  expect(productExceptSelf([0, 0])).toEqual([0, 0]);
});

// Negative numbers
test("negative numbers", () => {
  expect(productExceptSelf([-2, 3, -4])).toEqual([-12, 8, -6]);
});

// All ones
test("all ones", () => {
  expect(productExceptSelf([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
});
