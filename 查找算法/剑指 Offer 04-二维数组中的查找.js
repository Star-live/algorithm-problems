/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
    if (matrix.length == 0 || matrix[0].length == 0) {
        return false;
    }
    let n = matrix.length, m = matrix[0].length, i = 0, j =m-1;
    while(i<n && j >= 0) {
        if(matrix[i][j] == target) {
            return true;
        } else if (matrix[i][j] < target) {
            i++;
        } else {
            j--;
        }
    }
    return false;
};
console.log(findNumberIn2DArray([[5], [6]], 6));
