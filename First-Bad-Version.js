/**
 * You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function (n) {
    let initial = 1;
    let end = n;

    let result = n;
    let mid = 0;
    while (initial <= end) {
      mid = Math.floor((initial + end) / 2);

      if (isBadVersion(mid) === false) {
        initial = mid + 1;
      } else if (isBadVersion(mid) === true) {
        end = mid - 1;
      }
      if (isBadVersion(mid) === true && isBadVersion(mid - 1) === false)
        return mid;
    }
  };
};
