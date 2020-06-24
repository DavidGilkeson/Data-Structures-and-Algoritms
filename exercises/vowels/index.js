// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi) //g means it doesn't stop when first match is found
  //i means that it is case insensitive 
  return matches ? matches.length : 0; // Return the length or null 

}


module.exports = vowels;

//Solution 1 added
// function vowels(str) {
//   let counter = 0;
//   const check = ['a', 'e', 'i', 'o', 'u'];

//   for (let char of str.toLowerCase()) {

//     if (check.includes(char)) {
//       counter++;
//     }
//   }

//   return counter;
// }