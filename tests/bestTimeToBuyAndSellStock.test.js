const { maxProfit } = require("../bestTimeToBuyAndSellStock");

// Example 1: [7,1,5,3,6,4] → 5 (buy at 1, sell at 6)
test("buy low sell high", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
});

// Example 2: [7,6,4,3,1] → 0 (prices only decrease)
test("no profit possible", () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
});

test("single price", () => {
  expect(maxProfit([5])).toBe(0);
});

test("two days with profit", () => {
  expect(maxProfit([1, 2])).toBe(1);
});

test("two days no profit", () => {
  expect(maxProfit([2, 1])).toBe(0);
});

// Must buy before selling — profit is 3 (buy at 2, sell at 5), not 6 (buy at 1, sell at 7 is not possible in order)
test("must buy before selling", () => {
  expect(maxProfit([7, 2, 5, 1, 3])).toBe(3);
});

test("all same prices", () => {
  expect(maxProfit([3, 3, 3, 3])).toBe(0);
});
