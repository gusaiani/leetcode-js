const countAndSay = require("../countAndSay");

test("For n = 1", () => {
  expect(countAndSay(1)).toEqual("1");
});

test("For n = 2", () => {
  expect(countAndSay(2)).toEqual("11");
});

test("For n = 3", () => {
  expect(countAndSay(3)).toEqual("21");
});

test("For n = 4", () => {
  expect(countAndSay(4)).toEqual("1211");
});

test("For n = 5", () => {
  expect(countAndSay(5)).toEqual("111221");
});
