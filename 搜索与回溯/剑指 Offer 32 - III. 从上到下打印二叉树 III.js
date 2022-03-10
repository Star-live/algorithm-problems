/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null) {
        return [];
    }
    let deque = [], tmp = [], ans = [], node = {}, i = 0, n = 0, flag = true;
    deque.push(root);
    while(deque.length != 0) {
        tmp = [];
        n = deque.length;
        for(i = 0; i < n; i++) {
            node = deque.shift();
            if(flag) {
                tmp.push(node.val);
            } else {
                tmp.unshift(node.val);
            }
            if(node.left !== null) {
                deque.push(node.left);
            }
            if(node.right !== null) {
                deque.push(node.right);
            }
        }
        ans.push(tmp);
        flag = ! flag;
    }
    return ans;

};