const symbols: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInteger(s: string): number {
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const currentVal = symbols[s[i]];
    const nextVal = symbols[s[i + 1]] ?? 0;

    if (currentVal < nextVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }

  return total;
}

export default romanToInteger;
