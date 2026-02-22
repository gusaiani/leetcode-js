const { rob } = require("../houseRobber");

// Example 1: skip index 1 → rob 1 + 3 = 4
test("rob non-adjacent houses for max value", () => {
  expect(rob([1, 2, 3, 1])).toBe(4);
});

// Example 2: rob index 0, 2, 4 → 2 + 3 + 1 = 6, or 2 + 9 = 11, best is 2+9=11 no wait
// [2,7,9,3,1]: best is 2+9+1=12
test("multiple houses, best path skips optimally", () => {
  expect(rob([2, 7, 9, 3, 1])).toBe(12);
});

// Single house — rob it
test("single house", () => {
  expect(rob([5])).toBe(5);
});

// Two houses — rob the larger one
test("two houses", () => {
  expect(rob([2, 7])).toBe(7);
});

// All same value — rob every other house
test("all same value", () => {
  expect(rob([4, 4, 4, 4])).toBe(8);
});

// Increasing values — robbing last and second-to-last might not be optimal
test("strictly increasing values", () => {
  expect(rob([1, 2, 3, 4, 5])).toBe(9);
});

// One very large house surrounded by small ones
test("one dominant house", () => {
  expect(rob([1, 100, 1])).toBe(100);
});
