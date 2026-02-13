function palindromeNumber(number) {
  const string = String(number);
  const array = string.split("");

  while (array.length > 0) {
    if (array.length === 1) {
      return true;
    }

    if (array.shift() !== array.pop()) {
      return false;
    }
  }

  return true;
}

module.exports = palindromeNumber;
