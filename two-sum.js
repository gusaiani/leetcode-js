// two-sum.js

/**
 * O(n) time, O(n) space
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const indexByValue = new Map(); // value -> index
  console.log(indexByValue);

  for (let i = 0; i < nums.length; i++) {
    console.log(indexByValue);

    const current = nums[i];
    const complement = target - current;

    if (indexByValue.has(complement)) {
      return [indexByValue.get(complement), i];
    }

    indexByValue.set(current, i);
    console.log("---");
  }

  // Problem guarantees exactly one solution, so we never reach here
  throw new Error("No solution found");
}

module.exports = twoSum;