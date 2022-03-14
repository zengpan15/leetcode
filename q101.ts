function isSymmetric(root: TreeNode | null): boolean {
    if(!root){
        return true;
    }
    var stack = [root.left,root.right];
    while(stack.length){
        var a = stack.pop();
        var b = stack.pop();
        if(a===b){
            continue;
        }
        if(a && b && a.val === b.val){
            stack.push(a.left,b.right,a.right,b.left);
        }
        else{
            return false;
        }
    }
    return true;

};