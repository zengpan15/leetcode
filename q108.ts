function sortedArrayToBST(nums: number[]): TreeNode | null {
    if(nums.length ==0){
        return null;
    }
    if(nums.length == 1){
        return new TreeNode(nums[0]);
    }

    if(!nums.length)return null;
    let root = new TreeNode(null);

    if(nums.length>1){
        root.left = sortedArrayToBST(nums.splice(0,nums.length/2));
    }
    root.val = nums[0];
    root.right = sortedArrayToBST(nums.splice(1,nums.length-1));
    return root;
};