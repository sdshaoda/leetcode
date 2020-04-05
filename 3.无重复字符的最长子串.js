/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxLength = 0

  for (let i = 0, l = s.length; i < l; i++) {
    for (let j = i, subStr = []; j < l; j++) {
      if (subStr.includes(s[j])) {
        if (subStr.length > maxLength) {
          maxLength = subStr.length
        }
        break
      } else if (j < l - 1) {
        subStr.push(s[j])
      } else {
        if (subStr.length + 1 > maxLength) {
          maxLength = subStr.length + 1
        }
      }
    }
  }

  return maxLength
}
// @lc code=end
