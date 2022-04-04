class Node { // Node类表示要加入链表的项
    constructor(element) {
        this.element = element; // 要添加到列表的值
        this.next = null; // 指向下一个节点项的指针
    }
}
class LinkedList {
    constructor() {
        let length = 0;
        let head = null; //链表方法
        this.append = append;  //向链表尾部添加元素
        this.insert = insert; //向链表特定位置插入元素
        this.remove = remove; //移除元素
        this.removeAt = removeAt; //移除特定位置的元素
        this.indexOf = indexOf; //返回元素在链表中的索引。没有该元素则返回-1。
        this.isEmpty = isEmpty; //判断链表是否为空
        this.size = size; //返回链表包含元素个数
        this.toString = toString; // 由于链表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值。
        this.getHead = getHead; // 获取表头
    }
}
