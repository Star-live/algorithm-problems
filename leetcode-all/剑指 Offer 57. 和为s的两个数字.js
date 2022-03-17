/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n = nums.length, i = 0, j = n-1, temp = 0;
    while(i < j) {
        temp = nums[i]+nums[j];
        if(temp == target) {
            return [nums[i], nums[j]];
        } else if (temp < target) {
            i++;
        } else {
            j--;
        }
    }
};