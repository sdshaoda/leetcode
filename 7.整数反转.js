/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  x = x.toString()
  if (x[0] === '-') {
    var isNegative = true
    x = x.substr(1)
  }
  var y = ''
  for (var i = 0, l = x.length; i < l; i++) {
    y += x[l - i - 1]
  }
  if (isNegative) {
    if (y > Math.pow(2, 31)) {
      return 0
    } else {
      return Number('-' + y)
    }
  }
  if (y > Math.pow(2, 31) - 1) {
    return 0
  }
  return Number(y)
}
// @lc code=end
