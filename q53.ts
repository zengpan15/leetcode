function maxSubArray(nums: number[]): number {
    let maxsum= nums[0];
    let sum = nums[0];
    for(let i = 1;i<nums.length;i++){
        if(sum>0){
            sum = sum+nums[i];
       }
       else{
           sum = nums[i];
       }
       maxsum = Math.max(sum,maxsum);
    }
    return maxsum;

};