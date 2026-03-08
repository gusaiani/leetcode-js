const { TreeNode, diameterOfBinaryTree } = require("../diameterOfBinaryTree");

// Example 1: [1,2,3,4,5] → 3 (path: 4→2→1→3 or 5→2→1→3)
test("diameter passes through root", () => {
  const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
  expect(diameterOfBinaryTree(root)).toBe(3);
});

// Example 2: [1,2] → 1
test("two-node tree", () => {
  const root = new TreeNode(1, new TreeNode(2), null);
  expect(diameterOfBinaryTree(root)).toBe(1);
});

// Single node → 0
test("single node", () => {
  expect(diameterOfBinaryTree(new TreeNode(1))).toBe(0);
});

// Diameter does not pass through root (skewed subtree)
test("diameter in subtree, not through root", () => {
  //       1
  //      /
  //     2
  //    / \
  //   3   4
  //  /
  // 5
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3, new TreeNode(5), null), new TreeNode(4)),
    null,
  );
  expect(diameterOfBinaryTree(root)).toBe(3);
});

// Linear chain → n-1 edges
test("linear chain of 4 nodes", () => {
  const root = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4), null), null), null);
  expect(diameterOfBinaryTree(root)).toBe(3);
});

// Balanced tree: diameter is 4
test("balanced tree with diameter 4", () => {
  //         1
  //       /   \
  //      2     3
  //     / \   / \
  //    4   5 6   7
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7)),
  );
  expect(diameterOfBinaryTree(root)).toBe(4);
});
