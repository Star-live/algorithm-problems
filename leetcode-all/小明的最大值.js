function getMaxReminder(n, input){
    let i = 0, ans=[], max_r=0, left = 1, right = 1, p = 0;
    while(i<n) {
        left = input[0][i];
        right = input[1][i];
        p = input[2][i];
        left = left % p;
        right = right % p;
        if(left>right){
            max_r = p-1;
        } else {
            max_r = right;
        }
        ans.push(max_r);
        i++;
    }
    return ans;
}

// 使用二分查找寻找最大值

let ans = getMaxReminder(2, [[5, 1], [6, 2], [5, 7]])
console.log(ans);