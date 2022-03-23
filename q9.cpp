class Solution {
public:
    bool isPalindrome(int x) {
        if(x<0){//如果输入是负数
            return false;//输出不是回文数
        }  
        vector<int> digits;//首先将整数分解为数字数组
        while(x>0){
            int current_digit = x%10;
            digits.push_back(current_digit);
            x=x/10;
        }
        for(int index =0;index<digits.size();index++){//从最高位开始扫描数字数组
            if(digits[index]!=digits[digits.size()-index-1]){//如果当前数字与对应位置数字不同
                return false;//输出不是回文数
            }
        }
        return true;//输出是回文数

    }
};