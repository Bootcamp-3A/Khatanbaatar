// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// s.trim // stringnii hoyr tald hooson zaig baihgui bolgono
// s.split// stringeer haalt ogonguut useg tus bureer ni ogno

// let s = "Star light, star bright";
// let lastWordCount = 0;
// let isFindLastWord = false;
// for (let i = s.length - 1; i >= 0; i--) {
//   const char = s[i];
//   if (char !== " ") {
//     isFindLastWord = true;
//     lastWordCount++;
//     // console.log(s[i]);
//   } else {
//     if (isFindLastWord) {
//       console.log(lastWordCount);
//     }
//   }
// }

// const arr = s.trim("").split("");
// arr[arr.length - 1].length;
// console.log(arr);

let s = "Hello World";
function lengthOfLastWord(s) {
  // Trim spaces at both ends, split by spaces, and get the last word
  const words = s.trim().split(" ");
  return words[words.length - 1].length;
}
console.log(lengthOfLastWord(s));
