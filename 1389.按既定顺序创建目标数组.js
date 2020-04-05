/*
 * @lc app=leetcode.cn id=1389 lang=javascript
 *
 * [1389] 按既定顺序创建目标数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  let ret = []

  for (let i = 0, l = nums.length; i < l; i++) {
    ret.splice(index[i], 0, nums[i])
  }

  return ret
}
// @lc code=end
