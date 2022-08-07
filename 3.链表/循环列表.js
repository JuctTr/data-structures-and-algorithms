import { Node } from './Node.js';
import LinkedList from './单向链表.js';

export default class CircularLinkedList extends LinkedList {
    constructor(element) {
        super(element);
    }
    /**
     *
     * @param {*} element
     */
    push(element) {
        const newNode = new Node(element);
        if (this.head === null) {
            this.head = newNode;
        } else {
            const lastNode = this.getElementAt(this.size() - 1);
            lastNode.next = newNode;
        }
        newNode.next = this.head;
        this.length++;
    }
    /**
     * 2、向链表特定位置插入元素
     * @param {*} position
     * @param {*} element
     * @returns
     */
    insert(element, index) {
        if (index < 0 || index > this.length) {
            // 检查越界值
            return false;
        }
        const newNode = new Node(element);
        if (index === 0) {
            if (this.head === null) {
                this.head = newNode;
                newNode.next = this.head;
            } else {
                newNode.next = this.head;
                // 找到最后一个节点
                const lastNode = this.getElementAt(this.size() - 1);
                this.head = newNode;
                lastNode.next = this.head;
            }
        } else {
            // 插入位置的前面节点
            const prevNode = this.getElementAt(index - 1);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
        }
        this.length++;
        return true;
    }
    /**
     * 3、移除元素，第一种是根据元素的值移除元素；第二种是从特定位置移除一个元素，现在我们看看第一种。第二种移除方法见于indexOf方法之后。
     * @param {*} index
     * @returns
     */
    removeAt(index) {
        // 检查越界值
        if (index < 0 || index > this.length) return undefined;
        let removeNode = undefined;
        if (index === 0) {
            if (this.size() === 1) {
                this.head = null;
            } else {
                removeNode = this.head;
                // 最后一个节点
                const lastNode = this.getElementAt(this.size() - 1);
                this.head = this.head.next;
                lastNode.next = this.head;
            }
        } else {
            // 移除位置的前一个节点
            const prevNode = this.getElementAt(index - 1);
            removeNode = prevNode.next;
            prevNode.next = removeNode.next;
        }
        this.length--;
        return removeNode.element;
    }
}
