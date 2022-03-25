function titleToNumber(columnTitle: string): number {
    const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let len = columnTitle.length, sum = 0
    for (let i = 0; i < len; i++) {
        sum = (arr.indexOf(columnTitle[i]) + 1) * Math.pow(26, len - 1 - i) + sum
    }
    return sum
};
