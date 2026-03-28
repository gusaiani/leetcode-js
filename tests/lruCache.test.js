const { LRUCache } = require("../lruCache");

test("example 1 — basic get and put operations", () => {
  const cache = new LRUCache(2);
  cache.put(1, 1);
  cache.put(2, 2);
  expect(cache.get(1)).toBe(1);
  cache.put(3, 3);
  expect(cache.get(2)).toBe(-1);
  cache.put(4, 4);
  expect(cache.get(1)).toBe(-1);
  expect(cache.get(3)).toBe(3);
  expect(cache.get(4)).toBe(4);
});

test("get returns -1 for missing key", () => {
  const cache = new LRUCache(1);
  expect(cache.get(42)).toBe(-1);
});

test("put updates existing key value", () => {
  const cache = new LRUCache(2);
  cache.put(1, 10);
  cache.put(1, 20);
  expect(cache.get(1)).toBe(20);
});

test("capacity of 1", () => {
  const cache = new LRUCache(1);
  cache.put(1, 1);
  cache.put(2, 2);
  expect(cache.get(1)).toBe(-1);
  expect(cache.get(2)).toBe(2);
});

test("get refreshes usage order", () => {
  const cache = new LRUCache(2);
  cache.put(1, 1);
  cache.put(2, 2);
  cache.get(1);
  cache.put(3, 3);
  expect(cache.get(1)).toBe(1);
  expect(cache.get(2)).toBe(-1);
  expect(cache.get(3)).toBe(3);
});

test("put updates existing key and refreshes usage order", () => {
  const cache = new LRUCache(2);
  cache.get(2);
  cache.put(2, 6);
  cache.get(1);
  cache.put(1, 5);
  cache.put(1, 2);
  cache.get(1);
  cache.get(2);
  expect(cache.get(1)).toBe(2);
  expect(cache.get(2)).toBe(6);
});
