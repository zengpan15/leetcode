function removeDuplicates(nums: number[]): number {
    let slow = 1;
    for(let i = 1;i<nums.length;i++){
        if(nums[i]!= nums[i-1]){
            nums[slow]= nums[i];
            slow++;
        }
    }
    return slow;

};