/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/* var reverseList = function(head) {
    if(head === null) {
        return null;
    }
    var num = [];   // 存储原链表元素
    while(head !== null) {
        num.push(head.val);
        head = head.next;
    }
    // 将栈中元素先入后出得到反序链表
    var result = new ListNode(num.pop());
    var tail = result;
    while(num.length != 0) {
        var cur = new ListNode(num.pop());
        tail.next = cur;
        tail = tail.next;
    }
    return result;
}; */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};



var h = new ListNode(1);
var tail = h;
var num = [1, 3, 2];
for (var i = 1; i < num.length; i++){
    var temp = new ListNode(num[i]);
    tail.next = temp;
    tail = tail.next;
}
reverseList(h);
