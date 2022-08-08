import DoubleEndedQueue from './DoubleEndedQueue.js';

/**
 * @description 双端队列——回文检查器，回文是正反都能读通的单词、词组、数或一系列字符的序列，例如 madam 或 racecar。
 * @param {*} aString
 * @returns
 */
export default function palindromeChecker(aString) {
    if (
        aString === undefined ||
        aString === null ||
        (aString !== null && aString.length === 0)
    ) {
        return false;
    }
    const deque = new DoubleEndedQueue();
    // 转换为小写、空格去掉
    const lowerString = aString.toLocaleLowerCase().split(' ').join('');

    let firstChar;
    let lastChar;
    // 把字符串逐个推入队列
    for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i));
    }
    // 从队列前后分别取字符，全部相等即为回文串
    while (deque.size() > 1) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        if (firstChar !== lastChar) {
            return false;
        }
    }

    return true;
}
