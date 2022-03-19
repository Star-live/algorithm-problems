/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    function dfs(i, j, si, sj, visited, m, n, k){
        if(i>=m || j>=n || k<si+sj || visited[i][j]) {
            return 0;
        }
        visited[i][j] = true;
        return 1+dfs(i+1, j, (i+1)%10 == 0 ? si-8:si+1, sj, visited, m, n, k)+dfs(i, j+1, si, (j+1)%10 == 0 ? sj-8 : sj+1, visited, m, n, k);
    }
    let visited = new Array(m).fill(0).map(() => new Array(n).fill(0));
    return dfs(0, 0, 0, 0, visited, m, n, k)
};