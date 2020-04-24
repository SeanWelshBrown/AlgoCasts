// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// comparing formatted and sorted versions of the strings
function anagrams(stringA, stringB) {
  return formatString(stringA) === formatString(stringB)
}
  // format string helper function
  function formatString(str) {
    return str.toLowerCase().replace(/[^\w]|_/g, "").split("").sort().join("");
  }


// using compared Maps
function anagrams2(stringA, stringB) {
  const charMapA = buildCharMap(stringA)
  const charMapB = buildCharMap(stringB)

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  
  return true;
}
  // map helper function
  function buildCharMap(str) {
    const charMap = {};
    const formattedStr = str.replace(/[^\w]|_/g, "").toLowerCase().split("").sort().join("");

    for (let char of formattedStr) {
      charMap[char] = charMap[char] + 1 || 1;
    };
    return charMap;
  }

module.exports = anagrams;
