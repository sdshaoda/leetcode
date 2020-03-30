/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
var mergeTwoLists = function(l1, l2) {
    let head = new ListNode('head')
    let temp = head

    while(l1 && l2) {
        let val1 = l1 ? l1.val : 0
        let val2 = l2 ? l2.val : 0
        if (val1 < val2) {
            temp.next = new ListNode(val1)
            l1 = l1.next
        } else {
            temp.next = new ListNode(val2)
            l2 = l2.next
        }
        temp = temp.next
    }
    if (l1) {
        temp.next = l1
    }
    if (l2) {
        temp.next = l2
    }
    return head.next
};
// @lc code=end

