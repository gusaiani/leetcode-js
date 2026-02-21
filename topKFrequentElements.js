/**
 * LeetCode 347. Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 *
 * Given an integer array nums and an integer k, return the k most frequent
 * elements. You may return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const frequencies = new Map();

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    if (frequencies.has(number)) {
      const previousCount = frequencies.get(number);
      frequencies.set(number, previousCount + 1);
    } else {
      frequencies.set(number, 1);
    }
  }

  const sorted = [...frequencies.entries()].sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map((entry) => entry[0]);
}

module.exports = { topKFrequent };
