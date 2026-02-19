const { invertTree, TreeNode } = require("../invertBinaryTree");

function toArray(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}

// Example 1: [4,2,7,1,3,6,9] → [4,7,2,9,6,3,1]
test("invert full tree", () => {
  const root = new TreeNode(
    4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7, new TreeNode(6), new TreeNode(9)),
  );
  expect(toArray(invertTree(root))).toEqual([4, 7, 2, 9, 6, 3, 1]);
});

// Example 2: [2,1,3] → [2,3,1]
test("invert three-node tree", () => {
  const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
  expect(toArray(invertTree(root))).toEqual([2, 3, 1]);
});

// Example 3: [] → []
test("empty tree", () => {
  expect(invertTree(null)).toBeNull();
});

test("single node", () => {
  const root = new TreeNode(1);
  expect(toArray(invertTree(root))).toEqual([1]);
});

test("left-only tree becomes right-only", () => {
  const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
  const inverted = invertTree(root);
  expect(inverted.left).toBeNull();
  expect(inverted.right.val).toBe(2);
  expect(inverted.right.right.val).toBe(3);
});
