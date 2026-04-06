const { cloneGraph } = require("../cloneGraph");

function createNode(val) {
  return { val, neighbors: [] };
}

test("returns null for an empty graph", () => {
  expect(cloneGraph(null)).toBeNull();
});

test("clones a single node graph", () => {
  const node = createNode(1);

  const cloned = cloneGraph(node);

  expect(cloned).not.toBe(node);
  expect(cloned.val).toBe(1);
  expect(cloned.neighbors).toEqual([]);
});

test("clones a connected undirected graph", () => {
  const node1 = createNode(1);
  const node2 = createNode(2);
  const node3 = createNode(3);
  const node4 = createNode(4);

  node1.neighbors = [node2, node4];
  node2.neighbors = [node1, node3];
  node3.neighbors = [node2, node4];
  node4.neighbors = [node1, node3];

  const cloned = cloneGraph(node1);

  expect(cloned).not.toBe(node1);
  expect(cloned.val).toBe(1);
  expect(cloned.neighbors).toHaveLength(2);
  expect(cloned.neighbors.map((neighbor) => neighbor.val).sort((a, b) => a - b)).toEqual([
    2,
    4,
  ]);
  expect(cloned.neighbors[0]).not.toBe(node1.neighbors[0]);
  expect(cloned.neighbors[1]).not.toBe(node1.neighbors[1]);
});
