/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let num = 0

  for (let i = 0, l = S.length; i < l; i++) {
    if (J.indexOf(S[i]) > -1) {
      num++
    }
  }

  return num
}
// @lc code=end
