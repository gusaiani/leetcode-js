// https://leetcode.com/problems/zigzag-conversion/description/

function zigzagConversion(s, numRows) {
  if (numRows === 1 || s.length < numRows) return s;

  let x = 0;
  let y = 0;
  let goingDown = true;
  const arrays = new Array(numRows).fill('');;
  let result = "";

  for (const char of s) {
    if (goingDown) {
      if (y === numRows - 1) {
        arrays[y] += char;

        x = x + 1;
        y = Math.max(0, y - 1);

        goingDown = false;
      } else {
        arrays[y] += char;
        y = y + 1;
      }
    } else {
      if (y === 0) {
        arrays[y] += char;
        goingDown = true;
        y = y + 1;
      } else {
        arrays[y] += char;
        y = y - 1;
        x = x + 1;
      }
    }
  }

  return arrays.join("");   
}

module.exports = zigzagConversion