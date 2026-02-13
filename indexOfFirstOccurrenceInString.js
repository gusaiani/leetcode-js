// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

// eslint-disable-next-line no-unused-vars
function indexOfFirstOccurrenceInStringWithSlice(haystack, needle) {
  if (needle === haystack) return 0;
  const possibilities = [];

  const haystackArray = [...haystack];
  const needleArray = [...needle];

  let tentativeIndex = null;
  let numberOfCharsMatching = 0;

  for (let index = 0; index < haystackArray.length; index++) {
    if (haystack[index] === needleArray[numberOfCharsMatching]) {
      if (needleArray.length === 1) {
        return index;
      }

      if (possibilities.length === 0) {
        possibilities.push({ index, charsMatching: 0 });
      } else {
        for (let p = 0; p < possibilities.length; p++) {
          if (possibilities[p].charsMatching === needleArray.length - 1) {
            return possibilities[p].index;
          }

          if (possibilities[p].charsMatching === 0) {
            possibilities[p].index = index;
            possibilities[p].charsMatching = 1;
          } else {
            possibilities[p].charsMatching = possibilities[p].charsMatching + 1;
          }
        }
      }
    } else {
      tentativeIndex = null;
      numberOfCharsMatching = 0;
    }
  }

  void tentativeIndex;
  return -1;
}

// KMP algo
function indexOfFirstOccurrenceInString(haystack, needle) {
  if (needle === "") return 0;

  // Step 1: Build the LPS (Longest Prefix Suffix) table
  const lps = new Array(needle.length).fill(0);
  let prevLPS = 0;
  let i = 1;

  while (i < needle.length) {
    if (needle[i] === needle[prevLPS]) {
      lps[i] = prevLPS + 1;
      prevLPS++;
      i++;
    } else {
      if (prevLPS === 0) {
        lps[i] = 0;
        i++;
      } else {
        prevLPS = lps[prevLPS - 1];
      }
    }
  }

  // Step 2: Search the haystack using the LPS table
  let h = 0; // pointer for haystack
  let n = 0; // pointer for needle
  while (h < haystack.length) {
    if (haystack[h] === needle[n]) {
      h++;
      n++;
    } else {
      if (n === 0) {
        h++;
      } else {
        n = lps[n - 1]; // Use LPS to "skip" redundant checks
      }
    }

    if (n === needle.length) {
      return h - needle.length;
    }
  }

  return -1;
}

module.exports = indexOfFirstOccurrenceInString;
