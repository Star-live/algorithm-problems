/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
    let i = m-1, j = n-1, tail = m+n-1, cur = 0;
    while(i >= 0 || j >= 0){
        if(i == -1) {
            cur = B[j--];
        } else if (j == -1) {
            cur = A[i--];
        } else if (A[i] > B[j]) {
            cur = A[i--];
        } else {
            cur = B[j--];
        }
        A[tail--] = cur;
    }
};