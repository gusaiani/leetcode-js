const { dailyTemperatures } = require("../dailyTemperatures");

// Example 1: mixed pattern
test("mixed temperatures", () => {
  expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
});

// Strictly increasing — each day waits exactly 1
test("strictly increasing temperatures", () => {
  expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
});

// Strictly decreasing — no warmer day ever comes
test("strictly decreasing temperatures", () => {
  expect(dailyTemperatures([90, 80, 70, 60])).toEqual([0, 0, 0, 0]);
});

// All same — no day is strictly warmer
test("all same temperature", () => {
  expect(dailyTemperatures([70, 70, 70])).toEqual([0, 0, 0]);
});

// Single element
test("single day", () => {
  expect(dailyTemperatures([55])).toEqual([0]);
});

// Warmer day is far away
test("warmer day several steps ahead", () => {
  expect(dailyTemperatures([30, 60, 90])).toEqual([1, 1, 0]);
});

// Last element is always 0
test("last element is always 0", () => {
  const result = dailyTemperatures([50, 40, 80]);
  expect(result[result.length - 1]).toBe(0);
});
