// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


function matrix(n) {
  let results = [];
  for (i = 0; i < n; i++) {
    results.push([])
  };

  let counter = 1;
  let topRow = 0;
  let bottomRow = n - 1;
  let leftColumn = 0;
  let rightColumn = n - 1;

  while (topRow <= bottomRow && leftColumn <= rightColumn) {

    // top row
    for (i = leftColumn; i <= rightColumn; i++) {
      results[topRow][i] = counter;
      counter++
    }
    topRow++;

    // right column
    for (i = topRow; i <= bottomRow; i++) {
      results[i][rightColumn] = counter;
      counter++
    }
    rightColumn--;

    // bottom row
    for (i = rightColumn; i >= leftColumn; i--) {
      results[bottomRow][i] = counter;
      counter++;
    }
    bottomRow--;

    // left column
    for (i = bottomRow; i >= topRow; i--) {
      results[i][leftColumn] = counter;
      counter++;
    }
    leftColumn++;

  }

  return results;
}


module.exports = matrix;
