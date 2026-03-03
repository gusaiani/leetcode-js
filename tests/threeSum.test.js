const { threeSum } = require("../threeSum");

// Example 1: [-1,0,1,2,-1,-4] → [[-1,-1,2],[-1,0,1]]
test("two valid triplets", () => {
  const result = threeSum([-1, 0, 1, 2, -1, -4]);
  expect(result).toHaveLength(2);
  expect(result).toContainEqual([-1, -1, 2]);
  expect(result).toContainEqual([-1, 0, 1]);
});

// Example 2: [0,1,1] → [] (no valid triplet)
test("no valid triplet", () => {
  expect(threeSum([0, 1, 1])).toEqual([]);
});

// Example 3: [0,0,0] → [[0,0,0]]
test("all zeros", () => {
  expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
});

// Duplicates in input — result must not contain duplicate triplets
test("no duplicate triplets in result", () => {
  const result = threeSum([-2, 0, 0, 2, 2]);
  expect(result).toHaveLength(1);
  expect(result).toContainEqual([-2, 0, 2]);
});

// All positive — no valid triplet
test("all positive numbers", () => {
  expect(threeSum([1, 2, 3])).toEqual([]);
});

// Two elements — cannot form a triplet
test("fewer than three elements", () => {
  expect(threeSum([0, 0])).toEqual([]);
});
