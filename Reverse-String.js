/**
 * Write a function that reverses a string. The input string is given as an array of characters s
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let len = s.length;
  for (let i = 0; i < len; i++) {
    s.push(s[len - (i + 1)]);
    // console.log(s);
  }
  s.splice(0, len);
};
