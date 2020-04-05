/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let arrS = S.split('')
  let arrT = T.split('')

  for (let i = 0, l = arrS.length; i < l; i++) {
    if (arrS[i] === '#') {
      if (i === 0) {
        arrS.splice(0, 1)
        i--
      } else {
        arrS.splice(i - 1, 2)
        i -= 2
      }
    }
  }
  for (let i = 0, l = arrT.length; i < l; i++) {
    if (arrT[i] === '#') {
      if (i === 0) {
        arrT.splice(0, 1)
        i--
      } else {
        arrT.splice(i - 1, 2)
        i -= 2
      }
    }
  }

  const strS = arrS.join('')
  const strT = arrT.join('')

  if (strS === strT) {
    return true
  }
  return false
}
// @lc code=end
