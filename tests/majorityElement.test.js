const { majorityElement } = require("../majorityElement");

// Example 1: [3,2,3] → 3
test("majority at edges", () => {
  expect(majorityElement([3, 2, 3])).toBe(3);
});

// Example 2: [2,2,1,1,1,2,2] → 2
test("majority in middle", () => {
  expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
});

test("single element", () => {
  expect(majorityElement([1])).toBe(1);
});

test("all same", () => {
  expect(majorityElement([5, 5, 5])).toBe(5);
});

test("two elements", () => {
  expect(majorityElement([1, 1, 2])).toBe(1);
});
