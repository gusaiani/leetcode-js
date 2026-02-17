const { coinChange } = require("../coinChange");

// Example 1: coins = [1,2,5], amount = 11 → 3 (5+5+1)
test("standard case with three coin types", () => {
	expect(coinChange([1, 2, 5], 11)).toBe(3);
});

// Example 2: coins = [2], amount = 3 → -1
test("impossible to make amount", () => {
	expect(coinChange([2], 3)).toBe(-1);
});

// Example 3: coins = [1], amount = 0 → 0
test("zero amount needs zero coins", () => {
	expect(coinChange([1], 0)).toBe(0);
});

// Greedy trap: greedy picks 11 then fails, but 5+5+5 works
test("greedy approach would fail", () => {
	expect(coinChange([1, 5, 11], 15)).toBe(3);
});

test("single coin exact match", () => {
	expect(coinChange([3], 9)).toBe(3);
});

test("large denomination coins", () => {
	expect(coinChange([1, 5, 10, 25], 30)).toBe(2);
});

test("amount equals one coin", () => {
	expect(coinChange([1, 2, 5], 5)).toBe(1);
});
