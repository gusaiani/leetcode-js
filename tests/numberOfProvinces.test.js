const { findCircleNum } = require("../numberOfProvinces");

test("two separate provinces", () => {
  expect(
    findCircleNum([
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ]),
  ).toBe(2);
});

test("three isolated cities", () => {
  expect(
    findCircleNum([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ]),
  ).toBe(3);
});

test("single city", () => {
  expect(findCircleNum([[1]])).toBe(1);
});

test("all cities connected directly", () => {
  expect(
    findCircleNum([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ]),
  ).toBe(1);
});

test("chain connectivity forms one province", () => {
  expect(
    findCircleNum([
      [1, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 1],
    ]),
  ).toBe(2);
});
