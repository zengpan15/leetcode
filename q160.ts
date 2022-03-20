function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    var a = headA
    var b = headB
    while(a!=b){
        if(a === null ){
            a = headB
        }
        else{
            a = a.next
        }
        if(b === null ){
            b = headA
        }
        else{
            b = b.next
        }
     }
return a;

};