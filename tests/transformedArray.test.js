const transformedArray = require('../transformedArray')

test('first one', () => {
  expect(transformedArray([3, -2, 1, 1])).toEqual([1, 1, 1, 3])
})

test('second one', () => {
  expect(transformedArray([-1, 4, -1])).toEqual([-1, -1, 4])
})