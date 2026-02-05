//In the name of Cross ✞
//Link to Problem: https://leetcode.com/problems/add-two-numbers/description/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2, carryFromBefore = 0) {
  if (!l1.next && !l2.next) {
    let sum = l1.val + l2.val + carryFromBefore;
    let carry = 0;
    if (sum > 9) {
      sum -= 10;
      const carryNode = new ListNode(1, null);
      const newListNode = new ListNode(sum, carryNode);
      return newListNode;
    }
    const newListNode = new ListNode(sum, null);
    return newListNode;
  }

  let sum = l1.val + l2.val + carryFromBefore;
  let carry = 0;
  if (sum > 9) {
    sum -= 10;
    carry = 1;
  }
  const newListNode = new ListNode(sum, null);

  if (!l1.next) {
    l1.next = new ListNode(0, null);
  }
  if (!l2.next) {
    l2.next = new ListNode(0, null);
  }

  const goToNextInL1 = l1.next;
  const goToNextInL2 = l2.next;

  const nextNode = addTwoNumbers(goToNextInL1, goToNextInL2, carry);
  newListNode.next = nextNode;
  return newListNode;
};
