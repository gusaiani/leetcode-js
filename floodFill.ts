/**
 * LeetCode 733. Flood Fill
 * https://leetcode.com/problems/flood-fill/
 *
 * You are given an image represented by an m x n grid of integers image,
 * where image[i][j] represents the pixel value of the image. You are also
 * given three integers sr, sc, and color. Perform a flood fill on the image
 * starting from the pixel image[sr][sc].
 *
 * To perform a flood fill:
 * 1. Begin with the starting pixel and change its color to color.
 * 2. Perform the same process for each pixel that is directly adjacent
 *    (up, down, left, right) and shares the same original color as the
 *    starting pixel.
 * 3. Keep repeating this process by checking neighboring pixels of the
 *    updated pixels and modifying their color if it matches the original
 *    color of the starting pixel.
 * 4. The process stops when there are no more adjacent pixels of the
 *    original color to update.
 *
 * Return the modified image after performing the flood fill.
 */
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const original = image[sr][sc];
  if (original === color) return image;

  function dfs(r: number, c: number): void {
    if (r < 0 || r >= image.length || c < 0 || c >= image[0].length) return;
    if (image[r][c] !== original) return;

    image[r][c] = color;
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  dfs(sr, sc);
  return image;
}

export { floodFill };
