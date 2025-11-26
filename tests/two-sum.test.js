// two-sum.test.js

const twoSum = require("../two-sum");

describe("twoSum", () => {
  test("Example 1: nums = [2,7,11,15], target = 9", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);

    // Order can be [0,1] or [1,0], so just sort to compare
    const sorted = [...result].sort((a, b) => a - b);
    expect(sorted).toEqual([0, 1]);
    expect(nums[result[0]] + nums[result[1]]).toBe(target);
  });

  test("Example 2: nums = [3,2,4], target = 6", () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = twoSum(nums, target);
    const sorted = [...result].sort((a, b) => a - b);

    expect(sorted).toEqual([1, 2]);
    expect(nums[result[0]] + nums[result[1]]).toBe(target);
  });

  test("Example 3: nums = [3,3], target = 6", () => {
    const nums = [3, 3];
    const target = 6;
    const result = twoSum(nums, target);
    const sorted = [...result].sort((a, b) => a - b);

    expect(sorted).toEqual([0, 1]);
    expect(nums[result[0]] + nums[result[1]]).toBe(target);
  });

  test("Works with negative numbers", () => {
    const nums = [-3, 4, 3, 90];
    const target = 0;
    const result = twoSum(nums, target);

    expect(nums[result[0]] + nums[result[1]]).toBe(target);
    expect(result[0]).not.toBe(result[1]);
  });

  test("Works with zero and duplicates", () => {
    const nums = [0, 4, 3, 0];
    const target = 0;
    const result = twoSum(nums, target);

    expect(nums[result[0]] + nums[result[1]]).toBe(target);
    expect(result[0]).not.toBe(result[1]);
  });

  test("Throws if no solution (defensive, though LC guarantees one)", () => {
    const nums = [1, 2, 3];
    const target = 100;
    expect(() => twoSum(nums, target)).toThrow("No solution found");
  });
});
