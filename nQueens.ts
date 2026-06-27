/**
 * LeetCode 51. N-Queens
 * https://leetcode.com/problems/n-queens/description/
 *
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard
 * such that no two queens attack each other.
 *
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * You may return the answer in any order.
 *
 * Each solution contains a distinct board configuration of the n-queens placement,
 * where 'Q' and '.' both indicate a queen and an empty space, respectively.
 */

function solveNQueens(n: number): string[][] {
  const validBoards: string[][] = [];

  // Track where queens are already placed to check for attacks
  const occupiedColumns = new Set<number>();
  const occupiedPositiveDiagonals = new Set<number>(); // bottom-left to top-right (row + col)
  const occupiedNegativeDiagonals = new Set<number>(); // top-left to bottom-right (row - col)

  // Initialize an empty N x N chessboard filled with empty spaces ('.')
  const chessboard: string[][] = Array.from({ length: n }, () => new Array<string>(n).fill("."));

  // Our recursive backtracking function
  const placeQueenInRow = (currentRow: number): void => {
    // Base Case: We've successfully placed a queen in every row
    if (currentRow === n) {
      // Take a "snapshot" of the board, format it, and save it to our valid boards list
      const formattedBoard = chessboard.map((row) => row.join(""));
      validBoards.push(formattedBoard);
      return;
    }

    // Try placing a queen in every column of the current row
    for (let currentColumn = 0; currentColumn < n; currentColumn++) {
      // Check if placing a queen here would result in it being attacked
      const isColumnOccupied = occupiedColumns.has(currentColumn);
      const isPositiveDiagonalOccupied = occupiedPositiveDiagonals.has(currentRow + currentColumn);
      const isNegativeDiagonalOccupied = occupiedNegativeDiagonals.has(currentRow - currentColumn);

      if (isColumnOccupied || isPositiveDiagonalOccupied || isNegativeDiagonalOccupied) {
        continue; // This square is under attack, skip to the next column
      }

      // --- Place the queen ---
      occupiedColumns.add(currentColumn);
      occupiedPositiveDiagonals.add(currentRow + currentColumn);
      occupiedNegativeDiagonals.add(currentRow - currentColumn);
      chessboard[currentRow][currentColumn] = "Q";

      // Recursively move to the next row
      placeQueenInRow(currentRow + 1);

      // --- Remove the queen (Backtracking step) ---
      // We undo our placement so we can explore other valid paths on the board
      occupiedColumns.delete(currentColumn);
      occupiedPositiveDiagonals.delete(currentRow + currentColumn);
      occupiedNegativeDiagonals.delete(currentRow - currentColumn);
      chessboard[currentRow][currentColumn] = ".";
    }
  };

  // Kick off the process starting at the very first row
  placeQueenInRow(0);

  return validBoards;
}

export { solveNQueens };
