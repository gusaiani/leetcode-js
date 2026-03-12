/**
 * LeetCode 202. Happy Number
 * https://leetcode.com/problems/happy-number/
 *
 * Write an algorithm to determine if a number n is happy.
 *
 * A happy number is defined by the following process:
 * - Starting with any positive integer, replace the number by the sum of the
 *   squares of its digits.
 * - Repeat the process until the number equals 1 (where it will stay), or it
 *   loops endlessly in a cycle that does not include 1.
 * - Numbers for which this process ends in 1 are happy.
 *
 * Return true if n is a happy number, and false if not.
 */

/**
 * @param {number} n
 * @return {boolean}
 */

/*
* Use a Set as memory
* if number is repeated, it's a cycle, so not happy number

function isHappy(n, previousNumbers) {
  if (n === 1) return true;

  if (!previousNumbers) {
    previousNumbers = new Set();
  }

  const string = String(n);
  const array = string.split("");

  const newNumber = array.reduce((acc, digit) => {
    return Number(digit) ** 2 + acc;
  }, 0);

  if (previousNumbers.has(newNumber)) {
    return false;
  }

  previousNumbers.add(newNumber);

  return isHappy(newNumber, previousNumbers);
}
*/

// Mathematical solution: if number is 4, not happy
function isHappy(n) {
  if (n === 1) return true;
  if (n === 4) return false;
  const y = String(n).split("");

  const newNumber = y.reduce((acc, digit) => {
    return Number(digit) ** 2 + acc;
  }, 0);

  return isHappy(newNumber);
}

/*
* Floyd Cycle-finding algo
function isHappy(n) {
  let slow = n;
  let fast = getNext(n);

  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }

  return fast === 1;
}

function getNext(n) {
  let totalSum = 0;
  while (n > 0) {
    let digit = n % 10; // Get the last digit
    totalSum += digit * digit;
    n = Math.floor(n / 10); // Remove the last digit
  }
  return totalSum;
}
*/

module.exports = { isHappy };
