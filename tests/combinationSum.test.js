const { combinationSum } = require("../combinationSum");

function sorted(result) {
  return result
    .map((c) => [...c].sort((a, b) => a - b))
    .sort((a, b) => {
      for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] !== b[i]) return a[i] - b[i];
      }
      return a.length - b.length;
    });
}

// Example 1: candidates = [2,3,6,7], target = 7 → [[2,2,3],[7]]
test("candidates [2,3,6,7], target 7", () => {
  expect(sorted(combinationSum([2, 3, 6, 7], 7))).toEqual([[2, 2, 3], [7]]);
});

// Example 2: candidates = [2,3,5], target = 8 → [[2,2,2,2],[2,3,3],[3,5]]
test("candidates [2,3,5], target 8", () => {
  expect(sorted(combinationSum([2, 3, 5], 8))).toEqual([
    [2, 2, 2, 2],
    [2, 3, 3],
    [3, 5],
  ]);
});

// Example 3: candidates = [2], target = 1 → []
test("no combination possible", () => {
  expect(combinationSum([2], 1)).toEqual([]);
});

// Single candidate that divides target evenly
test("single candidate divides target", () => {
  expect(sorted(combinationSum([3], 9))).toEqual([[3, 3, 3]]);
});

// Target equals one candidate exactly
test("target equals a candidate", () => {
  expect(sorted(combinationSum([2, 5, 7], 5))).toEqual([[5]]);
});

// Multiple ways with single and repeated use
test("candidates [2,3], target 6", () => {
  expect(sorted(combinationSum([2, 3], 6))).toEqual([
    [2, 2, 2],
    [3, 3],
  ]);
});

// Larger set with many combinations
test("candidates [2,3,5], target 10", () => {
  expect(sorted(combinationSum([2, 3, 5], 10))).toEqual([
    [2, 2, 2, 2, 2],
    [2, 2, 3, 3],
    [2, 3, 5],
    [5, 5],
  ]);
});

// All candidates larger than target
test("all candidates larger than target", () => {
  expect(combinationSum([5, 10, 15], 3)).toEqual([]);
});
