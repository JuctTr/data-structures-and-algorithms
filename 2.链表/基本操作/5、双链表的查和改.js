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

var tail = null;

// ================================== 遍历双链表 ==================================

// 从头节点向后遍历双链表
for (var p = head; p !== null; p = p.next) {
    console.log(p.val);
    tail = p;
}

// 从尾节点向前遍历双链表
for (var p = tail; p !== null; p = p.prev) {
    console.log(p.val);
}


// ================================== 往链表头部中插入节点 ==================================

// 在双链表头部插入新节点 0
var newHead = new DoublyListNode(0);
newHead.next = head;
head.prev = newHead;
head = newHead;
// 现在链表变成了 0 -> 1 -> 2 -> 3 -> 4 -> 5


// ================================== 往链表尾部插入节点 ==================================

var newHead = new DoublyListNode(6);

var tail = head;
// 先走到链表的最后一个节点
while (tail.next !== null) {
    tail = tail.next;
}

// 在双链表尾部插入新节点 6
var newNode = new DoublyListNode(6);
tail.next = newNode;
newNode.prev = tail;
// 更新尾节点引用
tail = newNode;

// 现在链表变成了 1 -> 2 -> 3 -> 4 -> 5 -> 6

