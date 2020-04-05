/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let l1 = nums1.length
  let l2 = nums2.length
  let len = l1 + l2
  let nums = []
  let average

  for (let i = 0, j = 0; i < l1 || j < l2; ) {
    if (i === l1) {
      nums.push(nums2[j])
      j++
      continue
    } else if (j === l2) {
      nums.push(nums1[i])
      i++
      continue
    }
    if (nums1[i] < nums2[j]) {
      nums.push(nums1[i])
      i++
    } else {
      nums.push(nums2[j])
      j++
    }
  }
  if (len % 2 === 0) {
    average = (nums[len / 2] + nums[len / 2 - 1]) / 2
  } else {
    average = nums[Math.floor(len / 2)]
  }

  return average
}
// @lc code=end
