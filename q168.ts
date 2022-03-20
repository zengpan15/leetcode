function convertToTitle(columnNumber: number): string {
    const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  // 存放结果
    let result = [];
    // 初始化数据
    let num = columnNumber;
    let index;
    // 循环判断，并在结果列前插入，直到小于等于26再退出循环
    while(num > 26) {
        index = num % 26;
        num = Math.floor(num / 26);
        if (index === 0) {
            result.unshift(arr[25]);
            num = num-1;
        } else {
            result.unshift(arr[index-1]);
        }
    }
    // 将最后一个值插入
    result.unshift(arr[num-1]);
    // 输出字符串结果
    return result.join("")

};