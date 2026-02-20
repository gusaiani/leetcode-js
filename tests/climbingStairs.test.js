const { climbStairs } = require("../climbingStairs");

// Example 1: n = 2 → 2 (1+1, 2)
test("two steps", () => {
  expect(climbStairs(2)).toBe(2);
});

// Example 2: n = 3 → 3 (1+1+1, 1+2, 2+1)
test("three steps", () => {
  expect(climbStairs(3)).toBe(3);
});

test("one step", () => {
  expect(climbStairs(1)).toBe(1);
});

test("four steps", () => {
  expect(climbStairs(4)).toBe(5);
});

test("ten steps", () => {
  expect(climbStairs(10)).toBe(89);
});
