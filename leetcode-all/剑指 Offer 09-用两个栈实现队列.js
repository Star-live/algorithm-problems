var CQueue = function(){
    // 为了实现先进先出，每次弹出时若尾栈为空，则将原栈栈中元素弹出后压入尾栈即可；否则尾栈直接弹出栈尾元素即可。
    this.tail = [];
    this.head = [];
};


CQueue.prototype.appendTail = function(value) {
    this.tail.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.head.length == 0) {
        var i = this.tail.length;
        if(i == 0) {
            return -1;
        }
        while(i != 0) {
            this.head.push(this.tail.pop());
            i--;
        }
    }
    return this.head.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

var obj = new CQueue()
obj.appendTail(3)
console.log(obj.deleteHead());
console.log(obj.deleteHead());
