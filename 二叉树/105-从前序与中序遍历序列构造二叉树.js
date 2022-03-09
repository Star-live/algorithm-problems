// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length == 0 || inorder.length == 0) {
        return null;
    }
    var key = 0, key_id = 0, treeNode = {};
    key = preorder[0];
    key_id = inorder.indexOf(key);
    treeNode = new TreeNode(key, null, null);
    treeNode.left = buildTree(preorder.slice(1, 1+key_id), inorder.slice(0, key_id));
    treeNode.right = buildTree(preorder.slice(1+key_id), inorder.slice(key_id+1));
    return treeNode;
};

var preorder = [3,9,20,15,7], inorder = [9,3,15,20,7];
var nodeTree = buildTree(preorder, inorder);
console.log(nodeTree);
// a = [1,2];
// console.log(a.slice(0,1));