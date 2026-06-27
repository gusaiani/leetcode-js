import { countBits } from "../countingBits";

test("n=0 returns [0]", () => {
  expect(countBits(0)).toEqual([0]);
});

test("n=1 returns [0, 1]", () => {
  expect(countBits(1)).toEqual([0, 1]);
});

test("n=2 returns [0, 1, 1]", () => {
  expect(countBits(2)).toEqual([0, 1, 1]);
});

test("n=5 returns [0, 1, 1, 2, 1, 2]", () => {
  expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
});

test("n=10", () => {
  expect(countBits(10)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2]);
});
