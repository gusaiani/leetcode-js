const wework = require('../weworkOffices');

test('First one', () => {
  grid = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
  ]

  expect(wework(grid)).toBe(3)
});

test('Second one', () => {
  grid = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 0, 1]
  ]

  expect(wework(grid)).toBe(2)
});


