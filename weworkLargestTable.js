function wework(grid) {
  let largestTable = 0;
  let maxHeight;
  let maxWidth;

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];

    for (let j = 0; j < row.length; j++) {
      if (row[j] === "1") {
        maxWidth = 1;
        maxHeight = 1;

        while (row[j + maxWidth] === "1") {
          maxWidth++;
        }

        while (grid[i + maxHeight] && grid[i + maxHeight][j] === "1") {
          maxHeight++;
        }

        if (maxWidth > largestTable) {
          largestTable = maxWidth;
        }

        if (maxHeight > largestTable) {
          largestTable = maxHeight;
        }

        for (let h = 1; h <= maxHeight; h++) {
          for (let w = 0; w < maxWidth; w++) {
            if (grid[i + h] && grid[i + h][j + w] !== "1") {
              const area = h * (w + 1);

              if (area > largestTable) {
                largestTable = area;
              }
              continue;
            }
          }
        }
      }
    }
  }

  return largestTable;
}

module.exports = wework;
