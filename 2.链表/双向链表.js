import { DoublyNode } from './Node.js';
import LinkedList from './单向链表.js';

/**
 * @description 单链表
 */
export default class DoublyLinkedList extends LinkedList {
    constructor(element) {
        super(element);
        this.tail = null; // 新增的，保存对列表最后一项的引用 //方法
    }
    /**
     * 2、向链表尾部插入元素
     * @param {*} element
     */
    push(element) {
        const newNode = new DoublyNode(element);
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
        const node = new DoublyNode(element);
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
