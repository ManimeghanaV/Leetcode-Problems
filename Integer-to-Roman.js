/*
Given an integer, convert it to a roman numeral.
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let integer = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let symbol = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let result = "";
  let i = 0;
  while (num > 0) {
    if (num >= integer[i]) {
      result += symbol[i];
      num -= integer[i];
    } else {
      i++;
    }
  }
  return result;
};
