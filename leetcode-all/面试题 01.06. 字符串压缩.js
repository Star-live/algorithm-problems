/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    if (S.length == 0) {
        return S;
    }
    let i = 1, num = 1, pre_c = S[0],ans = [pre_c];
    while(i < S.length) {
        if (S[i] == pre_c) {
            num += 1;
        } else {
            ans.push(num);
            pre_c = S[i];
            ans.push(pre_c);
            num = 1;
        }
        i++;
    }
    ans.push(num);
    if (ans.length < S.length) {
        return ans.join('');
    } else {
        return S;
    }
};

console.log(compressString('aabcccccaaa'));