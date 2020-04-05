/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.min = Infinity
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (x < this.min) {
    this.min = x
  }
  return this.stack.push(x)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const popNumber = this.stack.pop()
  if (popNumber <= this.min) {
    this.min = Infinity
    for (let i = 0; i < this.stack.length; i++) {
      if (this.stack[i] < this.min) {
        this.min = this.stack[i]
      }
    }
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
