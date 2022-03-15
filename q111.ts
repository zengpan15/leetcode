function minDepth(root: TreeNode | null): number {
    if(root==null){
        return 0;
    }
    let left = minDepth(root.left);
    let right = minDepth(root.right);
    if(left ==0 || right == 0){
        
        return Math.max(left,right)+1;
    }
    return Math.min(left,right)+1;



};