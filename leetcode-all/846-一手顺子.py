from collections import Counter


def isNStraightHand(hand, groupSize) -> bool:
    if len(hand) % groupSize > 0:
        return False
    hand.sort()
    cnt = Counter(hand)
    for x in hand:
        if cnt[x] == 0:
            continue
        for num in range(x, x+groupSize):
            if cnt[num] == 0:
                return False
            cnt[num] -= 1
    return True

if __name__=="__main__":
    hand = [1,2,3,6,2,3,4,7,8]
    groupSize = 3
    print(isNStraightHand(hand, groupSize))