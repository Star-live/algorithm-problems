# 时间超时
def checkPerfectNumber(num: int) -> bool:
    ans = 1
    for x in range(2, int(num/2)+1):
        if num % x == 0:
            ans += x
    if ans == num:
        return True
    return False

# 枚举 不超过sqrt(num)
def checkPerfectNumber_example(num: int) -> bool:
    if num == 1:
        return False
    ans = 1
    d = 2
    while d*d <= num:
        if num % d == 0:
            ans += d
            if d * d < num:
                ans += num / d
        d += 1
    return ans == num




if __name__=="__main__":
    num = 1
    print(checkPerfectNumber_example(int(num)))
