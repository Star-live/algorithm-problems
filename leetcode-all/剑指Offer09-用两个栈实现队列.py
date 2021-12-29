# 栈是先进后出，队列是先进先出；输入栈，一个输出栈，数据从输入栈到输出栈，从输出栈输出的元素就满足先进先出。
class CQueue:
    stack1 = []
    stack2 = []

    def __init__(self):
        self.stack1 = []
        self.stack2 = []


    def appendTail(self, value: int) -> None:
        self.stack1.append(value)


    def deleteHead_example(self) -> int:
        if self.stack2:
            return self.stack2.pop()
        if not self.stack1:
            return -1
        while self.stack1:
            self.stack2.append(self.stack1)
        return self.stack2.pop()
    
    
    def deleteHead(self) -> int:
        if len(self.stack2) == 0:
            n = len(self.stack1)
            for i in range(n):
                self.stack2.append(self.stack1.pop())
        if len(self.stack2) == 0:
            return -1
        else:
            return self.stack2.pop()


if __name__=="__main__":
    obj = CQueue()
    obj.appendTail(5)
    obj.appendTail(2)
    param_2 = obj.deleteHead()
    print(param_2)