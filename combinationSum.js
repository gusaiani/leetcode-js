/**
 * LeetCode 39. Combination Sum
 * https://leetcode.com/problems/combination-sum/description/
 *
 * Given an array of distinct integers candidates and a target integer target,
 * return a list of all unique combinations of candidates where the chosen
 * numbers sum to target. You may return the combinations in any order.
 *
 * The same number may be chosen from candidates an unlimited number of times.
 * Two combinations are unique if the frequency of at least one of the chosen
 * numbers is different.
 *
 * Constraints:
 *  - 1 <= candidates.length <= 30
 *  - 2 <= candidates[i] <= 40
 *  - All elements of candidates are distinct
 *  - 1 <= target <= 40
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  const result = [];

  candidates.sort((a, b) => a - b);

  function backtrack(remaining, path, start) {
    // We hit target
    if (remaining === 0) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const num = candidates[i];

      if (num > remaining) break;

      path.push(num);

      backtrack(remaining - num, path, i);

      path.pop();
    }
  }

  backtrack(target, [], 0);
  return result;
}

module.exports = { combinationSum };
