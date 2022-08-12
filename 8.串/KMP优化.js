// const S = '00000000000000000000000000000000000000000000000001';
// const T = '0000000001';
// const S = 'abcdefgab';
// const T = 'abcdex';
// const S = 'abcababca';
// const T = 'ababc';

// const S = 'BBC ABCDAB ABCDABCDABDE';
// const T = 'ABCDABD';
// 优化测试用例
// const S = 'aaaabcdef';
// const T = 'aaaaax';

const S = 'ABACBCE';
const T = 'ABAB';

function getNext(t) {
    let i = 0,
        k = -1;
    const nextval = [];
    nextval[0] = -1;
    while (i < t.length) {
        if (t.charAt(i) === t.charAt(k) || k === -1) {
            ++i;
            ++k;
            if (t.charAt(i) != t.charAt(k)) {
                nextval[i] = k;
            } else {
                nextval[i] = nextval[k];
            }
        } else {
            k = nextval[k];
        }
        console.log('部分匹配表（Partial Match Table）=> ', nextval);
    }
    return nextval;
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
    let nextval = getNext(t);

    while (i < sLen && j < tLen) {
        if (s.charAt(i) === t.charAt(j) || j === -1) {
            ++i;
            ++j;
        } else {
            // 告诉你在模式串与主串不匹配的前提下，在下一次循环匹配中，模式串指针j该从哪个位置开始遍历匹配，达到去除无效比较的目的。
            j = nextval[j];
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
