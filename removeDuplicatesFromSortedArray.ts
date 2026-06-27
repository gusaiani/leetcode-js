// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

interface DedupeState {
  length: number;
  currentItem: number | undefined;
}

function removeDuplicatesFromSortedArray(arr: number[]): number {
  const { length } = arr.reduce<DedupeState>(
    ({ length, currentItem }, item) => {
      if (item !== currentItem) {
        length = length + 1;
        currentItem = item;
      }

      return { length, currentItem };
    },
    {
      length: 0,
      currentItem: undefined,
    },
  );

  return length;
}

export default removeDuplicatesFromSortedArray;
