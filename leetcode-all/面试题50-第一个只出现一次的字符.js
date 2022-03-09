/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    let n = s.length, i = 0, ans = {}, b = [];
    if (n == 0) {
        return ' ';
    }
    while(i < n){
        if(s[i] in ans) {
            ans[s[i]] = false;
        } else {
            b.push(s[i]);
            ans[s[i]] = true;
        }
        i++;
    }
    for(i = 0; i < b.length; i++) {
        if(ans[b[i]]) {
            return b[i];
        }
    }
    return ' ';
};
console.log(firstUniqChar('leetcode'));