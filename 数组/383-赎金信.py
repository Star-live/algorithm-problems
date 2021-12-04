import collections


def canConstruct(ransomNote: str, magazine: str) -> bool:
    src_input = [0]*26
    for i in range(len(magazine)):
        idx = ord(magazine[i])-ord('a')
        src_input[idx] = src_input[idx] + 1
    for i in range(len(ransomNote)):
        idx = ord(ransomNote[i]) - ord('a')
        src_input[idx] = src_input[idx] - 1
        if src_input[idx] < 0:
            return False
    return True


def canConstruct_example(ransomNote, magazine):
    if len(ransomNote) > len(magazine):
        return False
    ### test for collections
    # a = collections.Counter(ransomNote)
    # b = collections.Counter(magazine)
    # c = a - b
    return not collections.Counter(ransomNote) - collections.Counter(magazine)


if __name__=="__main__":
    ransomNote = "aab"
    magazine = "aaabcdef"
    result = canConstruct(ransomNote, magazine)
    # result = canConstruct_example(ransomNote, magazine)
    print(result)