// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversedStr = ""

  // classic syntax
  // for (i = 1; i <= str.length; i++) {
  //   reversedStr += str.charAt(str.length - i)
  // }

  // ES6 syntax
  for (const char of str) {
    reversedStr = char + reversedStr
  }

  return reversedStr;
}


// alternate solution
function reverse2(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// alternate solution2
function reverse3(str) {
  return str.split("").reduce((rev, char) => char + rev, "")
}

module.exports = reverse;
