/* 
    排序过程
    2 3 4 1
    1 3 4 3
    1 2 4 3
    1 2 3 3
    1 2 3 4

 */

function quick_sort(a, left, right) {
    if(left >= right) {
        return;
    }
    let first = left, last = right, key = a[first];
    while(first<last) {
        while(first < last && a[last] >= key) {
            --last;
        }
        a[first] = a[last];
        while(first < last && a[first] <= key) {
            ++first;
        }
        a[last] = a[first];
    }
    a[first] = key;
    quick_sort(a, left, first-1);
    quick_sort(a, first+1, right);
}

var a = [2,3,4,1];
quick_sort(a, 0, a.length-1);
console.log(a);


// 复习 * 1
function quick_sort_1(a, left, right) {
    if(left >= right) {
        return;
    }
    let first = left, last = right, key = a[left];
    while(first < last) {
        while(first < last && a[last] >= key) {
            --last;
        }
        a[first] = a[last];
        while(first < last && a[first] <= key) {
            ++first;
        }
        a[last] = a[first];
    }
    a[first] = key;
    quick_sort_1(a, left, first-1);
    quick_sort_1(a, first+1, right);
}
var a = [2,3,4,1,5];
quick_sort_1(a, 0, a.length-1);
console.log(a);