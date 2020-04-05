/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length === 0) {
    return 0
  }
  let index = -1

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] === needle[j]) {
        if (j === 0) {
          index = i
        } else if (j === needle.length - 1) {
          break
        }
        continue
      } else {
        index = -1
        break
      }
    }
    if (index !== -1) {
      break
    }
  }

  return index
}
// @lc code=end
