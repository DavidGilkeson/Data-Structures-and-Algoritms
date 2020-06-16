// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

// Solution 1
// function reverse(str) {
//     // Step 1. Use the split() method to return a new array
//     // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]

//     // Step 2. Use the reverse() method to reverse the new created array
//     // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]

//     // Step 3. Use the join() method to join all elements of the array into a string
//     // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"
//     console.log(str);
//     let reversedString = str.split("").reverse().join("");
//     return reversedString;
//     console.log(reversedString);
// }

// Solution 2
// function reverse(str) {
//     let reversed = "";

//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed;
// }
