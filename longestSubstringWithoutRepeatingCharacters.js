// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

function longestSubstringWithoutRepeatingCharacters(s) {
  let maxLength = 0
  let left = 0;

  const charIndexMap = new Map();

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    // If we've seen the character before AND it's inside our current window
    if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= left) {
      // Move the left pointer to the right of the previous occurrence
      left = charIndexMap.get(currentChar) + 1;
    }

    // Update the character's last seen index
    charIndexMap.set(currentChar, right);

    // Calculate current window length and update maxLength
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

module.exports = longestSubstringWithoutRepeatingCharacters
