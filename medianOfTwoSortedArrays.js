/**
 * LeetCode 4. Median of Two Sorted Arrays
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * Given two sorted arrays nums1 and nums2 of size m and n respectively,
 * return the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 *
 * Constraints:
 *  - nums1.length == m, nums2.length == n
 *  - 0 <= m <= 1000, 0 <= n <= 1000
 *  - 1 <= m + n <= 2000
 *  - -10^6 <= nums1[i], nums2[i] <= 10^6
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  const half = Math.floor((m + n + 1) / 2);

  let low = 0;
  let hi = m;

  while (low <= hi) {
    const i = Math.floor((low + hi) / 2);
    const j = half - i;

    const nums1Left = i > 0 ? nums1[i - 1] : -Infinity;
    const nums1Right = i < m ? nums1[i] : Infinity;
    const nums2Left = j > 0 ? nums2[j - 1] : -Infinity;
    const nums2Right = j < n ? nums2[j] : Infinity;

    if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
      if ((m + n) % 2 === 1) {
        return Math.max(nums1Left, nums2Left);
      } else {
        return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2;
      }
    } else if (nums1Left > nums2Right) {
      hi = i - 1;
    } else {
      low = i + 1;
    }
  }
}

module.exports = { findMedianSortedArrays };
