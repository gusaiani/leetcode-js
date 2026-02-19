const { moveZeroes } = require("../moveZeroes");

// Example 1: [0,1,0,3,12] → [1,3,12,0,0]
test("moves zeroes to end", () => {
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  expect(nums).toEqual([1, 3, 12, 0, 0]);
});

// Example 2: [0] → [0]
test("single zero", () => {
  const nums = [0];
  moveZeroes(nums);
  expect(nums).toEqual([0]);
});

test("no zeroes", () => {
  const nums = [1, 2, 3];
  moveZeroes(nums);
  expect(nums).toEqual([1, 2, 3]);
});

test("all zeroes", () => {
  const nums = [0, 0, 0];
  moveZeroes(nums);
  expect(nums).toEqual([0, 0, 0]);
});

test("zero at end already", () => {
  const nums = [1, 2, 0];
  moveZeroes(nums);
  expect(nums).toEqual([1, 2, 0]);
});

test("maintains relative order of non-zero elements", () => {
  const nums = [0, 3, 0, 1, 0, 2];
  moveZeroes(nums);
  expect(nums).toEqual([3, 1, 2, 0, 0, 0]);
});
