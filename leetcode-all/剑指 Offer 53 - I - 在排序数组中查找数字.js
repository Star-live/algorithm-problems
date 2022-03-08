const binarySearch = function (nums, target, lower) {
    let left = 0, right = nums.length - 1, ans = nums.length;
    while(left <= right) {
        const mid = Math.floor((left+right)/2);
        if (nums[mid] > target || (lower && nums[mid] >= target)) {
            right = mid - 1;
            ans = mid;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var leftIdx = 0, rightIdx = nums.length-1, ans = 0;
    leftIdx = binarySearch(nums, target, true);
    rightIdx = binarySearch(nums, target, false) - 1;

    if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target){
        ans = rightIdx - leftIdx + 1;
    } else {
        ans = 0;
    }
    return ans;
};
console.log(search([2,2,2,3,5], 2));