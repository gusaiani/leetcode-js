const { canJump } = require("../jumpGame");

// Example 1: nums = [2,3,1,1,4] → true
test("can reach last index", () => {
  expect(canJump([2, 3, 1, 1, 4])).toBe(true);
});

// Example 2: nums = [3,2,1,0,4] → false (stuck at index 3)
test("cannot reach last index", () => {
  expect(canJump([3, 2, 1, 0, 4])).toBe(false);
});

test("single element", () => {
  expect(canJump([0])).toBe(true);
});

test("all zeros except first", () => {
  expect(canJump([1, 0, 0])).toBe(false);
});

test("large jump at start", () => {
  expect(canJump([5, 0, 0, 0, 0])).toBe(true);
});

test("zero in the middle but reachable around it", () => {
  expect(canJump([2, 0, 1, 0, 1])).toBe(false);
});
