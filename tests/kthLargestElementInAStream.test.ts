import { KthLargest } from "../kthLargestElementInAStream";

test("example 1 — k=3 with initial stream", () => {
  const kth = new KthLargest(3, [4, 5, 8, 2]);
  expect(kth.add(3)).toBe(4);
  expect(kth.add(5)).toBe(5);
  expect(kth.add(10)).toBe(5);
  expect(kth.add(9)).toBe(8);
  expect(kth.add(4)).toBe(8);
});

test("k=1 returns running maximum", () => {
  const kth = new KthLargest(1, []);
  expect(kth.add(-3)).toBe(-3);
  expect(kth.add(-2)).toBe(-2);
  expect(kth.add(-4)).toBe(-2);
  expect(kth.add(0)).toBe(0);
  expect(kth.add(4)).toBe(4);
});

test("initial stream shorter than k", () => {
  const kth = new KthLargest(2, [0]);
  expect(kth.add(1)).toBe(0);
  expect(kth.add(2)).toBe(1);
  expect(kth.add(3)).toBe(2);
});

test("handles duplicate values", () => {
  const kth = new KthLargest(2, [5, 5, 5]);
  expect(kth.add(5)).toBe(5);
  expect(kth.add(6)).toBe(5);
  expect(kth.add(4)).toBe(5);
});

test("k equals stream size after first adds", () => {
  const kth = new KthLargest(3, [4, 5, 8]);
  expect(kth.add(2)).toBe(4);
  expect(kth.add(6)).toBe(5);
});

test("negative numbers mixed with positives", () => {
  const kth = new KthLargest(2, [-10, -5, 0, 3]);
  expect(kth.add(-1)).toBe(0);
  expect(kth.add(7)).toBe(3);
  expect(kth.add(-100)).toBe(3);
});
