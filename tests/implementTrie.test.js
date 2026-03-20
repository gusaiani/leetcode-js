const { Trie } = require("../implementTrie");

test("insert and search words", () => {
  const trie = new Trie();
  trie.insert("apple");
  expect(trie.search("apple")).toBe(true);
  expect(trie.search("app")).toBe(false);
  expect(trie.startsWith("app")).toBe(true);
  trie.insert("app");
  expect(trie.search("app")).toBe(true);
});

test("search returns false for missing words", () => {
  const trie = new Trie();
  trie.insert("hello");
  expect(trie.search("hell")).toBe(false);
  expect(trie.search("helloo")).toBe(false);
  expect(trie.search("world")).toBe(false);
});

test("startsWith with multiple insertions", () => {
  const trie = new Trie();
  trie.insert("car");
  trie.insert("card");
  trie.insert("care");
  expect(trie.startsWith("car")).toBe(true);
  expect(trie.startsWith("ca")).toBe(true);
  expect(trie.startsWith("card")).toBe(true);
  expect(trie.startsWith("care")).toBe(true);
  expect(trie.startsWith("cares")).toBe(false);
});

test("empty trie", () => {
  const trie = new Trie();
  expect(trie.search("a")).toBe(false);
  expect(trie.startsWith("a")).toBe(false);
});
