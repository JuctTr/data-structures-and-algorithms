// const S = '00000000000000000000000000000000000000000000000001';
// const T = '0000000001';
// const S = 'abcdefgab';
// const T = 'abcdex';
const S = 'abcababca';
const T = 'ababc';

// const S = 'BBC ABCDAB ABCDABCDABDE';
// const T = 'ABCDABD';

/**
 * @description
 * 【注意】
 * 我看C语言中，习惯从索引 1 开始，而把数组索引0的空间用来存储字符串的长度，这么做应该是由于C语言是静态语言，
 * 内存空间需要静态申请，不知道对不对？而在javascript中，数组的空间是可以动态申请的，比如我们直接next[1]=xxx，数组中就有两个元素了
 * 代码中我改了一下，把索引0，拿来使用
 * @param {*} s
 * @param {*} t
 * @returns
 */
function getNext(t, next) {
    let i = 0,
        k = -1;
    next[0] = -1;
    while (i < t.length) {
        if (t.charAt(i) === t.charAt(k) || k === -1) {
            ++i;
            ++k;
            next[i] = k;
        } else {
            k = next[k];
        }
        console.log(next);
    }
}

function KMP(s, t) {
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
    let next = [];
    getNext(t, next);
    while (i < sLen && j < tLen) {
        if (s.charAt(i) === t.charAt(j) || j === -1) {
            ++i;
            ++j;
        } else {
            // 告诉你在模式串与主串不匹配的前提下，在下一次循环匹配中，模式串指针j该从哪个位置开始遍历匹配，达到去除无效比较的目的。
            j = next[j];
        }
    }
    // 退出条件
    if (j >= tLen) {
        return i - tLen; // 匹配成功开始的位置
    } else {
        return '匹配失败'; // 匹配失败
    }
}

console.log(KMP(S, T));
