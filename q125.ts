function isPalindrome(s: string): boolean {
    //用正则提取出数字和字母
    //转换成小写
    //将字符串颠倒，直接比较
        s = s.replace(/[^0-9a-zA-Z]/g, "").toLocaleLowerCase();
        let reverse = s
        .split("")
        .reverse()
        .join("");
        return s === reverse
    
    };