
class StackBasedArray {
    constructor () {
        this.items = []
    }

    push (element) {
        this.items.push(element)
    }

    pop () {
        this.items.pop()
    }

    peek () {
        return this.items[this.size() - 1]
    }

    size () {
        return this.items.length
    }

    isEmpty () {
        return this.size() === 0
    }

    clear () {
        this.items = []
    }

    toString () {
        return this.items.toString()
    }
}

const stackBasedArray = new StackBasedArray()
stackBasedArray.push(1)
stackBasedArray.push(2)
console.log(stackBasedArray, stackBasedArray.size(), stackBasedArray.peek(), stackBasedArray.toString())


class StackBasedObject {
    constructor () {
        this.count = 0
        this.items = {}
    }

    push (element) {
        this.items[this.count] = element
        this.count++
    }

    pop () {
        if (this.isEmpty()) return null
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }

    peek () {
        if (this.isEmpty()) return null
        return this.items[this.count - 1]
    }

    size () {
        return this.count
    }

    isEmpty () {
        return this.count === 0
    }

    clear () {
        this.items = {}
        this.count = 0
        // while (!this.isEmpty()) {
        //     this.pop()
        // }
    }

    toString () {
        if (this.isEmpty()) return ''
        let objString = `${this.items[0]}`
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}
const stackBasedObject = new StackBasedObject()
stackBasedObject.push(1)
stackBasedObject.push(2)
stackBasedObject.push(4)
stackBasedObject.push(5)
stackBasedObject.pop()
console.log(stackBasedObject, stackBasedObject.size(), stackBasedObject.peek(), stackBasedObject.toString())

export {
    StackBasedArray,
    StackBasedObject
}
