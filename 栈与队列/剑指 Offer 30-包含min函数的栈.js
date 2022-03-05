/**
 * initialize your data structure here.
 */
 var MinStack = function() {
     // 维护两个栈一个是元素栈，一个是非递增的栈
     this.num = [];
     this.low = [];

};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.num.push(x);
    if(this.low.length == 0 || x <= this.low[this.low.length-1]) {
        this.low.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var x = this.num.pop();
    if (this.low[this.low.length-1] == x) {
        this.low.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.num[this.num.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.low[this.low.length-1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
 var minStack = new MinStack();
 minStack.push(-2);
 minStack.push(0);
 minStack.push(-3);
 console.log(minStack.min());
 minStack.pop();
 console.log(minStack.top());
 console.log(minStack.min());
 