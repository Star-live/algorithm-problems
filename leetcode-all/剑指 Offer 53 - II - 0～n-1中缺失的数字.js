/**
 * @param {number[]} nums
 * @return {number}
 */


var missingNumber = function(nums) {
    if (nums.length == 0) {
        return 1;
    }
    let left = 0, right = nums.length - 1;
    while(left < right) {
        const mid = Math.floor((left+right)/2);
        if(nums[mid] === mid) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return right;
};
console.log(missingNumber([0,1,2,3,4,5,6,7,9]));