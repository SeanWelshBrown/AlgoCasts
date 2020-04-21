// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  charsObj = {}
  for (let char of str) {
    charsObj[char] = charsObj[char] + 1 || 1;
  }

  charsArr = []
  for (let key in charsObj) {
    charsArr.push({
      char: key,
      count: charsObj[key]
    })
  }

  sortedCharsArr = charsArr.sort((a, b) => a.count - b.count)

  return sortedCharsArr[sortedCharsArr.length - 1].char
}


// alternate
function maxChar2(str) {
  charsObj = {}
  max = 0
  maxChar = ""

  for (let char of str) {
    charsObj[char] = charsObj[char] + 1 || 1;
  }

  for (let char in charsObj) {
    if (charsObj[char] > max) {
      max = charsObj[char]
      maxChar = char
    }
  }

  return maxChar
}

module.exports = maxChar;
