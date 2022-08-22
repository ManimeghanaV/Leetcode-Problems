/**
 *
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  //for(let i=0;i<k;i++){
  //console.log(nums[nums.length-1]);
  let len = nums.length;
  k = k % len;
  let start = nums.slice(len - k);
  let end = nums.slice(0, len - k);

  for (let i = 0; i < len; i++) {
    if (i < k) {
      nums[i] = start[i];
    } else {
      nums[i] = end[i - k];
    }
  }
};
