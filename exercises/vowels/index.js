// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// iterative solution 
function vowels(str) {
  const vowelArr = ["a", "e", "i", "o", "u"]
  let vowelCount = 0;

  for (let char of str.toLowerCase()) {
    if (vowelArr.includes(char)) {
      vowelCount++
    }
  }

  return vowelCount;
}


// RegEx solution
function vowels2(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}


module.exports = vowels;
