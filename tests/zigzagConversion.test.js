const solve = require("../zigzagConversion");

test("PAYPALISHIRING in 3 rows", () => {
  expect(solve("PAYPALISHIRING", 3)).toEqual("PAHNAPLSIIGYIR");
});

test("PAYPALISHIRING in 4 rows", () => {
  expect(solve("PAYPALISHIRING", 4)).toEqual("PINALSIGYAHRPI");
});

test("ABC in 1 row", () => {
  expect(solve("ABC", 1)).toEqual("ABC");
});
