const { mergeKLists } = require("../mergeKSortedLists");

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToList(arr) {
  let head = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    head = new ListNode(arr[i], head);
  }
  return head;
}

function listToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

test("example 1 — three sorted lists", () => {
  const lists = [arrayToList([1, 4, 5]), arrayToList([1, 3, 4]), arrayToList([2, 6])];
  expect(listToArray(mergeKLists(lists))).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
});

test("empty array of lists", () => {
  expect(mergeKLists([])).toBeNull();
});

test("array with one empty list", () => {
  expect(mergeKLists([null])).toBeNull();
});

test("single list", () => {
  const lists = [arrayToList([1, 2, 3])];
  expect(listToArray(mergeKLists(lists))).toEqual([1, 2, 3]);
});

test("lists with negative values", () => {
  const lists = [arrayToList([-2, -1, 0]), arrayToList([-3, 5])];
  expect(listToArray(mergeKLists(lists))).toEqual([-3, -2, -1, 0, 5]);
});
