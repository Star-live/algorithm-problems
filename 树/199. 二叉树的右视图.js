/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (root === null) {
        return [];
    }
    let deque = [], ans = [], tempLevel = [], tempNode = root, n = 0;
    deque.push(root);
    ans.push(root.val);
    while(deque.length != 0) {
        n = deque.length;
        tempLevel = [];
        while(n != 0) {
            tempNode = deque.shift();
            if(tempNode.left !== null) {
                tempLevel.push(tempNode.left.val);
                deque.push(tempNode.left)
            }
            if(tempNode.right !== null) {
                tempLevel.push(tempNode.right.val);
                deque.push(tempNode.right);
            }
            n--;
        }
        if (tempLevel.length !== 0) {
            ans.push(tempLevel[tempLevel.length-1]);
        }
    }
    return ans;
};

// 深度搜索方法
var rightSideView = function(root) {
    let rightmost_value_at_depth = {}, max_depth = -1, nodeStack = [root], depthStack = [0], tempNode = root, tempDepth = 0, ans=[];
    while(nodeStack.length != 0){
        tempNode = nodeStack.pop();
        tempDepth = depthStack.pop();
        if(tempNode !== null) {
            // 维护二叉树的深度
            max_depth = Math.max(max_depth, tempDepth);
            // 如果不存在对应深度的节点我们才插入
            if(!(tempDepth in rightmost_value_at_depth)) {
                rightmost_value_at_depth[tempDepth] = tempNode.val;
            }
            nodeStack.push(tempNode.left);
            nodeStack.push(tempNode.right);
            depthStack.push(tempDepth+1);
            depthStack.push(tempDepth+1);
        }
    }
    for(tempDepth = 0; tempDepth <= max_depth; tempDepth++){
        ans.push(rightmost_value_at_depth[tempDepth]);
    }
    return ans;
}
// 广度优先搜索方法
var rightSideView = function(root) {

}