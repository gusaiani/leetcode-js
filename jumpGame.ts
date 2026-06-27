/**
 * LeetCode 55. Jump Game
 * https://leetcode.com/problems/jump-game/description/
 *
 * You are given an integer array nums. You are initially positioned at the
 * first index of the array. Each element nums[i] represents your maximum jump
 * length at that position. Return true if you can reach the last index, or
 * false otherwise.
 */

function canJump(nums: number[]): boolean {
  let maxReach = 0;
  const target = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false;
    }

    maxReach = Math.max(maxReach, i + nums[i]);

    if (maxReach >= target) {
      return true;
    }
  }

  return maxReach >= target;
}

export { canJump };
