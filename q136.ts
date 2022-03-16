function singleNumber(nums: number[]): number {
    //先对数组排序
    nums.sort();
    for(var i =0;i<nums.length;i++){
        //通过第i个数与它的前一个数以及后一个数是否相等来判断
        if((nums[i-1]!=nums[i])&&nums[i]!=nums[i+1]){
            return nums[i];
        }
    }

};