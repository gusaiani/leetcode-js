/**
 * LeetCode 682. Baseball Game
 * https://leetcode.com/problems/baseball-game/
 *
 * You are keeping the scores for a baseball game with strange rules. The game
 * consists of several rounds, where the scores of past rounds may affect future
 * rounds' scores.
 *
 * At the beginning of the game, you start with an empty record. You are given a
 * list of strings `operations`, where `operations[i]` is the i-th operation you
 * must apply to the record and is one of the following:
 *
 *   - An integer x: Record a new score of x.
 *   - "+": Record a new score that is the sum of the previous two scores.
 *   - "D": Record a new score that is the double of the previous score.
 *   - "C": Invalidate the previous score, removing it from the record.
 *
 * Return the sum of all the scores on the record after applying all the
 * operations. The test cases are generated so the answer and all intermediate
 * calculations fit in a 32-bit integer, and all operations are valid.
 */

function calPoints(operations: string[]): number {
  const score: number[] = [];

  for (const operation of operations) {
    if (operation === "C") {
      score.pop();
    } else if (operation === "D") {
      score.push(score[score.length - 1] * 2);
    } else if (operation === "+") {
      score.push(score[score.length - 2] + score[score.length - 1]);
    } else {
      score.push(Number(operation));
    }
  }

  return score.reduce((acc, value) => acc + value, 0);
}

export { calPoints };
