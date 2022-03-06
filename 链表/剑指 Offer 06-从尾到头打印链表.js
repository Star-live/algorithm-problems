/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
var reversePrint = function(head) {
    var result = [];
    while(head !== null) {
        result.push(head.val);
        head = head.next;
    }
    var len = result.length - 1, temp;
    for(var i = 0; i < len/2; i++) {
        temp = result[i];
        result[i] = result[len-i];
        result[len-i] = temp;
    }
    return result;
};

var h = new ListNode(1);
var tail = h;
var num = [1, 3, 2];
for (var i = 1; i < num.length; i++){
    var temp = new ListNode(num[i]);
    tail.next = temp;
    tail = tail.next;
}

console.log(reversePrint(h));
