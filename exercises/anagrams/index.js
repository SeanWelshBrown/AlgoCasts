// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const stringAObj = {}
  const stringBObj = {}
  const stringAArr = []
  const stringBArr = []

  const stringANoCase = stringA.toLowerCase().replace(/[^\w]|_/g, "")
  const stringBNoCase = stringB.toLowerCase().replace(/[^\w]|_/g, "")

  for (let char of stringANoCase) {
    stringAObj[char] = stringAObj[char] + 1 || 1;
  }
  for (let char of stringBNoCase) {
    stringBObj[char] = stringBObj[char] + 1 || 1;
  }

  for (let key in stringAObj) {
    stringAArr.push({char: key, number: stringAObj[key]})
  }
  for (let key in stringBObj) {
    stringBArr.push({char: key, number: stringAObj[key]})
  }

  const stringAArrSorted = stringAArr.sort((a, b) => (a.char > b.char) ? 1 : -1)
  const stringBArrSorted = stringBArr.sort((a, b) => (a.char > b.char) ? 1 : -1)

  if (JSON.stringify(stringAArrSorted) === JSON.stringify(stringBArrSorted)) {
    return true
  } else {
    return false
  }
}

module.exports = anagrams;
