function removeElement(nums: number[], val: number): number {
    if(nums.length==0){
        return 0;
    }
    let len :number =0;
    while(len<nums.length){
        if(nums[len]===val){
            nums.splice(len,1);
        }else{
            len++;
        }
    }
    return nums.length;

};