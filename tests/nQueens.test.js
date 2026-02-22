const { solveNQueens } = require("../nQueens");

// Solutions may come in any order — sort boards for stable comparison
const normalize = (solutions) =>
  solutions.map((board) => board.join("|")).sort();

// n=1: single queen fills the only cell
test("n=1 has one solution", () => {
  expect(solveNQueens(1)).toEqual([["Q"]]);
});

// n=2: no valid placement exists
test("n=2 has no solutions", () => {
  expect(solveNQueens(2)).toEqual([]);
});

// n=3: no valid placement exists
test("n=3 has no solutions", () => {
  expect(solveNQueens(3)).toEqual([]);
});

// n=4: exactly two solutions
test.only("n=4 returns exactly 2 solutions", () => {
  expect(solveNQueens(4)).toHaveLength(2);
});

test("n=4 solutions are correct", () => {
  const expected = normalize([
    [".Q..", "...Q", "Q...", "..Q."],
    ["..Q.", "Q...", "...Q", ".Q.."],
  ]);
  expect(normalize(solveNQueens(4))).toEqual(expected);
});

// Each row has exactly one queen
test("each row contains exactly one queen", () => {
  const solutions = solveNQueens(5);
  for (const board of solutions) {
    for (const row of board) {
      expect(row.split("").filter((c) => c === "Q")).toHaveLength(1);
    }
  }
});

// n=5: 10 known solutions
test("n=5 returns exactly 10 solutions", () => {
  expect(solveNQueens(5)).toHaveLength(10);
});
