import { StackBasedArray } from './Stack.js';

/**
 * @description 栈的应用-四则运算表达式求值
 * 中缀表达式转后缀表达式
 * "9+(3—1)×3+10÷2"为中缀表达式，转换后，变为后缀表达式 “9 3 1 — 3 * + 10 2 / +”
 */
class ReversePolishNotation extends StackBasedArray {
    constructor(arr) {
        super();
        console.log(arr, this);
        if (!arr || arr.length <= 0) {
            return console.error('the param is errors');
        }
        this.result = [];

        // const priority = {
        //     '(': 0,
        //     ')': 0,
        //     '+': 0,
        //     '-': 0,
        //     '*': 1,
        //     '/': 1,
        // };

        arr.forEach(item => {
            if (typeof item === 'number') {
                this.result.push(item);
            } else if (item === '(') {
                this.push(item);
            } else if (item === ')') {
                // eslint-disable-next-line no-constant-condition
                while (true) {
                    const element = this.pop();
                    if (element !== '(' && element !== undefined) {
                        this.result.push(element);
                        continue;
                    }
                    break;
                }
            } else {
                // if (this.size() === 0) return this.push(item);
                // while (this.size()) {
                //     const stackTop = this.peek();
                //     this.push(item);
                //     if (priority[item] <= priority[stackTop]) {
                //         this.result.push(this.pop());
                //         continue;
                //     }
                //     break;
                // }
            }
        });
        return this.result;
    }
}

export default ReversePolishNotation;
