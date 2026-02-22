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

/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
  const validBoards = [];

  // Track where queens are already placed to check for attacks
  const occupiedColumns = new Set();
  const occupiedPositiveDiagonals = new Set(); // Tracks bottom-left to top-right (currentRow + currentColumn)
  const occupiedNegativeDiagonals = new Set(); // Tracks top-left to bottom-right (currentRow - currentColumn)

  // Initialize an empty N x N chessboard filled with empty spaces ('.')
  const chessboard = Array.from({ length: n }, () => new Array(n).fill("."));

  // Our recursive backtracking function
  const placeQueenInRow = (currentRow) => {
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

/*
function solveNQueensBitwise (n) {
const validBoards = [];
    const chessboard = Array.from({ length: n }, () => new Array(n).fill('.'));

    // cols, posDiag, and negDiag are now just integers (0)
    const placeQueenInRow = (row, cols, posDiag, negDiag) => {
        if (row === n) {
            validBoards.push(chessboard.map(r => r.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            // Create a "mask" for the current column. 
            // E.g., if col=2, bit = 0010
            const bit = 1 << col; 

            // Check if this bit is already set to 1 in any of our trackers
            if ((cols & bit) || (posDiag & bit) || (negDiag & bit)) {
                continue; // Under attack!
            }

            // --- Place the queen ---
            chessboard[row][col] = 'Q';

            // --- Move to next row ---
            // cols | bit: Add this column to our occupied list
            // (posDiag | bit) >> 1: Add diagonal, shift right for the next row down
            // (negDiag | bit) << 1: Add diagonal, shift left for the next row down
            placeQueenInRow(
                row + 1, 
                cols | bit, 
                (posDiag | bit) >> 1, 
                (negDiag | bit) << 1
            );

            // --- Remove the queen ---
            // (Notice we don't have to manually delete bits from our trackers, 
            // because integers are passed by value in JavaScript. 
            // The previous state is preserved naturally in the call stack!)
            chessboard[row][col] = '.';
        }
    };

    placeQueenInRow(0, 0, 0, 0);
    return validBoards;
};
*/

module.exports = { solveNQueens };
