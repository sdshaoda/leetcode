/*
 * @lc app=leetcode.cn id=807 lang=javascript
 *
 * [807] 保持城市天际线
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  let len = grid.length

  if (len < 2) {
    return 0
  }

  let num = 0
  let row = []
  let col = []

  for (let i = 0; i < len; i++) {
    row[i] = grid[i].reduce((pre, cur) => {
      return pre > cur ? pre : cur
    })

    let tmp = []
    for (let j = 0; j < len; j++) {
      tmp.push(grid[j][i])
    }
    col[i] = tmp.reduce((pre, cur) => {
      return pre > cur ? pre : cur
    })
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      num += Math.min(row[i], col[j]) - grid[i][j]
    }
  }

  return num
}
// @lc code=end
