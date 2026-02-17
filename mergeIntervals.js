/**
 * LeetCode 56. Merge Intervals
 * https://leetcode.com/problems/merge-intervals/description/
 *
 * Given an array of intervals where intervals[i] = [starti, endi], merge all
 * overlapping intervals, and return an array of the non-overlapping intervals
 * that cover all the intervals in the input.
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  if (intervals.length < 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];

    // Is there overlap?
    if (current[0] <= lastMerged[1]) {
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      merged.push(current);
    }
  }

  return merged;
}

module.exports = { merge };
