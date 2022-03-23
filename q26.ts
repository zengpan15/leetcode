function removeDuplicates(nums: number[]): number {
    let resultLength = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[resultLength] = nums[i];
            resultLength++;
        }
    }
    return resultLength;
};
