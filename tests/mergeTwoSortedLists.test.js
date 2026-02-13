const { mergeTwoLists, ListNode } = require("../mergeTwoSortedLists");

function fromArray(arr) {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return head;
}

function toArray(head) {
  const out = [];
  for (let p = head; p !== null; p = p.next) out.push(p.val);
  return out;
}

// Example 1: list1 = [1,2,4], list2 = [1,3,4] → [1,1,2,3,4,4]
test("merge two non-empty sorted lists", () => {
  const list1 = fromArray([1, 2, 4]);
  const list2 = fromArray([1, 3, 4]);
  const merged = mergeTwoLists(list1, list2);
  expect(toArray(merged)).toEqual([1, 1, 2, 3, 4, 4]);
});

// Example 2: list1 = [], list2 = [] → []
test("merge two empty lists", () => {
  const merged = mergeTwoLists(null, null);
  expect(toArray(merged)).toEqual([]);
});

// Example 3: list1 = [], list2 = [0] → [0]
test("merge empty list with single-node list", () => {
  const list2 = fromArray([0]);
  const merged = mergeTwoLists(null, list2);
  expect(toArray(merged)).toEqual([0]);
});

test("merge single-node list with empty list", () => {
  const list1 = fromArray([0]);
  const merged = mergeTwoLists(list1, null);
  expect(toArray(merged)).toEqual([0]);
});

test("merge when one list is longer", () => {
  const list1 = fromArray([1, 2]);
  const list2 = fromArray([3, 4, 5]);
  const merged = mergeTwoLists(list1, list2);
  expect(toArray(merged)).toEqual([1, 2, 3, 4, 5]);
});
