/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (let i = 0, l = nums.length; i < l; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
      l--
      continue
    }
  }
  return nums.length
}
// @lc code=end
