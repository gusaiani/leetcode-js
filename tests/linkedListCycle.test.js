const { hasCycle, ListNode } = require("../linkedListCycle");

// Build a list from an array and optionally create a cycle back to the node at cyclePos
function buildList(arr, cyclePos) {
  if (arr.length === 0) return null;
  const nodes = arr.map((v) => new ListNode(v));
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
  if (cyclePos >= 0) {
    nodes[nodes.length - 1].next = nodes[cyclePos];
  }
  return nodes[0];
}

// Example 1: [3,2,0,-4] with cycle at pos 1 → true
test("cycle at index 1", () => {
  expect(hasCycle(buildList([3, 2, 0, -4], 1))).toBe(true);
});

// Example 2: [1,2] with cycle at pos 0 → true
test("cycle at index 0", () => {
  expect(hasCycle(buildList([1, 2], 0))).toBe(true);
});

// Example 3: [1] with no cycle → false
test("single node, no cycle", () => {
  expect(hasCycle(buildList([1], -1))).toBe(false);
});

// Empty list → false
test("empty list", () => {
  expect(hasCycle(null)).toBe(false);
});

// Long list with no cycle → false
test("long list without cycle", () => {
  expect(hasCycle(buildList([1, 2, 3, 4, 5], -1))).toBe(false);
});

// Cycle pointing to itself (self-loop)
test("self-loop", () => {
  const node = new ListNode(1);
  node.next = node;
  expect(hasCycle(node)).toBe(true);
});
