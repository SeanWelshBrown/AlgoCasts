// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


// iterative solution
function pyramid(n) {
  const maxColumns = 2 * n - 1
  const midpoint = Math.floor(maxColumns / 2);

  for (let row = 0; row < n; row++) {
    let level = "";

    for (let column = 0; column < maxColumns; column++) {
      if (column >= midpoint - row && column <= midpoint + row) {
        level += "#";
      } else {
        level += " ";
      }
    }

    console.log(level)
  }
}


// recursive solution
function pyramid2(n, row = 0, level = "") {
  const maxColumns = 2 * n - 1
  const midpoint = Math.floor(maxColumns / 2);

  if (row === n) {
    return;
  }

  if (level.length === maxColumns) {
    console.log(level)
    return pyramid2(n, row + 1)
  }

  if (level.length >= midpoint - row && level.length <= midpoint + row) {
    level += "#"
  } else {
    level += " "
  }

  pyramid2(n, row, level)
}


// .repeat() string solution
function pyramid3(n) {
  let spaceCount, hashCount;
  
  for (
    spaceCount = n - 1, hashCount = 1;
    hashCount <= 2 * n - 1;
    spaceCount--, hashCount += 2
    ) {
    console.log(" ".repeat(spaceCount) + "#".repeat(hashCount) + " ".repeat(spaceCount))
  }
}



    // test custom repeat function
    function repeatString(str, n) {
      let newStr = "";
      while (n > 0) {
        newStr += str
        n--
      }
      return newStr;
    }


module.exports = pyramid;
