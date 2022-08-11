const S = 'goodgoogle';
const T = 'google';

/**
 * @description
 * @param {String} s
 * @param {String} t
 * @returns
 */
function Index(s, t) {
    if (typeof s != 'string' || typeof t != 'string') {
        return new Error('参数出错');
    }
    if (t.length > s.length) {
        const temp = t;
        t = s;
        s = temp;
    }
    const sLen = s.length;
    const tLen = t.length;
    let i = 0,
        j = 0;
    while (i < sLen && j < tLen) {
        if (s.charAt(i) === t.charAt(j)) {
            ++i;
            ++j;
        } else {
            i = i - j + 1; // 这里如果觉得难理解，直接用上面例子写2个循环就知道了
            j = 0;
        }
    }
    // 退出条件
    if (j >= tLen) {
        return i - tLen; // 匹配成功开始的位置
    } else {
        return null; // 匹配不成功
    }
}

console.log(Index(S, T));
