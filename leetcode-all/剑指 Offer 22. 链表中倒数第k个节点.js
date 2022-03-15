/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/* var getKthFromEnd = function(head, k) {
    let ans = [], cur = head;
    while(cur) {
        ans.push(cur);
        cur = cur.next;
    }
    return ans[ans.length-k];
}; */
var getKthFromEnd = function(head, k) {
    let former = head, latter = head;
    // 前结点先走k步
    while(k != 0) {
        former = former.next;
        k--;
    }
    // 前后结点一同向前走，当前结点走到末端时，后结点就是倒数第k个
    while(former != null) {
        former = former.next;
        latter = latter.next;
    }
    return latter;
};