/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n))
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArr = nums1.concat(nums2).sort((a, b) => a - b);

  let median;
  if (mergedArr.length % 2 != 0) {
    median = mergedArr[Math.floor(mergedArr.length / 2)];
  } else {
    median =
      (mergedArr[mergedArr.length / 2] + mergedArr[mergedArr.length / 2 - 1]) /
      2;
  }
  console.log(mergedArr);
  return median;
};
