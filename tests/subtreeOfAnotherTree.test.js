const { TreeNode, isSubtree } = require("../subtreeOfAnotherTree");

// Example 1: subRoot [4,1,2] is a subtree of root [3,4,5,1,2] → true
test("subtree exists", () => {
  const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));
  const root = new TreeNode(3, subRoot, new TreeNode(5));
  expect(isSubtree(root, subRoot)).toBe(true);
});

// Example 2: subRoot [4,1,2] is NOT a subtree of [3,4,5,1,2,null,null,null,null,0] → false
test("subtree does not exist", () => {
  const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));
  const root = new TreeNode(
    3,
    new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0), null)),
    new TreeNode(5),
  );
  expect(isSubtree(root, subRoot)).toBe(false);
});

// subRoot equals root
test("subRoot equals root", () => {
  const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  const subRoot = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  expect(isSubtree(root, subRoot)).toBe(true);
});

// Single-node subRoot found in tree
test("single-node subRoot found", () => {
  const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  expect(isSubtree(root, new TreeNode(2))).toBe(true);
});

// Single-node subRoot not in tree
test("single-node subRoot not found", () => {
  const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  expect(isSubtree(root, new TreeNode(9))).toBe(false);
});

// subRoot is a leaf at deepest level
test("subRoot is a leaf deep in tree", () => {
  const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
  expect(isSubtree(root, new TreeNode(4))).toBe(true);
});
