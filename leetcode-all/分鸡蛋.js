
/* 题目：白云大妈手上有x个鸡蛋，想把鸡蛋分给其他人，每次可以执行以下操作：
（1） 从鸡舍里拿出一颗鸡蛋
（2）如果鸡蛋数量能被三等分，则分出两份，手上留一份
重复上述过程直到手上有y个鸡蛋为止，问至少需要多少次操作 */

function getOperationNum(x, y){
    if(x == y) {
        return 0;
    }
    let t = x % 3, s = t==0? 0 : 3-t, res = s+1;
    x = (s+x)/3;
    while(x != y) {
        // 补充为3的倍数所需要的操作次数
        t = x % 3;
        s = t==0? 0 : 3-t;
        x = Math.floor((x+s)/3);
        res = res+ s + 1;
    }
    return res;
}

ans = getOperationNum(2, 2);
console.log(ans);