// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunkedArr = [[]];
  let i = 0;

  for (let element of array) {
    if (chunkedArr[i].length < size) {
      chunkedArr[i].push(element)
    } else {
      chunkedArr.push([element])
      i++
    }
  }
  
  return chunkedArr
}


// alternate
function chunk2(array, size) {
  const chunkedArr = [];

  for (let element of array) {
    const last = chunkedArr[chunkedArr.length -1]

    if (!last || last.length === size) {
      chunkedArr.push([element])
    } else {
      last.push(element)
    }
  }
  return chunkedArr;
}

// alternate 2
function chunk3(array, size) {
  const chunkedArr = [];
  i = 0;

  while (i < array.length) {
    chunkedArr.push(array.slice(i, i+size))
    i = i + size
  }
  
  return chunkedArr;
}

module.exports = chunk;
