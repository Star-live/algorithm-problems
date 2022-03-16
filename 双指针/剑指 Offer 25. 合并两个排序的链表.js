var mergeTwoLists = function(l1, l2) {
    let ans = new ListNode(0), cur = ans;
    while(l1 !== null && l2 !== null) {
        if(l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur= cur.next;
    }
    cur.next = l1 === null ? l2 : l1;
    return ans.next;    
};