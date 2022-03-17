/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let n = nums.length, i = 0, j = n - 1, mid = 0, ans = 0;
    while(i < j) {
        mid = Math.floor(i+(j-i)/2);
        if(nums[mid] < nums[j]) {
            j = mid;
        } else {
            i = mid+1;
        }
    }
    return nums[i];
};