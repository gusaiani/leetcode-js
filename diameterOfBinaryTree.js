/**
 * LeetCode 543. Diameter of Binary Tree
 * https://leetcode.com/problems/diameter-of-binary-tree/
 *
 * Given the root of a binary tree, return the length of the diameter of the tree.
 *
 * The diameter of a binary tree is the length of the longest path between any
 * two nodes in a tree. This path may or may not pass through the root.
 * The length of a path between two nodes is the number of edges between them.
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTree(root) {
  let diameter = 0;

  function dfs(node) {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    // Check if the path through this node is the longest we've seen
    diameter = Math.max(diameter, left + right);

    // Return height of this subtree to the parent
    return 1 + Math.max(left, right);
  }

  dfs(root);
  return diameter;
}

module.exports = { TreeNode, diameterOfBinaryTree };
