class Node { // Node类表示要加入链表的项
    constructor (element) {
        this.element = element; // 要添加到列表的值
        this.next = null; // 指向下一个节点项的指针
    }
}
class LinkedList {
    constructor (element) {
        this.length = 0
        this.head = null;
        if (element) {
            this.head = new Node(element);
            this.length = 1;
        }
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
     * 1、向链表尾部添加元素
     * @param {*} element
     */
    append (element) {
        const node = new Node(element);
        let current;
        if (this.head == null) { // 空链表
            this.head = node;
        } else {
            current = this.head; // 把第一个元素（节点）赋给current变量
            while (current.next) {
                current = current.next;
                /*
                     把第一个节点后面的节点集合赋给current变量，
                     循环到最后一个元素节点，相当于current = current.next.next.next......
                 */
            }
            current.next = node; // 将新节点赋给最后一个元素节点的next指针，建立连接
        }
        this.length++; // 更新链表长度
        console.log(this.head)
    }
    /**
     * 2、向链表特定位置插入元素
     * @param {*} position
     * @param {*} element
     * @returns
     */
    insert (position, element) {
        if (position < 0 || position > this.length) { // 检查越界值
            return false;
        }
        const node = new Node(element);
        let current = this.head;
        let index = 0;
        let previous;
        if (position === 0) { // 在第一个位置添加
            node.next = current;
            this.head = node;
        } else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = node;
            node.next = current;
        }
        this.length++;
        console.log(this.head)
        return true;
    }

    /**
     * 3、移除元素，第一种是根据元素的值移除元素；第二种是从特定位置移除一个元素，现在我们看看第一种。第二种移除方法见于indexOf方法之后。
     * @param {*} position
     * @returns
     */
    removeAt (position) {
        if (position < 0 || position > this.length) {
            return null;
        }
        let current = this.head;
        let previous; let index = 0;
        if (position === 0) {
            this.head = current.next;
        } else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.length--;
        return current.element; // 返回被删除元素的值
    }
    /**
     * 获取某一个节点
     * @param {*} position
     * @returns
     */
    getElementAt (position) {
        // eslint-disable-next-line no-undefined
        if (position < 0 | position > this.length) return undefined;
        let node = this.head;
        for (let i = 0; i < position && node != null; i++) {
            node = node.next
        }
        return node;
    }
    /**
     * 4、toString方法，会把LinkedList对象转换成一个字符串
     * @returns
     */
    toString () {
        let current = this.head;
        let str = '';
        while (current) {
            str += current.element;
            current = current.next;
        }
        return str;
    }
    /**
     * 5、indexOf方法
     * @param {*} element
     * @returns
     */
    indexOf (element) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.element === element) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    /**
     * 6、remove方法（可以依靠indexOf方法和removeAt方法实现）
     * @param {*} element
     * @returns
     */
    remove (element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    /**
     * 7、isEmpty方法（链表的length是内部控制的，因为LinkedList是从头构建的）
     * @returns
     */
    isEmpty () {
        return this.length === 0;
    }
    /**
     * 8、size方法
     * @returns
     */
    size () {
        return this.length;
    }
    /**
     * 9、getHead方法
     * 因为head变量是LinkedList类的私有变量（这意味着它不能在LinkedList实例外部被访问和更改，只有通过linkedList实例才可以）。
     * 但是，如果我们需要在类的外部循环访问列表，就需要提供一种获取类的第一个元素的方法。
     * @returns
     */
    getHead () {
        return this.head;
    }
}
const nodelist = new LinkedList()
nodelist.append(1)
nodelist.append(12)
nodelist.append(123)
nodelist.append(1234)
console.log(nodelist.getElementAt(2))
