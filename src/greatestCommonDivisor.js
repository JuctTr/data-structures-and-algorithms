/**
 * 题目描述：写一段代码，求出两个整数的最大公约数，要尽量优化算法的性能。
 */

/**
 * @description 使用暴力枚举的方法，从较小整数的一半开 始，试图找到一个合适的整数i，看看这个整数能否被a和b同时整除。
 * 缺点：效率不行，如遇到数字比较大的，如整数是10 000和10 001，需要循环10 000/2-1=4999次!
 * @param {*} a
 * @param {*} b
 */
function greatestCommonDivisor (a, b) {
    const big = a > b ? a : b;
    const small = a < b ? a : b;

    if (big % small === 0)  {
        return small
    }

    for (let i = small / 2; i > 1; i-- ) {
        if (small % i === 0 && big % i === 0) {
            return i;
        }
    }
    return 1;
}

console.log('最大公约数 => ', greatestCommonDivisor(27, 14))

/**
 * @description 使用辗转相除法， 又名欧几里得算法(Euclidean algorithm)
 * 原理：两个正整数a和b(a>b)，它们的最大公约数 等于a除以b的余数c和b之间的最大公约数
 * 缺点：当两个整数较大时，做a%b取模运算的性能会比较差。
 * @param {*} a
 * @param {*} b
 */
function greatestCommonDivisor2 (a, b) {
    const big = a > b ? a : b;
    const small = a < b ? a : b;

    if (big % small === 0)  {
        return small
    }

    return greatestCommonDivisor2(big % small, small);
}

console.log('最大公约数 => ', greatestCommonDivisor2(100, 80))

/**
 * @description 使用更相减损术
 * 原理：两个正整数a和b(a>b)，它们的最大公约数等于 a-b的差值c和较小数b的最大公约数
 * 缺点：更相减损术是不稳定的算法，当两数相差悬殊时，如计算10000和1的最大 公约数，就要递归9999次!
 * @param {*} a
 * @param {*} b
 */
 function greatestCommonDivisor3 (a, b) {
    const big = a > b ? a : b;
    const small = a < b ? a : b;

    if (big % small === 0)  {
        return small
    }

    return greatestCommonDivisor3(big - small, small);
}

console.log('最大公约数 => ', greatestCommonDivisor3(10000, 1))


/**
 * @description 把辗转相除法和更相减损术的优势结合起来
 * 原理：利用移位运算
 *  当a和b均为偶数时，gcd(a,b) = 2×gcd(a/2, b/2) = 2×gcd(a>>1,b>>1)。
    当a为偶数，b为奇数时，gcd(a,b) = gcd(a/2,b) = gcd(a>>1,b)。
    当a为奇数，b为偶数时，gcd(a,b) = gcd(a,b/2) = gcd(a,b>>1)。
    当a和b均为奇数时，先利用更相减损术运算一次，gcd(a,b) = gcd(b,a- b)，此时a-b必然是偶数，然后又可以继续进行移位运算。
 * @param {*} a
 * @param {*} b
 */
 function greatestCommonDivisor4 (a, b) {
    if(a == b){
        return a;
    }
    console.log(a & 1, b & 1)
    if((a&1) == 0 && (b&1) == 0){
        return greatestCommonDivisor4(a>>1, b>>1)<<1;
    } else if((a&1) == 0 && (b&1) != 0){
        return greatestCommonDivisor4(a>>1, b);
    } else if((a&1) != 0 && (b&1) == 0){
        return greatestCommonDivisor4(a, b>>1);
    } else {
        const big = a > b ? a : b;
        const small = a < b ? a : b;
        return greatestCommonDivisor3(big - small, small);
    }
}

console.log('最大公约数 => ', greatestCommonDivisor4(25, 10))

