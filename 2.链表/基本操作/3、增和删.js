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

// 创建一条单链表
var head = createLinkedList([1, 2, 3, 4, 5]);

// ================================== 往链表头部中插入节点 ==================================

// 在单链表头部插入一个新节点 0
var newHead = new ListNode(0);
newHead.next = head;
head = newHead;
// 现在链表变成了 0 -> 1 -> 2 -> 3 -> 4 -> 5


// ================================== 往链表尾部插入节点 ==================================

// 在单链表尾部插入一个新节点 6
var p = head;
// 先走到链表的最后一个节点
while (p.next !== null) {
    p = p.next;
}
// 现在 p 就是链表的最后一个节点
// 在 p 后面插入新节点
p.next = new ListNode(6);

// 现在链表变成了 1 -> 2 -> 3 -> 4 -> 5 -> 6

// ================================== 在链表中间插入节点 ==================================

// 在第 3 个节点后面插入一个新节点 66
// 先要找到前驱节点，即第 3 个节点
var m = head;
for (var i = 0; i < 2; i++) {
    m = m.next;
}
// 此时 p 指向第 3 个节点
// 组装新节点的后驱指针
var newNode = new ListNode(66);
newNode.next = m.next;

// 插入新节点
m.next = newNode;

// 现在链表变成了 1 -> 2 -> 3 -> 66 -> 4 -> 5


// ================================== 删除链表中的节点 ==================================

// 删除第 4 个节点，要操作前驱节点
var d = head;
for (let j = 0; j < 2; j++) {
    d = d.next;
}

// 此时 d 指向第 3 个节点，即要删除节点的前驱节点
// 把第 4 个节点从链表中摘除
d.next = d.next.next;

// 现在链表变成了 1 -> 2 -> 3 -> 5

// ================================== 删除链表中最后的节点 ==================================



var dd = head;
while (dd.next.next !== null) {
    dd = dd.next;
}

// 此时 dd 指向倒数第 2 个节点
// 把最后一个节点从链表中摘除
dd.next = null;


// 现在链表变成了 1 -> 2 -> 3

// ================================== 删除链表中倒数第二个节点 ==================================
var ddd = head;
while (ddd.next.next.next !== null) {
    ddd = ddd.next;
}

ddd.next = ddd.next.next;
