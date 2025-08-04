// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// let str = "hadgalagdan";
// const isPalindrome = function (str) {
//   if (str[0] === str[str.length - 1]) {
//     return "true";
//   } else {
//     return "false";
//   }
// };
// console.log(isPalindrome(str));

function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleaned = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // Compare with reversed version
  return cleaned === cleaned.split("").reverse().join("");
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("hadgalagdah"));
