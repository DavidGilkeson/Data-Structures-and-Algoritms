// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// Make an empty array 'words'
//Split the input string by spaces to get an array
//For each word in the array
//Uppercase the first letter of the word
//Join first letter with rest of the string
//Push result into 'words' array
//Join 'words' into a string and return it

function capitalize(str) {
  const words = [];
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
}

module.exports = capitalize;

// Solution 1
// function capitalize(str) {
//   let words = str.split(" ").map(word => {
//     return word.charAt(0).toUpperCase() + word.slice(1);

//   });
//   return words.join(" ");

// }



//Solution 2

// function capitalize(str) {
//   let result = str[0].toUpperCase();

//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') { // To the left of the current character, if it is a space then it gets upper cased

//       result += str[i].toUpperCase(); //Then gets added to the result string
//     } else {

//       result += str[i];
//     }

//   }
//   return result;

// }