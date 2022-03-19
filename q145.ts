function postorderTraversal(root: TreeNode | null): number[] {
    if(root==null) {
        return [];
    }
    var a=[];
    postorder(root,a);
    function postorder(node,b){
        if(node==null){
            return;
        }
        postorder(node.left,b);
        postorder(node.right,b);
        b.push(node.val);
    }
    return a;

};