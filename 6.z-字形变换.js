/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s
  }
  let arr = []
  let row = 0
  for (let i = 0, l = s.length; i < l; i++) {
    if (arr[row]) {
      arr[row] += s[i]
    } else {
      arr[row] = s[i]
    }
    if (i % ((numRows - 1) * 2) < numRows - 1) {
      row++
    } else {
      row--
    }
  }
  console.log(arr)
  return arr.join('')
}
// @lc code=end
convert('AB', 1)
