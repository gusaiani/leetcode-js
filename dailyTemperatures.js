/**
 * LeetCode 739. Daily Temperatures
 * https://leetcode.com/problems/daily-temperatures/description/
 *
 * Given an array of integers temperatures represents the daily temperatures,
 * return an array answer such that answer[i] is the number of days you have
 * to wait after the i-th day to get a warmer temperature. If there is no
 * future day for which this is possible, keep answer[i] == 0 instead.
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
  const n = temperatures.length;
  const answer = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    // While current temp is warmer than the temp at the top of the stack
    while (stack.length > 0 && temperatures[i] > temperatures[stack.at(-1)]) {
      const idx = stack.pop();
      answer[idx] = i - idx;
    }

    stack.push(i);
  }

  return answer;
}

/*
function dailyTemperaturesSlow(temperatures) {
  const resultObj = Array.from({ length: temperatures.length }, () => ({
    days: 0,
    surpassed: false,
  }));

  for (let i = 1; i < temperatures.length; i++) {
    for (let j = 0; j < i; j++) {
      if (resultObj[j].surpassed === false) {
        if (temperatures[i] > temperatures[j]) {
          resultObj[j].days = resultObj[j].days + 1;
          resultObj[j].surpassed = true;
        } else {
          resultObj[j].days = resultObj[j].days + 1;
        }
      }
    }
  }

  return resultObj.map(({ days, surpassed }) => {
    return surpassed ? days : 0;
  });
}
*/

module.exports = { dailyTemperatures };
