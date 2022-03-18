/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0, right = nums.length-1, mid = 0;
    while(left < right) {
        mid = left + Math.floor((right-left)/2);
        if(nums[mid] < nums[right]){
            right = mid;
        } else if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = right - 1;
        }
    }
    return nums[left];
};