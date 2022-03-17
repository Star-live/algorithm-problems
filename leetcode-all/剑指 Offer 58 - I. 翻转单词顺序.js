/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let n = s.length, i = n - 1, j = 0, res = [];
    while(s[i] == ' '){
        i--;
    }
    j = i;
    while(i >= 0) {
        while(i >=0 && s[i] != ' ') {
            i--;
        }
        res.push(s.substring(i+1, j+1));
        // 删除多余空格
        while(s[i] == ' '){
            i--;
        }
        j = i;
    }
    return res.join(' ');    
};