/**
 * LeetCode 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * A phrase is a palindrome if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads the
 * same forward and backward.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // 1. Move the left pointer until we find an alphanumeric character
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }
    // 2. Move the right pointer until we find an alphanumeric character
    while (left < right && !isAlphaNumeric(s[right])) {
      right--;
    }

    // 3. Compare the characters (case-insensitive)
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    // 4. Move pointers inward
    left++;
    right--;
  }

  return true;
}

// Helper function to check if a character is a letter or number
function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // 0-9
    (code >= 65 && code <= 90) || // A-Z
    (code >= 97 && code <= 122)
  ); // a-z
}

module.exports = { validPalindrome };
