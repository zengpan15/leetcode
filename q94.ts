function inorderTraversal(root: TreeNode | null): number[] {
    var arr = []
    function order(TreeNode){
        if(TreeNode != null){
            if(TreeNode.left != null){
                order(TreeNode.left)
            }
            arr.push(TreeNode.val)
            if(TreeNode.right != null){
                order(TreeNode.right)
            }
        }
    }
    order(root)
    return arr

};