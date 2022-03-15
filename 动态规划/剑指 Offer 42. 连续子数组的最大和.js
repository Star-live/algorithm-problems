/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let n = nums.length, ans = nums[0], i = 0, dp = new Array(n).fill(0);
    dp[0] = nums[0];
    for(i = 1; i < n; i++) {
        if (dp[i-1] <= 0) {
            dp[i] = nums[i];
        } else {
            dp[i] = dp[i-1] + nums[i];
        }
        if (dp[i] > ans) {
            ans = dp[i];
        }
    }
    return ans;
};
var num = maxSubArray([-2,-3,-5]);
console.log(num);