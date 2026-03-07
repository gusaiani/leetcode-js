/**
 * LeetCode 88. Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array/
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing
 * order, and two integers m and n, representing the number of elements in
 * nums1 and nums2 respectively.
 *
 * Merge nums2 into nums1 as one sorted array. The final sorted array should
 * not be returned by the function, but instead be stored inside nums1.
 * To accommodate this, nums1 has a length of m + n, where the first m elements
 * denote the elements that should be merged, and the last n elements are 0
 * and should be ignored.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
function merge(nums1, m, nums2, n) {
  // 1. Initialize three pointers
  let p1 = m - 1; // Pointer for the last valid element in nums1
  let p2 = n - 1; // Pointer for the last element in nums2
  let p = m + n - 1; // Pointer for the last position in nums1

  // 2. Iterate while there are elements to compare in both arrays
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  // 3. If elements remain in nums2, copy them over
  // (If elements remain in nums1, they are already in the correct place)
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
}

module.exports = { merge };
