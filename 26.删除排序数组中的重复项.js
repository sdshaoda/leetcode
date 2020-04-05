/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let l = nums.length
  for (let i = 1; i < l; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(i, 1)
        i--
        l--
        break
      }
    }
  }
  return nums.length
}
// @lc code=end
