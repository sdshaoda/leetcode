/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  if (s.trim().length === 0) {
    return false
  }
  var n = Number(s)
  if (isNaN(n)) {
    return false
  }
  return true
}
// @lc code=end
