var exchange = function(nums) {
    let i = 0, n = nums.length, j = n-1, temp = 0;
    while(i < j) {
        while(i<j && nums[i]%2 == 1) {
            i++;
        }
        while(i < j && nums[j]%2 == 0){
            j--;
        }
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    return nums;
};