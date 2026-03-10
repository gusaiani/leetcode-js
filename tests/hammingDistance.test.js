const { hammingDistance } = require("../hammingDistance");

// Example 1: 1 (0001) vs 4 (0100) → 2
test("1 and 4", () => {
  expect(hammingDistance(1, 4)).toBe(2);
});

// Example 2: 3 (011) vs 1 (001) → 1
test("3 and 1", () => {
  expect(hammingDistance(3, 1)).toBe(1);
});

// Same numbers → 0
test("equal numbers", () => {
  expect(hammingDistance(5, 5)).toBe(0);
});

// Both zero → 0
test("both zero", () => {
  expect(hammingDistance(0, 0)).toBe(0);
});

// 0 vs max 32-bit → 31 (all bits differ except sign)
test("0 and all ones (2^31 - 1)", () => {
  expect(hammingDistance(0, 2147483647)).toBe(31);
});

// Adjacent integers
test("adjacent integers 7 and 8", () => {
  // 7 = 0111, 8 = 1000 → 4 bits differ
  expect(hammingDistance(7, 8)).toBe(4);
});
