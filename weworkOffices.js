function wework(grid) {
  let rooms = 0;

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];

    for (let j = 0; j < row.length; j++) {
      if (row[j] === 1) {
        rooms++

        // Space accounted for
        grid[i][j] = 'c'
        const spacesToCheck = [[i, j]]

        while (spacesToCheck.length) {
          const [h, v] = spacesToCheck.shift()
          const adjacentsToCheck = [
            [h - 1, v],
            [h + 1, v],
            [h, v - 1],
            [h, v + 1]
          ]

          for (let k = 0; k < adjacentsToCheck.length; k++) {
            const [a, b] = adjacentsToCheck[k]

            if (grid[a] && (grid[a][b] === 1)) {
              spacesToCheck.push([a, b])
              grid[a][b] = 'c'
            }
          }
        }
      }
    }
  }

  return rooms
}

module.exports = wework
