/**
 * LeetCode 198. House Robber
 * https://leetcode.com/problems/house-robber/description/
 *
 * You are a professional robber planning to rob houses along a street. Each
 * house has a certain amount of money stashed. The only constraint stopping
 * you from robbing each of them is that adjacent houses have security systems
 * connected, and it will automatically contact the police if two adjacent
 * houses were broken into on the same night.
 *
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the
 * police.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(houseValues) {
  if (houseValues.length === 0) {
    return 0;
  }

  let maximumProfitFromTwoHousesAgo = 0;

  let maximumProfitFromOneHouseAgo = 0;

  for (const currentHouseValue of houseValues) {
    const currentTotalIfRobbed =
      currentHouseValue + maximumProfitFromTwoHousesAgo;

    const bestProfitAtCurrentStep = Math.max(
      currentTotalIfRobbed,
      maximumProfitFromOneHouseAgo,
    );

    maximumProfitFromTwoHousesAgo = maximumProfitFromOneHouseAgo;

    maximumProfitFromOneHouseAgo = bestProfitAtCurrentStep;
  }

  return maximumProfitFromOneHouseAgo;
}

module.exports = { rob };
