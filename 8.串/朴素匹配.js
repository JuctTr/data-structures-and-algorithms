const S = 'goodgoogle';
const T = 'google';

/**
 * @description
 * 【缺点】：
 * 如果出现比较极端的例子，比如主串S为 “00000000000000000000000000000000000000000000000001”（长度为50），
 * 而你所匹配的子串T为 “0000000001”（长度为10）
 * 在匹配时,每次都得将T中字符循环到最后一位才发现；哦,原来它们是不匹配的。
 * 这样等于T串需要在S串的前40个位置都需要判断10次’ 才可以得出不匹配的结论。
 * 显然这个算法是低效的
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
        return null; // 匹配失败
    }
}

console.log(Index(S, T));
