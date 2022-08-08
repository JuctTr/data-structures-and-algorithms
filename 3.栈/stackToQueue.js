import { StackBasedArray } from './Stack.js';

const stackA = new StackBasedArray();
const stackB = new StackBasedArray();

/**
 * @description 用栈模拟队列
 */
class stackToQueue {
    constructor() {}

    /**
     * 入队操作
     * @param {*} element
     */
    enQueue(element) {
        stackA.push(element);
    }
    /**
     * 出队操作
     */
    deQueue() {
        if (stackB.isEmpty()) {
            if (stackA.isEmpty()) {
                return null;
            }
            this.transfer();
        }

        return stackB.pop();
    }

    transfer() {
        while (!stackA.isEmpty()) {
            stackB.push(stackA.pop());
        }
    }
}

const stackDemo = new stackToQueue();

stackDemo.enQueue(1);
stackDemo.enQueue(2);
stackDemo.enQueue(3);

stackDemo.deQueue();
stackDemo.deQueue();

console.log(stackA.items, stackB.items);

stackDemo.enQueue(4);
console.log(stackA.items, stackB.items);
