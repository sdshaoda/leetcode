/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = ''

  if (!strs.length) {
    return prefix
  }

  let len = strs[0].length
  for (let i = 1, l = strs.length; i < l; i++) {
    len = Math.min(len, strs[i].length)
  }

  if (!len) {
    return prefix
  }

  for (let i = 0; i < len; i++) {
    let s = ''
    let commen = true
    for (let j = 0, l = strs.length; j < l; j++) {
      if (j === 0) {
        s = strs[j][i]
      } else if (strs[j][i] !== s) {
        commen = false
      }
    }
    if (commen) {
      prefix += s
    } else {
      break
    }
  }

  return prefix
}
// @lc code=end
