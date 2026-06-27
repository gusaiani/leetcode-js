/**
 * LeetCode 70. Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * You are climbing a staircase. It takes n steps to reach the top. Each time
 * you can either climb 1 or 2 steps. In how many distinct ways can you climb
 * to the top?
 */

function climbStairs(n: number): number {
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

export { climbStairs };
