/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let initial = 0;
  let end = nums.length - 1;
  let mid = 0;
  while (initial <= end) {
    mid = Math.floor((initial + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      initial = mid + 1;
    }
  }

  return -1;
};
