const solve = require('../romanToInteger');

test('I', () => {
  expect(solve('I')).toEqual(1);
});

test('III', () => {
  expect(solve('III')).toEqual(3);
});

test('IV', () => {
  expect(solve('IV')).toEqual(4);
});

test('IX', () => {
  expect(solve('IX')).toEqual(9);
});

test('V', () => {
  expect(solve('V')).toEqual(5);
});

test('VIII', () => {
  expect(solve('VIII')).toEqual(8);
});

test('X', () => {
  expect(solve('X')).toEqual(10);
});

test('LVIII', () => {
expect(solve('LVIII')).toEqual(58);
});

test('MCMXCIV', () => {
  expect(solve('MCMXCIV')).toEqual(1994);
});