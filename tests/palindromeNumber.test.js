const palindromeNumber = require("../palindromeNumber");

test("For x = 121", () => {
  expect(palindromeNumber(121)).toBe(true);
});

test("For x = -121", () => {
  expect(palindromeNumber(-121)).toBe(false);
});

test("For x = 10", () => {
  expect(palindromeNumber(10)).toBe(false);
});
