import { StackBasedArray } from './Stack.js';

/**
 * @description 栈的应用-四则运算表达式求值
 * 后缀（逆波兰）表示法
 */
class ReversePolishNotation extends StackBasedArray {
    constructor(arr) {
        super();
        console.log(arr, this);
        if (!arr || arr.length <= 0) {
            return console.error('the param is errors');
        }
        arr.forEach(item => {
            if (typeof item === 'number') {
                this.push(item);
            } else if (item === '-') {
                // 减数
                const subtraction = this.pop();
                // 被减数
                const minuend = this.pop();
                this.push(minuend - subtraction);
            } else if (item === '+') {
                const addend = this.pop();
                const summand = this.pop();
                this.push(summand + addend);
            } else if (item === '*') {
                const leftMultiplier = this.pop();
                const rightMultiplier = this.pop();
                this.push(leftMultiplier * rightMultiplier);
            } else if (item === '/') {
                // 除数
                const divisor = this.pop();
                // 被除数
                const dividend = this.pop();
                this.push(dividend / divisor);
            }
        });
    }

    outputResult() {
        return this.items.toString();
    }
}

export default ReversePolishNotation;

// function ReversePolishNotation(arr) {
//     arr.forEach((item, index) => {
//         if (typeof item === 'number') {
//             console.log('数字', this.items);
//             this.push(item);
//         } else if (item === '-') {
//             const subtraction = this.pop();
//             const minuend = this.pop();
//             this.push(minuend - subtraction);
//             console.log(this.items);
//         } else if (item === '+') {
//             const summand = this.pop();
//             const addend = this.pop();
//             this.push(summand + addend);
//         } else if (item === '*') {
//             const leftMultiplier = this.pop();
//             const rightMultiplier = this.pop();
//             this.push(leftMultiplier * rightMultiplier);
//         } else if (item === '/') {
//             const divisor = this.pop();
//             const dividend = this.pop();
//             this.push(dividend / divisor);
//         }
//     });
//     return this.peek();
// }
// ReversePolishNotation.prototype = new StackBasedArray();
