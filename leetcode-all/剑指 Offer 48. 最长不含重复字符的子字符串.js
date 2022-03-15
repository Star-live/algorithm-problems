/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let dic = {}, res = 0, i = -1, j = 0;
    for(j = 0; j < s.length; j++) {
        if(s[j] in dic) {
            i = Math.max(dic[s[j]], i); //更新左指针
        }
        dic[s[j]] = j;  // 哈希表记录
        res = Math.max(res, j-i);
    }
    return res;
};
var str1 = "abcabcbb";
var str2 = "bbbbb";
var ans = lengthOfLongestSubstring(str2);
console.log(ans);