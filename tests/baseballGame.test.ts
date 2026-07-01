import { calPoints } from "../baseballGame";

test("sums record after C removes and D/+ derive scores", () => {
  expect(calPoints(["5", "2", "C", "D", "+"])).toBe(30);
});

test("handles negative scores", () => {
  expect(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])).toBe(27);
});

test("cancelling the only score leaves an empty record", () => {
  expect(calPoints(["1", "C"])).toBe(0);
});

test("single score", () => {
  expect(calPoints(["7"])).toBe(7);
});
