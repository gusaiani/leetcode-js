/**
 * LeetCode 1859. Sorting the Sentence
 * https://leetcode.com/problems/sorting-the-sentence/
 *
 * A sentence is a list of words separated by a single space with no leading or
 * trailing spaces. Each word consists of lowercase and uppercase English letters.
 *
 * A sentence can be shuffled by appending the 1-indexed word position to each
 * word then rearranging the words in the sentence.
 *
 * For example, the sentence "This is a sentence" can be shuffled as
 * "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
 *
 * Given a shuffled sentence s containing no more than 9 words, reconstruct and
 * return the original sentence.
 *
 * Constraints:
 * - 2 <= s.length <= 200
 * - s consists of lowercase and uppercase English letters and spaces.
 * - The number of words in s is between 1 and 9.
 * - The words in s are separated by a single space.
 * - There are no leading or trailing spaces.
 */

function sortSentence(s: string): string {
  const arr = s.split(" ");
  const result: string[] = [];

  for (const wordWithInt of arr) {
    const word = wordWithInt.slice(0, -1);
    const index = parseInt(wordWithInt.slice(-1), 10);
    result[index - 1] = word;
  }

  return result.join(" ");
}

export { sortSentence };
