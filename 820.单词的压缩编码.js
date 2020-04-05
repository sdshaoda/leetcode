/*
 * @lc app=leetcode.cn id=820 lang=javascript
 *
 * [820] 单词的压缩编码
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  let noIncludeWords = []
  words.sort((x, y) => y.length - x.length)

  for (let i = 0; i < words.length; i++) {
    let include = false
    for (let j = 0; j < noIncludeWords.length; j++) {
      if (
        noIncludeWords[j].lastIndexOf(words[i]) + words[i].length ===
        noIncludeWords[j].length
      ) {
        include = true
      }
    }
    if (!include) {
      noIncludeWords.push(words[i])
    }
  }

  return noIncludeWords.join('#').length + 1
}
// @lc code=end
