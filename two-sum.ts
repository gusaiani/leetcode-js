// two-sum.ts

/**
 * O(n) time, O(n) space
 */
function twoSum(nums: number[], target: number): number[] {
  const indexByValue = new Map<number, number>(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const complement = target - current;

    if (indexByValue.has(complement)) {
      return [indexByValue.get(complement)!, i];
    }

    indexByValue.set(current, i);
  }

  // Problem guarantees exactly one solution, so we never reach here
  throw new Error("No solution found");
}

export default twoSum;
