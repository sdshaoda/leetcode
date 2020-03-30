/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0
  for (let i = 0, l = height.length; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      let area = (j - i) * Math.min(height[i], height[j])
      if (area > max) {
        max = area
      }
    }
  }
  return max
}
// @lc code=end
