/**
 * LeetCode 1235. Maximum Profit in Job Scheduling
 * https://leetcode.com/problems/maximum-profit-in-job-scheduling/
 *
 * We have n jobs, where every job is scheduled to be done from startTime[i]
 * to endTime[i], obtaining a profit of profit[i].
 *
 * You're given the startTime, endTime and profit arrays. Return the maximum
 * profit you can take such that there are no two jobs in the subset with
 * overlapping time range.
 *
 * If you choose a job that ends at time X you will be able to start another
 * job that starts at time X.
 *
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */

/* Slow

function jobScheduling(startTime, endTime, profit) {
  const n = startTime.length;
  const jobs = [];

  // Combine arrays into job objects, sort by startTime
  for (let i = 0; i < n; i++) {
    jobs.push({ start: startTime[i], end: endTime[i], profit: profit[i] });
  }
  jobs.sort((a, b) => a.start - b.start);

  // To make binary search easier, create a sorted array of just start times
  const sortedStartTimes = jobs.map((job) => job.start);

  // Memoization table to store results of dfs(index)
  function dfs(index) {
    // Base case: no more jobs left
    if (index === n) return 0;

    // Return cached result if available
    if (memo[index] !== -1) return memo[index];

    // Option 1: skip the current job
    let skipProfit = dfs(index + 1);

    // Option 2: take the current job
    // find the next available job index using binary search
    let nextIndex = findNextJob(index);
    let takeProfit =
      jobs[index].profit + (nextIndex !== -1 ? dfs(nextIndex) : 0);

    // store and return the max of both choices
    return (memo[index] = Math.max(skipProfit, takeProfit));
  }

  // Binary search to find the first job that starts >= current job's end time
  function findNextJob(currentIndex) {
    let low = currentIndex + 1;
    let high = n - 1;
    let result = n; // default to 'out of bounds' if no job fits

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (sortedStartTimes[mid] >= jobs[currentIndex].end) {
        result = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return result;
  }

  const memo = new Array(n).fill(-1);
  return dfs(0);
}
*/

const jobScheduling = (startTime, endTime, profit) => {
  const n = startTime.length;

  const indices = new Int32Array(n).map((_, i) => i);

  // Sort indices based on endTime to avoid moving large objects around
  indices.sort((a, b) => endTime[a] - endTime[b]);

  // 2. DP Table (Using Int32Array for speed)
  // dp[i] = max profit using a subset of the first i jobs
  const dp = new Int32Array(n + 1);

  for (let i = 0; i < n; i++) {
    const idx = indices[i];
    const currStart = startTime[idx];
    const currProfit = profit[idx];

    // Find the latest job that ends BEFORE this job starts
    // We search in the already processed jobs (0 to i-1)
    const prevJobIdx = binarySearch(indices, endTime, currStart, i);

    // Transition: Max(Profit without this job, Profit with this job + best previous)
    dp[i + 1] = Math.max(dp[i], currProfit + dp[prevJobIdx + 1]);
  }

  return dp[n];
};

function binarySearch(indices, endTime, targetStart, high) {
  let low = 0;
  let res = -1;
  high = high - 1;

  while (low <= high) {
    const mid = (low + high) >>> 1;
    if (endTime[indices[mid]] <= targetStart) {
      res = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return res;
}
module.exports = { jobScheduling };
