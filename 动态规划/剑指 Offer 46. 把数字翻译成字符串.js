/**
 * @param {number} num
 * @return {number}
 */
// 使用字符串处理
/* var translateNum = function(num) {
    num = num.toString();
    let n = num.length, a = 1, b = 1, c = 2, i = 2;
    // 从长度为2开始遍历
    for(i = n-2; i >= 0; i--) {
        if(num.substr(i, 2) >= '10' && num.substr(i, 2) <= '25') {
            c = a + b;
        } else {
            c = b;
        }
        a = b;
        b = c;
    }
    return b;
}; */

// 使用数字形式处理
var translateNum = function(num) {
    let a = 1, b = 1, c = 1, x = 0, y = num%10, tmp = 0;
    while(num != 0) {
        num = Math.floor(num / 10);
        x = num%10;
        tmp = 10 * x + y;
        c = (tmp >= 10 && tmp<=25) ? a+b : b;
        a = b;
        b = c;
        y = x;
    }
    return b;
}

var num = 12258;
var ans = translateNum(num);
console.log(ans);