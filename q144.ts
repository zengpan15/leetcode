function preorderTraversal(root: TreeNode | null): number[] {
    if(!root){//判断根节点是否为空，为空返回空数组
        return [];
    }
    var res = [];//定义一个数组
    res.push(root.val);
    if(root.left){//判断左节点，直到叶子节点最后一层
        res.push(...preorderTraversal(root.left));
    }
    if(root.right) {//判断右节点
        res.push(...preorderTraversal(root.right));
    }
    return res;

};