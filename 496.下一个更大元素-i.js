/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let ret = []

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (ret[i] === undefined && nums1[i] === nums2[j]) {
        ret[i] = -1
        continue
      }
      if (ret[i] !== undefined && nums1[i] < nums2[j]) {
        ret[i] = nums2[j]
        break
      }
    }
  }

  return ret
}
// @lc code=end
