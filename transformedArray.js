// https://leetcode.com/problems/transformed-array/?envType=daily-question&envId=2026-02-05

function transformedArray(nums) {
  const n = nums.length;
  const result = new Array(n);

  for (let i = 0; i < n; i++) {
    // The value determines the jump size and direction
    const steps = nums[i];

    // Calculate the circular target index
    // We add n before the final modulo to handle negative results from (i + steps) % n
    const targetIndex = (((i + steps) % n) + n) % n;

    // Set result[i] to the value found at the target index
    result[i] = nums[targetIndex];
  }
  return result;
}

module.exports = transformedArray;
