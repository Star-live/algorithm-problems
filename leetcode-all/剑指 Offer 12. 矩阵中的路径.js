/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    function dfs(i, j, k){
        if(!(i>=0 && i<board.length) || !(j>=0 && j<board[0].length) || board[i][j]!=word[k]){
            return false;
        }
        if(k == word.length-1){
            return true;
        }
        // 标志已访问
        board[i][j] = '';
        res = dfs(i+1, j, k+1) || dfs(i, j+1, k+1) || dfs(i-1, j, k+1) ||dfs(i, j-1, k+1)
        // 回溯方便下次访问
        board[i][j] = word[k]
        return res;
    }
    let m = board.length, n = board[0].length, i = 0, j = 0;
    // 将每个元素作为起点尝试搜索
    for(i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            if(dfs(i, j, 0)){
                return true;
            }
        }
    }
    return false;
};