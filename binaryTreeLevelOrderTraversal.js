/**
 * LeetCode 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 *
 * Given the root of a binary tree, return the level order traversal of its
 * nodes' values (i.e., from left to right, level by level).
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode|null} root
 * @return {number[][]}
 */

function levelOrder(root) {
  // If the tree is empty, return an empty array
  if (!root) return [];

  const result = [];
  const queue = [root]; // Initialize queue with the root node

  while (queue.length > 0) {
    const levelSize = queue.length; // Number of nodes at the current level
    const currentLevelNodes = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift(); // Remove the front node

      currentLevelNodes.push(node.val); // Add node value to current level

      // Add children to the queue for the next level
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // After processing all nodes at this level, add it to the result
    result.push(currentLevelNodes);
  }

  return result;
}

module.exports = { levelOrder, TreeNode };
