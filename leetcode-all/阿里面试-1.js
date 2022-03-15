var data = [
	{userId: 8, title: 'title1'},
	{userId: 11, title: 'other'},
	{userId: 15, title: null},
	{userId: 19, title: 'title2'}
];

function compare(a, b) {
  return b['userId'] - a['userId'];
}

var find = function(origin) {
	//请补充你的代码
  let i = 0, n = origin.length, ans = [], patt = /(?<=[a-z]*[A-Z]*)\d$/g;
  // 剔除不符合条件的元素
  for(i = 0; i < n; i++){
    if(origin[i]['title'] === null || patt.test(origin[i]['title'])==false) {
        continue;
    }
    ans.push(origin[i]);
  }
  // 元素排序
  ans.sort(compare);
  return ans;
}

var result = find(data);
console.log(result);
