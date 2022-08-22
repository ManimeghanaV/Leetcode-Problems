/**
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  /*let result=[];
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            if(numbers[i]+numbers[j]===target){
                return [i+1,j+1];
            }
        }
    }*/

  let result = [];
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    if (numbers[start] + numbers[end] > target) {
      end--;
      continue;
    } else if (numbers[start] + numbers[end] < target) {
      start++;
      continue;
    }
    return [start + 1, end + 1];
  }
};
