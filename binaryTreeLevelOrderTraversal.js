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
	if (!root) return [];

	const result = [];
	const queue = [root];

	while (queue.length > 0) {
		const levelSize = queue.length;
		const currentLevelNodes = [];

		for (let i = 0; i < levelSize; i++) {
			const node = queue.shift;
			currentLevelNodes.push(node.val);

			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right)
		}

		result.push(currentLevelNodes);
	}

	return result;
}

module.exports = { levelOrder, TreeNode };
