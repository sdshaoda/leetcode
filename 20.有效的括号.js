/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let len = s.length
  if (len === 0) {
    return true
  }

  let valid = true
  let left = []
  for (let i = 0; i < len; i++) {
    if ('([{'.includes(s[i])) {
      left.push(s[i])
      continue
    }
    if (
      (s[i] === ')' && left.pop() !== '(') ||
      (s[i] === ']' && left.pop() !== '[') ||
      (s[i] === '}' && left.pop() !== '{')
    ) {
      valid = false
      break
    }
  }
  if (left.length > 0) {
    valid = false
  }
  return valid
}
// @lc code=end
