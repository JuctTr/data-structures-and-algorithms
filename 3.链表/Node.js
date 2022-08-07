class Node {
    constructor(element) {
        this.element = element; // 要添加到列表的值
        this.next = null; // 指向下一个节点项的指针
    }
}
class DoublyNode extends Node {
    constructor(element) {
        super(element);
        this.prev = null;
    }
}
export { Node, DoublyNode };
