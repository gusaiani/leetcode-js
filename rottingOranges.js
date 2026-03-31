/**
 * LeetCode 994. Rotting Oranges
 * https://leetcode.com/problems/rotting-oranges/
 *
 * You are given an m x n grid where each cell can have one of three values:
 *   0 representing an empty cell,
 *   1 representing a fresh orange, or
 *   2 representing a rotten orange.
 *
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten
 * orange becomes rotten.
 *
 * Return the minimum number of minutes that must elapse until no cell has a
 * fresh orange. If this is impossible, return -1.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [];
  let freshOranges = 0;
  let minutes = 0;

  // Initial scan
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c]);
      } else if (grid[r][c] === 1) {
        freshOranges++;
      }
    }
  }

  if (freshOranges === 0) return 0;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (queue.length > 0 && freshOranges > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [r, c] = queue.shift();

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        // Check bounds and if the neighbor is a fresh orange
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
          grid[nr][nc] = 2;
          freshOranges--;
          queue.push([nr, nc]);
        }
      }
    }
    minutes++;
  }

  return freshOranges === 0 ? minutes : -1;
}

module.exports = { orangesRotting };
