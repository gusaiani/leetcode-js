const solve = require('../longestCommonPrefix');

test('first case', () => {
  const array = ["flower", "flow", "flight"];

  expect(solve(array)).toEqual("fl");
});

test('second case', () => {
  const array = ["dog","racecar","car"];

  expect(solve(array)).toEqual("");
});