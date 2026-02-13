const wework = require('../weworkLargestTable');

test('First one', () => {
  const grid = [
    ['1', '0', '1', '1', '1'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
  ]

  expect(wework(grid)).toBe(9)
});

test('Second one', () => {
  const grid = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
  ]

  expect(wework(grid)).toBe(6)
});
