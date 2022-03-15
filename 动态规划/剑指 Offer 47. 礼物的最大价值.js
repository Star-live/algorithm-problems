/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    let m = grid.length, n = grid[0].length, i = 0, j = 0;
    for(i = 1; i < m; i++) {
        grid[i][0] += grid[i-1][0];
    }
    for(j = 1; j < n; j++) {
        grid[0][j] += grid[0][j-1];
    }
    for(i = 1; i < m; i++) {
        for (j = 1; j < n; j++) {
            grid[i][j] = grid[i-1][j] > grid[i][j-1] ? grid[i-1][j]+grid[i][j] : grid[i][j-1]+grid[i][j];
        }
    }
    return grid[m-1][n-1];
};