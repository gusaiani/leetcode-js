import { heightChecker } from "../heightChecker";

test("mismatched heights", () => {
  expect(heightChecker([1, 1, 4, 2, 1, 3])).toBe(3);
});

test("already sorted heights", () => {
  expect(heightChecker([5, 1, 2, 3, 4])).toBe(5);
});

test("single element", () => {
  expect(heightChecker([1])).toBe(0);
});

test("all equal heights", () => {
  expect(heightChecker([2, 2, 2, 2])).toBe(0);
});
