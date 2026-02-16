/**
 * LeetCode 206. Reverse Linked List
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * Given the head of a singly linked list, reverse the list, and return
 * the reversed list.
 *
 * Constraints:
 *  - The number of nodes in the list is in the range [0, 5000]
 *  - -5000 <= Node.val <= 5000
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

module.exports = { reverseList, ListNode };
