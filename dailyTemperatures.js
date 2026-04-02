/**
 * LeetCode 739. Daily Temperatures
 * https://leetcode.com/problems/daily-temperatures/
 *
 * Given an array of integers temperatures represents the daily temperatures,
 * return an array answer such that answer[i] is the number of days you have
 * to wait after the ith day to get a warmer temperature. If there is no
 * future day for which this is possible, keep answer[i] == 0.
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  const stack = []; // This will store indices

  for (let i = 0; i < n; i++) {
    // While stack is not empty AND current temp is higher than stack's top temp
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop();
      result[prevIndex] = i - prevIndex;
    }

    // Push current index to stack to find its warmer day later
    stack.push(i);
  }

  return result;
}

module.exports = { dailyTemperatures };
