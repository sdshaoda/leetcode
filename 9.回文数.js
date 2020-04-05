/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var s = x.toString()
  var sReverse = s
    .split('')
    .reverse()
    .join('')
  return s === sReverse
}
// @lc code=end
