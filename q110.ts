function isBalanced(root: TreeNode | null): boolean {
    if(root == null){
        return true;
    }
    function Hight(node){
        if(node == null){
            return 0;
        }
        return Math.max(Hight(node.left),Hight(node.right))+1;
    }
    if(Math.abs(Hight(root.left)-Hight(root.right))>=2){
        return false;
    }
    return isBalanced(root.left) && isBalanced(root.right);
};