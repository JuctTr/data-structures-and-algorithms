import { StackBasedArray } from './Stack.js';

/**
 * @description 栈的应用-四则运算表达式求值
 * 中缀表达式转后缀表达式
 * "9+(3—1)×3+10÷2"为中缀表达式，转换后，变为后缀表达式 “9 3 1 — 3 * + 10 2 / +”
 */
class ReversePolishNotation extends StackBasedArray {
    constructor(param) {
        super();
        let arr = [];
        if (Array.isArray(param)) {
            arr = param;
        } else if (typeof param === 'string') {
            const str = param.replace(/[^\d]/g, ' $& ');
            const arrByTrim = str.split(' ');
            arr = arrByTrim.filter(item => item);
        }

        const result = [];

        const priority = {
            '(': 2,
            ')': 2,
            '+': 0,
            '-': 0,
            '—': 0,
            '*': 1,
            x: 1,
            '×': 1,
            '÷': 1,
            '/': 1,
        };
        console.log('原数组 => ', arr);

        arr.forEach(item => {
            // 如果是数字
            if (/\d+/.test(item)) {
                result.push(Number(item));
            } else if (item === '(') {
                this.push(item);
            } else if (item === ')') {
                // eslint-disable-next-line no-constant-condition
                while (true) {
                    const element = this.pop();
                    if (element !== '(' && element !== undefined) {
                        result.push(element);
                        continue;
                    }
                    break;
                }
            } else {
                if (this.size() === 0) return this.push(item);
                let comparePriority = false;
                while (this.size() > 0) {
                    const stackTop = this.peek();
                    // 当前元素 优先级 比栈顶元素 低
                    if (
                        (priority[item] < priority[stackTop] ||
                            (priority[item] === priority[stackTop] && comparePriority)) &&
                        stackTop !== '('
                    ) {
                        // 出栈
                        const top = this.pop();
                        // 推入结果数组
                        result.push(top);
                        comparePriority = true;
                        continue;
                    }
                    this.push(item);
                    comparePriority = false;
                    break;
                }
                if (this.size() === 0) this.push(item);
            }
        });
        // 最后剩余的依次出栈
        if (this.size() > 0) {
            while (this.size() > 0) result.push(this.pop());
        }
        console.log('栈 => ', this.items);
        return result;
    }
}

export default ReversePolishNotation;
