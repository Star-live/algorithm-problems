
from collections import Counter

# 暴力破解法，时间复杂度四次方
def countQuadruplets_1(nums):
    n = len(nums)
    ans = 0
    for a in range(0, n-3):
        for b in range(a+1, n-2):
            for c in range(b+1, n-1):
                for d in range(c+1, n):
                    if nums[a] + nums[b] + nums[c] == nums[d]:
                        ans += 1
    return ans


# 使用哈希表存储nums[d]，时间复杂度三次方
def countQuadruplets_2(nums):
    n = len(nums)
    ans = 0
    cnt = Counter()
    for c in range(n-2, 1, -1):
        cnt[nums[c+1]] += 1
        for a in range(0, c-1):
            for b in range(a+1, c):
                if (total := nums[a] + nums[b]+nums[c]) in cnt:
                    ans += cnt[total]
    return ans


# 使用哈希表存储nums[d]-nums[c]，时间复杂度二次方
def countQuadruplets_3(nums):
    n = len(nums)
    ans = 0
    cnt = Counter()
    for b in range(n-3, 0, -1):
        for d in range(b+2, n):
            cnt[nums[d]-nums[b+1]] += 1
        for a in range(b):
            if (total := nums[a] + nums[b]) in cnt:
                ans += cnt[total]
    return ans


if __name__=="__main__":
    nums = [1,1,1,3,5]
    print(countQuadruplets_1(nums))
    print(countQuadruplets_2(nums))
    print(countQuadruplets_3(nums))
