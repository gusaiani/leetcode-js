/**
 * LeetCode 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * Given two strings s and t, return true if t is an anagram of s, and false
 * otherwise.
 */

function isAnagram(ss: string, tt: string): boolean {
  if (!ss || !tt) {
    return false;
  }

  const s = ss.split("");
  const t = tt.split("");

  if (s.length !== t.length) return false;

  const map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i])! + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (map.has(t[j])) {
      if (map.get(t[j]) === 0) return false;
      map.set(t[j], map.get(t[j])! - 1);
    } else {
      return false;
    }
  }

  return true;
}

export { isAnagram };
