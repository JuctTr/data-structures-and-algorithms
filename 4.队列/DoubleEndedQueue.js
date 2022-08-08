/**
 * @description 双端队列的一个常见应用是存储一系列的撤销操作。
 * 每当用户在软件中进 行了一个操作，该操作会被存在一个双端队列中(就像在一个栈里)。
 * 当用户点击撤销按钮时， 该操作会被从双端队列中弹出，表示它被从后面移除了。
 * 在进行了预先定义的一定数量的操作后，最先进行的操作会被从双端队列的前端移除。
 * 由于双端队列同时遵守了先进先出和后进先出原 则，可以说它是把队列和栈相结合的一种数据结构。
 */
export default class DoubleEndedQueue {
    constructor() {
        this.count = 0;
        this.front = 0; // 队头指针
        this.items = {};
    }

    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.front > 0) {
            this.front--;
            this.items[this.front] = element;
        } else {
            // 遍历队列，整体向后移动一位，队列头部就空出来一个，填上
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.items[0] = element;
        }
    }

    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return result;
    }

    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.front];
    }

    peekBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.front = 0;
    }

    size() {
        return this.count - this.front;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.front]}`;
        for (let i = this.front + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}
