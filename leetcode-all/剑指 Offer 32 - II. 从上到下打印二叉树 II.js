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
    let deque = [], ans = [], tmp = [], tempNode = {}, i = 0, n = 0;
    deque.push(root);
    while(deque.length != 0) {
        tmp = [];
        n = deque.length;
        for(i = 0; i < n; i++) {
            tempNode = deque.shift();
            tmp.push(tempNode.val);
            if(tempNode.left !== null) {
                deque.push(tempNode.left);
            }
            if (tempNode.right !== null) {
                deque.push(tempNode.right);
            }
        }
        ans.push(tmp);
    }
    return ans;
};