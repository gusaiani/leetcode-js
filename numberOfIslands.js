/**
 * LeetCode 200. Number of Islands
 * https://leetcode.com/problems/number-of-islands/description/
 *
 * Given an m x n 2D binary grid which represents a map of '1's (land) and
 * '0's (water), return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands
 * horizontally or vertically. You may assume all four edges of the grid are
 * surrounded by water.
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;

  const totalRows = grid.length;
  const totalColumns = grid[0].length;
  let islandCount = 0;

  /**
   * Helper to recursively sink all connected land pieces
   */
  const sinkDiscoveryLandMass = (row, col) => {
    const isOutOfBounds = row < 0 || row >= totalRows || col < 0 || col >= totalColumns;

    if (isOutOfBounds || grid[row][col] === "0") {
      return;
    }

    // Mark the current piece of land as visited by "sinking" it
    grid[row][col] = "0";

    // Recursively visit all four neighboring directions
    sinkDiscoveryLandMass(row + 1, col); // South
    sinkDiscoveryLandMass(row - 1, col); // North
    sinkDiscoveryLandMass(row, col + 1); // East
    sinkDiscoveryLandMass(row, col - 1); // West
  };

  // Traverse the world map
  for (let currentRow = 0; currentRow < totalRows; currentRow++) {
    for (let currentCol = 0; currentCol < totalColumns; currentCol++) {
      const currentCell = grid[currentRow][currentCol];

      if (currentCell === "1") {
        islandCount++;
        // Once an island is found, sink its entire mass to avoid re-counting
        sinkDiscoveryLandMass(currentRow, currentCol);
      }
    }
  }

  return islandCount;
}

module.exports = { numIslands };
