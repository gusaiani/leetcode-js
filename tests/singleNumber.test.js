const { singleNumber } = require("../singleNumber");

// Example 1: [2,2,1] → 1
test("single at end", () => {
  expect(singleNumber([2, 2, 1])).toBe(1);
});

// Example 2: [4,1,2,1,2] → 4
test("single at start", () => {
  expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
});

// Example 3: [1] → 1
test("single element", () => {
  expect(singleNumber([1])).toBe(1);
});

test("single in middle", () => {
  expect(singleNumber([1, 3, 1])).toBe(3);
});

test("negative numbers", () => {
  expect(singleNumber([-1, -1, -2])).toBe(-2);
});
