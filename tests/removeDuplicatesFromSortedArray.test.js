const removeDuplicatesFromSortedArray = require('../removeDuplicatesFromSortedArray');

test('Should return length of 2', () => {
  const arr = [1, 1, 2]
  expect(removeDuplicatesFromSortedArray(arr)).toEqual(2)
});

test('Should return length of 5', () => {
  const arr = [0,0,1,1,1,2,2,3,3,4]
  expect(removeDuplicatesFromSortedArray(arr)).toEqual(5)
});
