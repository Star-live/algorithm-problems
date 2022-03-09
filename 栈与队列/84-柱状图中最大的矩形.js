// 暴力解法
/* var largestRectangleArea = function(heights) {
    var i = 0, left = 0, right = 0, key=0, ans = 0;
    while(i < heights.length) {
        key = heights[i];
        for(left = i-1; left >= 0; left--) {
            if (heights[left] < key) {
                break;
            }
        }
        for(right = i+1; right < heights.length; right++) {
            if (heights[right] < key) {
                break;
            }
        }
        left++;
        right--;
        ans = (right- left + 1) * key > ans ? (right- left + 1) * key : ans;
        i++;
    }
    return ans;
}; */

// 单调栈存储左右边界 [2,1,5,6,2,3];
/* var largestRectangleArea = function(heights) {
    var n = heights.length, left = [], right = [], stack = [], i = 0, ans = 0, temp = 0;
    // 遍历左侧边界
    while(i < n) {
        while(stack.length != 0 && heights[stack[stack.length-1]] >= heights[i]) {
            stack.pop();
        }
        left[i] = stack.length == 0 ? -1 : stack[stack.length-1];
        stack.push(i);
        i++;
    }

    // 遍历右侧边界
    stack = [];
    for(i = n-1; i >= 0; --i) {
        while(stack.length !=0 && heights[stack[stack.length-1]] >= heights[i]) {
            stack.pop();
        }
        right[i] = stack.length == 0 ? n : stack[stack.length-1];
        stack.push(i);
    }

    // 计算结果
    for(i = 0; i < n; i++) {
        temp = (right[i]-left[i] - 1) * heights[i];
        if (temp > ans) {
            ans = temp;
        }
    }
    return ans;
}; */

// 单调栈
var largestRectangleArea = function(heights) {
    let n = heights.length, left = new Array(n), right = new Array(n).fill(n), stack = [], i = 0, ans = 0, temp = 0;
    while(i < n) {
        while(stack.length != 0 && heights[stack[stack.length-1]] >= heights[i]) {
            right[stack.pop()] = i;
        }
        left[i] = stack.length == 0 ? -1 : stack[stack.length-1];
        stack.push(i);
        i++;
    }

    // 计算结果
    for(i = 0; i < n; i++){
        temp = (right[i] - left[i] - 1) * heights[i];
        if (ans < temp) {
            ans = temp;
        }
    }
    return ans;
};

var heights = [1];
console.log(largestRectangleArea(heights));