// https://leetcode.com/problems/length-of-last-word/description/

const solve = require("../lengthOfLastWord");

test("Hello World", () => {
  expect(solve("Hello World")).toEqual(5);
});

test("   fly me   to   the moon ", () => {
  expect(solve("   fly me   to   the moon ")).toEqual(4);
});

test("luffy is still joyboy", () => {
  expect(solve("luffy is still joyboy")).toEqual(6);
});
