const { plusOne } = require("../plusOne");

// Example 1: [1,2,3] → [1,2,4]
test("[1,2,3] → [1,2,4]", () => {
  expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
});

// Example 2: [4,3,2,1] → [4,3,2,2]
test("[4,3,2,1] → [4,3,2,2]", () => {
  expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
});

// Example 3: [9] → [1,0]
test("[9] → [1,0]", () => {
  expect(plusOne([9])).toEqual([1, 0]);
});

// Single digit, no carry
test("[0] → [1]", () => {
  expect(plusOne([0])).toEqual([1]);
});

// Carry propagation through multiple digits
test("[9,9] → [1,0,0]", () => {
  expect(plusOne([9, 9])).toEqual([1, 0, 0]);
});

test("[9,9,9] → [1,0,0,0]", () => {
  expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
});

// Carry only in last digit
test("[1,9] → [2,0]", () => {
  expect(plusOne([1, 9])).toEqual([2, 0]);
});

// Partial carry propagation
test("[2,9,9] → [3,0,0]", () => {
  expect(plusOne([2, 9, 9])).toEqual([3, 0, 0]);
});

// No carry at all
test("[1,0,0] → [1,0,1]", () => {
  expect(plusOne([1, 0, 0])).toEqual([1, 0, 1]);
});

// Large number
test("[8,9,9,9] → [9,0,0,0]", () => {
  expect(plusOne([8, 9, 9, 9])).toEqual([9, 0, 0, 0]);
});
