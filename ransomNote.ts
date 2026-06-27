/**
 * LeetCode 383. Ransom Note
 * https://leetcode.com/problems/ransom-note/
 *
 * Given two strings ransomNote and magazine, return true if ransomNote can be
 * constructed by using the letters from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 *
 * Constraints:
 * - 1 <= ransomNote.length, magazine.length <= 10^5
 * - ransomNote and magazine consist of lowercase English letters.
 */

function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineChars = new Map<string, number>();

  for (const char of magazine) {
    magazineChars.set(char, (magazineChars.get(char) ?? 0) + 1);
  }

  for (const char of ransomNote) {
    const count = magazineChars.get(char);

    if (count === undefined || count <= 0) return false;

    magazineChars.set(char, count - 1);
  }

  return true;
}

export { canConstruct };
