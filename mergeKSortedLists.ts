/**
 * LeetCode 23. Merge k Sorted Lists
 * https://leetcode.com/problems/merge-k-sorted-lists/
 *
 * You are given an array of k linked-lists lists, each linked-list is sorted
 * in ascending order.
 *
 * Merge all the linked-lists into one sorted linked-list and return it.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {
  if (lists.length === 0) return null;

  // Continue merging pairs until only one list remains
  while (lists.length > 1) {
    const mergedLists: Array<ListNode | null> = [];

    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedLists.push(mergeTwoLists(l1, l2));
    }
    lists = mergedLists;
  }

  return lists[0];
};

/**
 * Standard helper to merge two sorted linked lists
 */
const mergeTwoLists = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  const dummy = new ListNode(0);
  let curr: ListNode = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  // Attach the remaining nodes from whichever list isn't empty
  curr.next = l1 || l2;
  return dummy.next;
};

export { mergeKLists };
