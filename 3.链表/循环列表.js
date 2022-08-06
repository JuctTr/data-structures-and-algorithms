class Node {
    // Node类表示要加入链表的项
    constructor(element) {
        this.element = element; // 要添加到列表的值
        this.next = null; // 指向下一个节点项的指针
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(element) {
        this.length = 0;
        this.head = null;
        this.tail = null; // 新增的，保存对列表最后一项的引用 //方法
        // this.append = append; // 向链表尾部添加元素
        // this.insert = insert; // 向链表特定位置插入元素
        // this.remove = remove; // 移除元素
        // this.removeAt = removeAt; // 移除特定位置的元素
        // this.indexOf = indexOf; // 返回元素在链表中的索引。没有该元素则返回-1。
        // this.isEmpty = isEmpty; // 判断链表是否为空
        // this.size = size; // 返回链表包含元素个数
        // this.toString = toString; // 由于链表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值。
        // this.getHead = getHead; // 获取表头
    }
    /**
     * 2、向链表特定位置插入元素
     * @param {*} element
     */
    append(element) {
        const newNode = new Node(element);
        let current;
        if (this.head == null) {
            // 空链表
            this.head = newNode;
        } else {
            current = this.head; // 把第一个元素（节点）赋给current变量
            while (current.next) {
                current = current.next;
                /*
                         把第一个节点后面的节点集合赋给current变量，
                         循环到最后一个元素节点，相当于current = current.next.next.next......
                     */
            }
            current.next = newNode; // 将新节点赋给最后一个元素节点的next指针，建立连接
            newNode.prev = current;
        }
        this.length++; // 更新链表长度
        console.log(this.head);
    }
    /**
     * 2、向链表特定位置插入元素
     * @param {*} position
     * @param {*} element
     * @returns
     */
    insert(position, element) {
        if (position < 0 || position > this.length) {
            // 检查越界值
            return false;
        }
        const node = new Node(element);
        let current = this.head;
        let index = 0;
        let previous;
        if (position === 0) {
            // 在第一个位置添加
            if (this.head === null) {
                this.head = node;
                this.tail = node;
            } else {
                node.next = current;
                current.prev = node;
                this.head = node;
            }
        } else if (position === this.length) {
            current = this.tail;
            current.next = node;
            node.prev = current;
            this.tail = node;
        } else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = node;
            node.next = current;
        }
        this.length++;
        console.log(this.head);
        return true;
    }
}

const nodelist = new DoublyLinkedList();
nodelist.append(1);
nodelist.append(12);
nodelist.append(123);
// console.log(nodelist)
