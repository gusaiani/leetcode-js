/**
 * LeetCode 560. Subarray Sum Equals K
 * https://leetcode.com/problems/subarray-sum-equals-k/
 *
 * Given an array of integers nums and an integer k, return the total number
 * of subarrays whose sum equals to k.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySumEqualsK(nums, k) {
  const prefixSumCounts = new Map();

  prefixSumCounts.set(0, 1);

  let totalSubarrays = 0;
  let runningSum = 0;

  for (let num of nums) {
    runningSum += num;

    // The value we need to have seen previously to make the current subarray sum to k
    const targetPreviousSum = runningSum - k;

    if (prefixSumCounts.has(targetPreviousSum)) {
      totalSubarrays += prefixSumCounts.get(targetPreviousSum);
    }

    const currentCount = prefixSumCounts.get(runningSum) || 0;
    prefixSumCounts.set(runningSum, currentCount + 1);
  }

  return totalSubarrays;
}

module.exports = { subarraySumEqualsK };
