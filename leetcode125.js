/**
 * @param {string} s
 * @return {boolean}
 */
let str = "hadgalagdan";
const isPalindrome = function (str) {
  if(str[0]===str[str.length-1]){
    return "true"
  }else{
    return "false"
  }
  

console.log(isPalindrome(str));
