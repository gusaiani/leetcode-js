function countAndSay(n) {
  return iterate(n, 1, "1");
}

function iterate(n, currentCount, string) {
  if (n === currentCount) return string;

  const newString = buildNewString(string);

  const newCount = currentCount + 1;

  return iterate(n, newCount, newString);
}

function buildNewString(string) {
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

module.exports = countAndSay;
