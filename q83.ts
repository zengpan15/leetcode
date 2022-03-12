function deleteDuplicates(head: ListNode | null): ListNode | null {
    var list = head;
    if(list === null) {
        return null;
    }
    while(list.next !== null) {
        if(list.val == list.next.val) {
            list.next = list.next.next;
        } else {
            list = list.next;
        }
    }
    return head;
    // let med = head;
    // while(med!=null && med.next!= null){
    //     if(med.next.val === med.val){
    //         med.next = med.next.next;
    //     }else{
    //         med = med.next;
    //     }
    // }
    // return head;

};