/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    var i = 0, a = new Object();
    while(i < nums.length) {
        if (nums[i] in a) {
            return nums[i];
        } else {
            a[nums[i]] = 1;
        }
        i++; 
    }
};
console.log(findRepeatNumber([2,1,2,3]));

