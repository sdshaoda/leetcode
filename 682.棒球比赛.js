/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let sum = 0
  let round = 0
  let num = []

  for (let i = 0, len = ops.length; i < len; i++) {
    if (ops[i] === '+') {
      round = +num[num.length - 1] + +num[num.length - 2]
      sum += round
      num.push(round)
    } else if (ops[i] === 'D') {
      round = +num[num.length - 1] * 2
      sum += round
      num.push(round)
    } else if (ops[i] === 'C') {
      sum -= +num[num.length - 1]
      num.pop()
    } else {
      round = +ops[i]
      sum += round
      num.push(round)
    }
  }

  return sum
}
// @lc code=end
