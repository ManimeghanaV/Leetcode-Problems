/*
Given a string s, find the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let subs = [];

  for (let i = 0; i < s.length; i++) {
    if (subs.includes(s[i])) {
      subs = subs.slice(subs.indexOf(s[i]) + 1);
    }
    subs.push(s[i]);
    max = subs.length > max ? subs.length : max;
  }
  return max;
};
