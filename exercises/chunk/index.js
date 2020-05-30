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
  //Step 1. Declare a new array to hold all the chunks of data
  const chunked = [];

  //Step 2. Iterate through the original array of elements
  for (let element of array) {
    const last = chunked[chunked.length - 1]; //Step 3. Get the last element in the array

    if (!last || last.length === size) {
      //Step 4. if last element does not exist, or if it's length is equal to chunck size
      chunked.push([element]); //Step 5. Push a new chunk into chunked with the current element
    } else {
      last.push(element); //Step 6. Add the current element into the chunk
    }
    return chunked;
  }
}

module.exports = chunk;
