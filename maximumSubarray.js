/**
 * LeetCode 53. Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * Given an integer array nums, find the subarray with the largest sum,
 * and return its sum.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(numbers) {
  // If the array is empty, the maximum sum is 0.
  if (numbers.length === 0) {
    return 0;
  }

  // We initialize both trackers with the first element of the array.
  // 'currentSubarraySum' tracks the best sum ending at the current position.
  // 'highestSumFoundSoFar' tracks the global maximum across the entire array.
  let currentSubarraySum = numbers[0];
  let highestSumFoundSoFar = numbers[0];

  // We start iterating from the second element (index 1).
  for (let i = 1; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    /**
     * DECISION POINT:
     * We compare the current number itself against (current number + previous subarray sum).
     * * If the current number is greater than the combined sum, it means the
     * previous subarray was "dragging us down" (negative), so we discard
     * it and start a fresh subarray at the current number.
     */
    currentSubarraySum = Math.max(
      currentNumber,
      currentSubarraySum + currentNumber,
    );

    // After updating the current subarray, we check if it's the best we've ever seen.
    if (currentSubarraySum > highestSumFoundSoFar) {
      highestSumFoundSoFar = currentSubarraySum;
    }
  }

  return highestSumFoundSoFar;
}

module.exports = { maxSubArray };
