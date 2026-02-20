/**
 * LeetCode 70. Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * You are climbing a staircase. It takes n steps to reach the top. Each time
 * you can either climb 1 or 2 steps. In how many distinct ways can you climb
 * to the top?
 */

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  if (n < 2) return n;

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    const current = first + second;
    first = second;
    second = current;
  }

  return second;
}

module.exports = { climbStairs };
