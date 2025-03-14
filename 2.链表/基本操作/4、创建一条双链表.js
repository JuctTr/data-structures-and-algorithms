var DoublyListNode = function(x) {
    this.val = x;
    this.next = null;
    this.prev = null;
};

// 输入一个数组，转换为一条单链表
var createDoublyLinkedList = function(arr) {
    if (arr == null || arr.length == 0) {
        return null;
    }
    let head = new DoublyListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        const currentNode = new DoublyListNode(arr[i]);
        current.next = currentNode;
        currentNode.prev = current;
        current = current.next;
    }
    return head;
}

// 创建一条双链表
let head = createDoublyLinkedList([1, 2, 3, 4, 5]);

console.log(head);
