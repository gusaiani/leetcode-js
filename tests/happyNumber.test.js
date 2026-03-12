const { isHappy } = require("../happyNumber");

// Example 1: 19 → true (1² + 9² = 82 → 68 → 100 → 1)
test("19 is happy", () => {
  expect(isHappy(19)).toBe(true);
});

// Example 2: 2 → false (enters a cycle)
test("2 is not happy", () => {
  expect(isHappy(2)).toBe(false);
});

// 1 is always happy (base case)
test("1 is happy", () => {
  expect(isHappy(1)).toBe(true);
});

// 7 is happy
test("7 is happy", () => {
  expect(isHappy(7)).toBe(true);
});

// 4 is not happy
test("4 is not happy", () => {
  expect(isHappy(4)).toBe(false);
});

// Large happy number
test("100 is happy", () => {
  expect(isHappy(100)).toBe(true);
});
