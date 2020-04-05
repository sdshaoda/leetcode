/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var arr = s.split('')
  var sum = 0
  for (var i = 0, l = arr.length; i < l; i++) {
    if (arr[i] === 'I') {
      if (i + 1 < l && (arr[i + 1] === 'V' || arr[i + 1] === 'X')) {
        sum += -1
      } else {
        sum += 1
      }
    } else if (arr[i] === 'V') {
      sum += 5
    } else if (arr[i] === 'X') {
      if (i + 1 < l && (arr[i + 1] === 'L' || arr[i + 1] === 'C')) {
        sum += -10
      } else {
        sum += 10
      }
    } else if (arr[i] === 'L') {
      sum += 50
    } else if (arr[i] === 'C') {
      if (i + 1 < l && (arr[i + 1] === 'D' || arr[i + 1] === 'M')) {
        sum += -100
      } else {
        sum += 100
      }
    } else if (arr[i] === 'D') {
      sum += 500
    } else if (arr[i] === 'M') {
      sum += 1000
    }
  }

  return sum
}
// @lc code=end
