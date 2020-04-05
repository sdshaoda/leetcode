/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  let map = {}
  for (let i = 0, l = deck.length; i < l; i++) {
    if (!map[deck[i]]) {
      map[deck[i]] = 1
    } else {
      map[deck[i]] += 1
    }
  }
  let arr = [...new Set(Object.values(map))]
  function gcd(a, b) {
    return a % b === 0 ? b : arguments.callee(b, a % b)
  }
  // 两两求最大公约数
  while (arr.length > 1) {
    arr.push(gcd(arr.pop(), arr.pop()))
  }
  if (arr[0] === 1) {
    return false
  }
  return true
}
// @lc code=end
