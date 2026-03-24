const { floodFill } = require("../floodFill");

test("example 1 — fill connected region", () => {
  expect(
    floodFill(
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2,
    ),
  ).toEqual([
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ]);
});

test("example 2 — same color, no change", () => {
  expect(
    floodFill(
      [
        [0, 0, 0],
        [0, 0, 0],
      ],
      0,
      0,
      0,
    ),
  ).toEqual([
    [0, 0, 0],
    [0, 0, 0],
  ]);
});

test("single pixel", () => {
  expect(floodFill([[5]], 0, 0, 3)).toEqual([[3]]);
});

test("corner start — only fills connected", () => {
  expect(
    floodFill(
      [
        [1, 0],
        [0, 1],
      ],
      0,
      0,
      2,
    ),
  ).toEqual([
    [2, 0],
    [0, 1],
  ]);
});
