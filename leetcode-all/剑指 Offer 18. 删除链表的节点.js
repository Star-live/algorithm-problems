/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
    if(head === null) {
        return head;
    }
    if (head.val == val) {
        head = head.next;
        return head;
    }
    let cur = head;
    while(cur.next) {
        if(cur.next.val == val) {
            cur.next = cur.next.next;
            return head;
        }
        cur = cur.next;
    }
    return head;
};

var deleteNode = function(head, val) {
    if(head.val == val) {
        return head.next;
    }
    let pre = head, cur = head.next;
    while(cur && cur.val != val) {
        pre = cur;
        cur = cur.next;
    }
    if(cur) {
        pre.next = cur.next;
    }
    return head;
}