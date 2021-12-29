class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    # 遍历指针进行存储
    def reversePrint(self, head: ListNode):
        ans = []
        while head != None:
            ans.insert(0, head.val)
            head = head.next
        return ans

    # 借助栈，先遍历一遍链表，再反向遍历一遍栈
    def reversePrint_example(self, head: ListNode):
        stack = []
        while head:
            stack.append(head.val)
            head = head.next
        return stack[::-1]