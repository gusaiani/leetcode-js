import { middleNode } from "../middleOfTheLinkedList";

interface ListNode {
  val: number;
  next: ListNode | null;
}

function buildList(arr: number[]): ListNode | null {
  let head: ListNode | null = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    head = { val: arr[i], next: head };
  }
  return head;
}

function listToArray(node: ListNode | null): number[] {
  const result: number[] = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}

test("odd-length list [1,2,3,4,5] → middle is [3,4,5]", () => {
  const head = buildList([1, 2, 3, 4, 5]);
  expect(listToArray(middleNode(head))).toEqual([3, 4, 5]);
});

test("even-length list [1,2,3,4,5,6] → second middle is [4,5,6]", () => {
  const head = buildList([1, 2, 3, 4, 5, 6]);
  expect(listToArray(middleNode(head))).toEqual([4, 5, 6]);
});

test("single node [1] → [1]", () => {
  const head = buildList([1]);
  expect(listToArray(middleNode(head))).toEqual([1]);
});

test("two nodes [1,2] → second middle is [2]", () => {
  const head = buildList([1, 2]);
  expect(listToArray(middleNode(head))).toEqual([2]);
});
