const { intToRoman } = require("../integerToRoman");

test("3749 → MMMDCCXLIX", () => {
  expect(intToRoman(3749)).toBe("MMMDCCXLIX");
});

test("58 → LVIII", () => {
  expect(intToRoman(58)).toBe("LVIII");
});

test("1994 → MCMXCIV", () => {
  expect(intToRoman(1994)).toBe("MCMXCIV");
});

test("1 → I", () => {
  expect(intToRoman(1)).toBe("I");
});

test("3999 → MMMCMXCIX", () => {
  expect(intToRoman(3999)).toBe("MMMCMXCIX");
});

test("4 → IV", () => {
  expect(intToRoman(4)).toBe("IV");
});

test("9 → IX", () => {
  expect(intToRoman(9)).toBe("IX");
});

test("40 → XL", () => {
  expect(intToRoman(40)).toBe("XL");
});

test("90 → XC", () => {
  expect(intToRoman(90)).toBe("XC");
});

test("400 → CD", () => {
  expect(intToRoman(400)).toBe("CD");
});

test("900 → CM", () => {
  expect(intToRoman(900)).toBe("CM");
});

test("1000 → M", () => {
  expect(intToRoman(1000)).toBe("M");
});

test("500 → D", () => {
  expect(intToRoman(500)).toBe("D");
});

test("100 → C", () => {
  expect(intToRoman(100)).toBe("C");
});
