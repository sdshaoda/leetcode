/*
 * @lc app=leetcode.cn id=1162 lang=javascript
 *
 * [1162] 地图分析
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  let ret = -1
  let len = grid.length
  let land = []
  let ocean = []

  for (let row = 0; row < len; row++) {
    for (let col = 0; col < len; col++) {
      if (grid[row][col] === 1) {
        land.push([row, col])
      } else {
        ocean.push([row, col])
      }
    }
  }

  if (land.length === 0 || ocean.length === 0) {
    return ret
  }

  for (let i = 0, l = ocean.length; i < l; i++) {
    let dis = 2 * len - 2
    for (let j = 0, l = land.length; j < l; j++) {
      let curDis =
        Math.abs(ocean[i][0] - land[j][0]) + Math.abs(ocean[i][1] - land[j][1])
      if (curDis < dis) {
        dis = curDis
      }
    }
    if (dis > ret) {
      ret = dis
    }
  }

  return ret
}
// @lc code=end
