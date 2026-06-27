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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr) {
    const next: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

export { ListNode, reverseList };
