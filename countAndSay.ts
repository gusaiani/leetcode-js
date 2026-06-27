function countAndSay(n: number): string {
  return iterate(n, 1, "1");
}

function iterate(n: number, currentCount: number, string: string): string {
  if (n === currentCount) return string;

  const newString = buildNewString(string);

  const newCount = currentCount + 1;

  return iterate(n, newCount, newString);
}

function buildNewString(string: string): string {
  const arr = string.split("");

  let currentDigit = arr[0];
  let currentDigitCount = 1;
  let newString = "";

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === currentDigit) {
      currentDigitCount = currentDigitCount + 1;
    } else {
      newString = newString + currentDigitCount + currentDigit;
      currentDigit = arr[i];
      currentDigitCount = 1;
    }
  }

  return newString + currentDigitCount + currentDigit;
}

export default countAndSay;
