// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// o Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// o Create a few test cases with linked lists and log the merged list.


function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(-1);
    let head = dummy;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next;
    }
    
    head.next = l1 || l2;
    
    return dummy.next;
}

// Test cases
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

const l2 = new ListNode(1);
l2.next = new ListNode(4);
l2.next.next = new ListNode(5);

console.log(mergeTwoLists(l1, l2)); // Output: 1 -> 1 -> 2 -> 4 -> 4 -> 5
