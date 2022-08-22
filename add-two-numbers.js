/*You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let arr = [];
  let sum = 0;
  if (l1.length === l2.length) {
    for (let i = 0; i < l1.length; i++) {
      sum = l1[i] + l2[i];
      if (sum.length === 1) {
        arr.push(sum);
      } else {
        let sliced = sum.toString.slice("");
        let newSliced = sliced.map(Number);
        arr.push(newSliced[newSliced.length - 1]);
        l1[i + 1] += newSliced[0];
      }
    }
  }
  return arr;
};
