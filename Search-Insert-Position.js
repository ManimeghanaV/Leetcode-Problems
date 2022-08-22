/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let initial = 0;
  let end = nums.length;

  for (let i = 0; i < end; i++) {
    if (target === nums[i] || target < nums[i]) return i;
  }
  //alert(end);
  return end;
};
