class Solution {
public:
  vector<int> twoSum(vector<int> &nums, int target) {
    for (int i = 0; i < nums.size(); i++) { //从第0项开始在数组中扫描第一个加数
      for (int j = i + 1; j < nums.size();
           j++) { //从下一项开始在数组中扫描第二个加数
        if (nums[i] + nums[j] == target) { //如果两数之和等于目标值
          return {i, j}; //输出两个加数在数组中的索引作为答案
        }
      }
    }
    return {};
  }
};
