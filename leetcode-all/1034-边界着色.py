from collections import deque

def idBorder(grid, row, col, m, n):
    if row == 0 or row == m-1 or col == n-1 or col == 0:
        return True
    if grid[row, col] != grid[row+1, col] or grid[row, col] != grid[row-1, col] or grid[row, col] != grid[row, col-1] or grid[row,col] != grid[row, col+1]:
        return True
    return False


def colorBorder(grid, row, col, color):
    # 思路：沿着一个方向直到找到边界，然后从该方块进行扩展寻找其他边界
    result = grid
    m = len(grid)
    n = len(grid[0])
    x = row
    y = col
    if row == 0 or row == m-1 or col == n-1 or col == 0:
        x = row
        y = col
    else:
        # 寻找第一个边界点
        for i in range(row, 0, -1):
            if grid[i-1, col] != grid[i, col] or grid[i, col] != grid[i+1, col] or grid[i, col] != grid[i, col-1] or grid[i,col] != grid[i, col+1]:
                x = i
                break
    # 从第一个边界点发散向周围边界着色
    return result


def colorBorder_bfs(grid, row, col, color):
    originalColor = grid[row][col]
    m, n = len(grid), len(grid[0])
    visited = [[False] * n for _ in range(m)]
    borders = []
    direc = ((-1, 0), (1, 0), (0, -1), (0, 1))
    q = deque([(row, col)])
    visited[row][col] = True
    while q:
        x, y = q.popleft()
        isBorder = False
        for dx, dy in direc:
            nx, ny = x + dx, y + dy
            if not (0 <= nx < m and 0<=ny<n and grid[nx][ny] == originalColor):
                isBorder = True
            elif not visited[nx][ny]:
                visited[nx][ny] = True
                q.append((nx, ny))
        if isBorder:
            borders.append((x, y))
    for x, y in borders:
        grid[x][y] = color
    return grid




if __name__=="__main__":
    grid = [[1,1], [1,2]]
    row = 0
    col = 0
    color = 3
    result = colorBorder(grid, row, col, color)
    print(result)
