const { hasPathSum, TreeNode } = require("../pathSum");

// Example 1: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22 → true
// Path 5 → 4 → 11 → 2 sums to 22
test("has a root-to-leaf path with target sum", () => {
  const n7 = new TreeNode(7);
  const n2 = new TreeNode(2);
  const n1 = new TreeNode(1);
  const n11 = new TreeNode(11, n7, n2);
  const n13 = new TreeNode(13);
  const n4Right = new TreeNode(4, null, n1);
  const n4 = new TreeNode(4, n11, null);
  const n8 = new TreeNode(8, n13, n4Right);
  const root = new TreeNode(5, n4, n8);
  expect(hasPathSum(root, 22)).toBe(true);
});

// Example 2: root = [1,2,3], targetSum = 5 → false
test("no root-to-leaf path with target sum", () => {
  const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  expect(hasPathSum(root, 5)).toBe(false);
});

// Example 3: empty tree, targetSum = 0 → false
test("empty tree has no paths", () => {
  expect(hasPathSum(null, 0)).toBe(false);
});

// Single node matching target
test("single node equals target sum", () => {
  const root = new TreeNode(5);
  expect(hasPathSum(root, 5)).toBe(true);
});

// Single node not matching target
test("single node does not equal target sum", () => {
  const root = new TreeNode(5);
  expect(hasPathSum(root, 1)).toBe(false);
});

// Path must be root-to-leaf: internal node sum does not count
test("target sum only at leaf, not at internal node", () => {
  const root = new TreeNode(1, new TreeNode(2), null);
  expect(hasPathSum(root, 1)).toBe(false); // 1 is not a leaf
  expect(hasPathSum(root, 3)).toBe(true);  // 1→2 is a leaf path
});
