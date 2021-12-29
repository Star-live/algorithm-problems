# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    # 遍历，用一个辅助栈
    def reverseList(self, head: ListNode) -> ListNode:
        if not head:
            return head
        stack = []
        while head:
            stack.append(head.val)
            head = head.next
        ans = ListNode(stack.pop())
        temp = ans
        while stack:
            temp.next = ListNode(stack.pop())
            temp = temp.next
        return ans
    
    # 迭代，
    def reverseList(self, head: ListNode) -> ListNode:
        prev = ListNode(None)
        curr = head
        while curr:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        return prev


