def truncateSentence(s: str, k: int) -> str:
    result = s.split(' ')
    result = result[:k]
    return ' '.join(result)


def truncateSentence_example(ransomNote, magazine):
    n, end, count = len(s), 0, 0
    for i in range(1, n+1):
        if i == n or s[i] == ' ':
            count += 1
            if count == k:
                end = i
                break
    return s[:end]


if __name__=="__main__":
    s = 'What is the solution to this problem'
    k = 3
    result = truncateSentence(s, k)
    # result = canConstruct_example(ransomNote, magazine)
    print(result)