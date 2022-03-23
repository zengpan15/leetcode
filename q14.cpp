class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string ans = "";
        if(strs.size()==0){//如果前缀等于0
            return ans;
        }
        sort(strs.begin(), strs.end());      //排序第一个到最后一个
        for(int i =0;i<strs[0].size();i++){
            char temp = strs[0][i];
            int j;
            for(j=1;j<strs.size();j++){     //逐个与其他字符串比较
                if(temp!=strs[j][i]){
                    break;
                }
                if(j>=strs.size()){
                    ans+=temp;
                }
                else{
                    break;
                }
            }
        }
        return ans;

    }
};