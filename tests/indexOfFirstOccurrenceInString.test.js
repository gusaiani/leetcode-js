const solve = require("../indexOfFirstOccurrenceInString");

test("first one", () => {
  expect(solve("sadbutsad", "sad")).toEqual(0);
});

test("second one", () => {
  expect(solve("leetcode", "leeto")).toEqual(-1);
});

test("third one", () => {
  expect(solve("abc", "c")).toEqual(2);
});

test("fourth one", () => {
  expect(solve("mississippi", "issip")).toEqual(4);
});
