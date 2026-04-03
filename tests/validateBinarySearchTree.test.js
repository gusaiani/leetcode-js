const { isValidBST } = require("../validateBinarySearchTree");

function TreeNode(val, left = null, right = null) {
	this.val = val;
	this.left = left;
	this.right = right;
}

test("valid BST [2,1,3]", () => {
	const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
	expect(isValidBST(root)).toBe(true);
});

test("invalid BST [5,1,4,null,null,3,6]", () => {
	const root = new TreeNode(
		5,
		new TreeNode(1),
		new TreeNode(4, new TreeNode(3), new TreeNode(6)),
	);
	expect(isValidBST(root)).toBe(false);
});

test("single node is valid", () => {
	expect(isValidBST(new TreeNode(1))).toBe(true);
});

test("left child equals parent is invalid", () => {
	const root = new TreeNode(2, new TreeNode(2), new TreeNode(3));
	expect(isValidBST(root)).toBe(false);
});

test("invalid due to grandchild violating ancestor constraint", () => {
	const root = new TreeNode(
		5,
		new TreeNode(3, new TreeNode(1), new TreeNode(6)),
		new TreeNode(7),
	);
	expect(isValidBST(root)).toBe(false);
});
