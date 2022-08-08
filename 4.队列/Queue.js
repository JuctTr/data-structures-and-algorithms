export default class Queue {
    constructor() {
        this.length = 0;
        this.front = 0; // 队头指针
        this.items = {};
    }

    enqueue(element) {
        this.items[this.length] = element;
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return result;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.front];
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.items = {};
        this.length = 0;
        this.front = 0;
    }

    size() {
        return this.length - this.front;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.front]}`;
        for (let i = this.front + 1; i < this.length; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}
