const { numIslands } = require("../numberOfIslands");

// Example 1: single island
test("one island - connected block", () => {
  const grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ];
  expect(numIslands(grid)).toBe(1);
});

// Example 2: three islands
test("three islands - separated land masses", () => {
  const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];
  expect(numIslands(grid)).toBe(3);
});

// All water
test("no islands - all water", () => {
  const grid = [
    ["0", "0", "0"],
    ["0", "0", "0"],
  ];
  expect(numIslands(grid)).toBe(0);
});

// All land
test("one island - entire grid is land", () => {
  const grid = [
    ["1", "1"],
    ["1", "1"],
  ];
  expect(numIslands(grid)).toBe(1);
});

// Single cell
test("single cell - land", () => {
  expect(numIslands([["1"]])).toBe(1);
});

test("single cell - water", () => {
  expect(numIslands([["0"]])).toBe(0);
});

// Diagonal land cells don't connect
test("diagonal cells do not form an island", () => {
  const grid = [
    ["1", "0", "1"],
    ["0", "1", "0"],
    ["1", "0", "1"],
  ];
  expect(numIslands(grid)).toBe(5);
});

// Thin horizontal island
test("one island - single row of land", () => {
  const grid = [["1", "1", "1", "1", "1"]];
  expect(numIslands(grid)).toBe(1);
});
