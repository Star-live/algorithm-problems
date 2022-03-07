/**
 * @param {string} s
 * @return {string}
 */
/*  var replaceSpace = function(s) {
     var a = s.split(' ');
     a = a.join('%20');
     return a;
}; */
var replaceSpace = function(s) {
    var a = [];
    for(var i = 0; i < s.length; i++) {
        if(s[i] == ' ') {
            a.push('%20');
        } else {
            a.push(s[i]);
        }
    }
    return a.join('');
};
console.log(replaceSpace('We are family!'));