// https://leetcode.com/problems/missing-number/description/

// eslint-disable-next-line no-unused-vars
function _missingNumberSlow(nums) {
  const sortedNums = nums.sort((a, b) => a - b);

  for (let index = 0; index <= sortedNums.length; index++) {
    if (sortedNums[index] !== index) {
      return index;
    }
  }
}

function missingNumber(nums) {
  const length = nums.length;
  const expectedSum = (length * (length + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < length; i++) {
    actualSum += nums[i];
  }

  return expectedSum - actualSum;
}

module.exports = missingNumber;
