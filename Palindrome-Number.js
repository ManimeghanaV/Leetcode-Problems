/*
Given an integer x, return true if x is palindrome integer.
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let r = 0;
  let sum = 0;
  let temp = x;
  while (x > 0) {
    r = x % 10;
    sum = sum * 10 + r;
    x = Number(Math.floor(x / 10));
  }
  if (sum === temp) return true;
  else return false;
};
