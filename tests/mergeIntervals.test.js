jest.setTimeout(0);
const { merge } = require("../mergeIntervals");

// Example 1
test("overlapping intervals merge together", () => {
  expect(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ]),
  ).toEqual([
    [1, 6],
    [8, 10],
    [15, 18],
  ]);
});

// Example 2
test("one interval absorbs another", () => {
  expect(
    merge([
      [1, 4],
      [4, 5],
    ]),
  ).toEqual([[1, 5]]);
});

test("single interval", () => {
  expect(merge([[1, 3]])).toEqual([[1, 3]]);
});

test("no overlaps", () => {
  expect(
    merge([
      [1, 2],
      [4, 5],
      [7, 8],
    ]),
  ).toEqual([
    [1, 2],
    [4, 5],
    [7, 8],
  ]);
});

test("all intervals merge into one", () => {
  expect(
    merge([
      [1, 4],
      [2, 5],
      [3, 6],
    ]),
  ).toEqual([[1, 6]]);
});

test("unsorted input", () => {
  expect(
    merge([
      [3, 4],
      [1, 2],
      [2, 3],
    ]),
  ).toEqual([[1, 4]]);
});

test("interval fully contained within another", () => {
  expect(
    merge([
      [1, 10],
      [3, 5],
    ]),
  ).toEqual([[1, 10]]);
});
