/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head = new ListNode('head')
  let temp = head
  let up = 0,
    remain

  while (l1 || l2) {
    let n1 = l1 ? l1.val : 0
    let n2 = l2 ? l2.val : 0
    let sum = n1 + n2 + up
    up = Math.floor(sum / 10)
    remain = sum % 10

    temp.next = new ListNode(remain)

    temp = temp.next

    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }

  if (up > 0) {
    temp.next = new ListNode(up)
  }

  return head.next
}
// @lc code=end
