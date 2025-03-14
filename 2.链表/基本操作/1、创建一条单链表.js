var ListNode = function(x) {
    this.val = x;
    this.next = null;
};

// 输入一个数组，转换为一条单链表
var createLinkedList = function(arr) {
    if (arr == null || arr.length == 0) {
        return null;
    }
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}


const head = createLinkedList([1, 2, 3, 4, 5]); // ListNode { val: 1, next: ListNode { val: 2, next: ListNode { val: 3, next: ListNode { val: 4, next: ListNode { val: 5, next: null } } } } }

console.log(head);
