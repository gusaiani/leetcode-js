const { containsDuplicate } = require("../containsDuplicate");

// Example 1: [1,2,3,1] → true
test("contains duplicate", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
});

// Example 2: [1,2,3,4] → false
test("all distinct", () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});

// Example 3: [1,1,1,3,3,4,3,2,4,2] → true
test("multiple duplicates", () => {
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});

test("single element", () => {
  expect(containsDuplicate([1])).toBe(false);
});
