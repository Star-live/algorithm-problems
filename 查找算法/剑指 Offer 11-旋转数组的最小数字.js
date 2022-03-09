/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
    // 找到最小结点
    let n = numbers.length, left = 0, right = n-1, mid = 0;
    while(left < right) {
        mid = Math.floor(left+(right-left)/2);
        if (numbers[mid] > numbers[right]) {
            left = mid + 1;
        } else if(numbers[mid] < numbers[right]){
            right = mid;
        } else {
            right--;
        }
    }
    return numbers[left];
};

console.log(minArray([3,4,5,1,2]));
console.log(minArray([2,2,2,0,1]));
console.log(minArray([0]));
// 二分查找
// 顺序存储 & 元素有序
// 通过下标获得关键字 && 任取一个关键字的值即可确定所寻找关键字是在它的前面还是后面