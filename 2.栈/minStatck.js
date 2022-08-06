import { StackBasedArray } from './Stack.js'


const mainStack = new StackBasedArray();
const minStack = new StackBasedArray();




class MinStack {
    constructor () {

    }

    push(item) {
        mainStack.push(item)
        if (minStack.isEmpty() || minStack.peek() >= item) {
            minStack.push(item)
        }
    }

    pop() {
        if (mainStack.peek() === minStack.peek()) {
            minStack.pop()
        }
        return mainStack.pop()
    }

    getMin () {
        if (minStack.isEmpty()) {
            throw new Error('stack is empty ')
        }
        return minStack.peek()
    }
}

const stackDemo = new MinStack()

stackDemo.push(4)
stackDemo.push(9)
stackDemo.push(7)
stackDemo.push(3)

console.log(mainStack)
console.log(minStack)
console.log(stackDemo.getMin())

stackDemo.pop()



console.log(stackDemo.getMin())
