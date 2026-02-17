/**
 * LeetCode 322. Coin Change
 * https://leetcode.com/problems/coin-change/description/
 *
 * You are given an integer array coins representing coin denominations and an
 * integer amount representing a total amount of money. Return the fewest number
 * of coins that you need to make up that amount. If that amount of money cannot
 * be made up by any combination of the coins, return -1.
 *
 * You may assume that you have an infinite number of each kind of coin.
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  const minCoinsForAmount = new Array(amount + 1).fill(Infinity);
  minCoinsForAmount[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i) {
        minCoinsForAmount[i] = Math.min(minCoinsForAmount[i], minCoinsForAmount[i - coin] + 1);
      }
    }
  }

  return minCoinsForAmount[amount] === Infinity ? -1 : minCoinsForAmount[amount];
}

module.exports = { coinChange };
