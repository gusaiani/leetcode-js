/**
 * LeetCode 238. Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/description/
 *
 * Given an integer array nums, return an array answer such that answer[i] is
 * equal to the product of all the elements of nums except nums[i].
 *
 * You must write an algorithm that runs in O(n) time and without using the
 * division operation.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const n = nums.length;
  const output = new Array(n).fill(1);

  // Pass 1: fill output[i] with the product of all elements to the LEFT
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    output[i] = prefix;
    prefix *= nums[i];
  }

  // Pass 2: multiply output[i] by the product of all elements to the RIGHT
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= suffix;
    suffix *= nums[i];
  }

  return output;
}

module.exports = { productExceptSelf };
