/**
 * LeetCode 121. Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * You are given an array prices where prices[i] is the price of a given stock
 * on the ith day. You want to maximize your profit by choosing a single day to
 * buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let minPrice = Infinity; // Start with a very high value
  let maxProfit = 0; // Start with 0 profit

  for (let i = 0; i < prices.length; i++) {
    // 1. Update minPrice if the current price is lower
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    // 2. Otherwise, check if selling today gives a better profit
    else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}

// eslint-disable-next-line no-unused-vars
function maxProfitSlow(prices) {
  if (prices.length <= 1) return 0;

  let profit = 0;

  while (prices.length > 1) {
    const priceToCompare = prices.shift();

    for (price of prices) {
      profit = Math.max(profit, price - priceToCompare);
    }
  }

  return profit;
}

module.exports = { maxProfit };
