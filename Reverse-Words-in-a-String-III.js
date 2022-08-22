/**
 * Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.split(" ");

  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[i].split("").reverse().join("");
  }
  return temp.join(" ");
};
