/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }
    let deque = [], ans = [], tempNode = {};
    deque.push(root);
    ans.push(root.val);
    while(deque.length != 0){
        tempNode = deque.shift();
        if (tempNode.left !== null) {
            deque.push(tempNode.left);
            ans.push(tempNode.left.val);
        }
        if (tempNode.right !== null) {
            deque.push(tempNode.right);
            ans.push(tempNode.right.val);
        }
    }
    return ans;
};