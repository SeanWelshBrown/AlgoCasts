// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {
  const numStr = num.toString();
  let reversed = numStr.split("").reduce((reverse, char) => char + reverse)

  return parseInt(reversed) * Math.sign(num);
  
  // alternate
  if (Math.sign(num) === -1) {
    reversed = "-" + reversed
  }
  return parseInt(reversed)
}

module.exports = reverseInt;
