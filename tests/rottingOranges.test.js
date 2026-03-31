const { orangesRotting } = require("../rottingOranges");

test("all oranges rot in 4 minutes", () => {
  expect(
    orangesRotting([
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1],
    ]),
  ).toBe(4);
});

test("impossible to rot all oranges", () => {
  expect(
    orangesRotting([
      [2, 1, 1],
      [0, 1, 1],
      [1, 0, 1],
    ]),
  ).toBe(-1);
});

test("no fresh oranges to begin with", () => {
  expect(orangesRotting([[0, 2]])).toBe(0);
});

test("single fresh orange adjacent to rotten", () => {
  expect(orangesRotting([[2, 1]])).toBe(1);
});

test("grid with only empty cells", () => {
  expect(orangesRotting([[0]])).toBe(0);
});
