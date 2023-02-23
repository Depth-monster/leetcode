function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);//new node creator
    let current = dummy;//points to dummy. keeps track current node
    let carry = 0;//carry over
    while (l1 || l2) {
        let val1 = (l1 ? l1.val : 0);
        let val2 = (l2 ? l2.val : 0);
        let total = val1 + val2 + carry;
        current.next = new ListNode(total % 10);// for getting the last digit and set it to output node
        carry = Math.floor(total / 10);//for getting carry over
        current = current.next;//The current variable is then updated to point to the newly added node, and the function moves on to the next nodes in both input linked lists.
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (carry) {
        current.next = new ListNode(carry);
    }
    return dummy.next;
};

// the main thing: extract total%10 and total/10 to current.next and carry respectively. and switch l1 l2 and current to next
