
// int GetMinCoinCountHelper(int total, int* values, int valueCount) {
//     int rest = total;
//     int count = 0;

//     // 从大到小遍历所有面值
//     for (int i = 0; i < valueCount; ++ i) {
//         int currentCount = rest / values[i]; // 计算当前面值最多能用多少个
//         rest -= currentCount * values[i]; // 计算使用完当前面值后的余额
//         count += currentCount; // 增加当前面额用量

//         if (rest == 0) {
//             return count;
//         }
//     }

//     return -1; // 如果到这里说明无法凑出总价，返回-1
// }

// int GetMinCoinCount() {
//     int values[] = { 5, 3 }; // 硬币面值
//     int total = 11; // 总价
//     return GetMinCoinCountHelper(total, values, 2); // 输出结果
// }

/**
 * @description 过于贪心解法，也就是最容易想到的解法，
 * 如下代码，每一次都会把当前面值最大的硬币尽量用光
 * @param {*} coins
 * @param {*} total
 * @returns count
 */
function GetMinCoinCount (coins, total) {
    const len = coins.length;
    let count = 0;
    for (let i = 0; i < len; ++i) {
        const currentCount = Math.floor(total / coins[i]); // 11 / 5 取整 为 2
        total -= currentCount * coins[i] // total 减掉 2 * 5 剩下 1 ，问题则无解了，返回 -1了
        count += currentCount;

        if (total === 0) {
            return count;
        }
    }
    return -1;
}
// console.log(GetMinCoinCount([5, 3], 11))


/**
 * @param total 金额
 * @param coins 币种数组，从大到小排序
 * @return 返回币数，如果返回-1表示无法凑够total
 */
function getMinCoinCountOfValueHelper (total, coins) {
    if (coins.length === 0) {
        return -1;
    }
    // 当前币值
    const currentCoin = coins[0];
    // 使用当前币值数量
    let useCurrentCoinCount = Math.floor(total / currentCoin);

    let restTotal = total - (useCurrentCoinCount * currentCoin);
    // 如果restTotal为0，表示余额已除尽，组合完成
    if (restTotal === 0) {
        return useCurrentCoinCount;
    }
    // 其他币种数量
    let coninCount = -1;
    // 剩余的币种
    const restCoins = coins.slice(1, coins.length)

    while (useCurrentCoinCount >= 0) {
        // 否则尝试用剩余面值求当前余额的硬币总数
        coninCount = getMinCoinCountOfValueHelper(restTotal, restCoins)
        // 如果后续没有有可用组合,退一步，当前useCurrentCoinCount币数减1
        if (coninCount === -1) {
            // 否则尝试把当前面值数-1
            useCurrentCoinCount--;
            // 重新计算restTotal
            restTotal = total - (useCurrentCoinCount * currentCoin)
        } else {
            return useCurrentCoinCount + coninCount;
        }
    }
    return -1;
}

// console.log(getMinCoinCountOfValueHelper(36, [25, 10, 5, 1]))

function fibonacci (n) {
    const resolution = [0, 1]
    if (n < 2) return resolution[n]

    let i = 1;
    let fib1 = 0
    let fib2 = 1
    let fib = 0
    while (i < n) {
        fib = fib1 + fib2
        fib1 = fib2
        fib2 = fib
        i++
    }
    return fib;
}

// function Fibonacci (n) {
//     if (n < 0) return 0;
//     if (n === 0 || n === 1) return n;
//     return Fibonacci(n - 1) + Fibonacci(n - 2)
// }

// console.log(Fibonacci(8))

function Fibonacci (n, memo) {
    if (n < 0) return 0;
    if (n === 0 || n === 1) return n;
    if (memo[n] !== 0) return memo[n]
    memo[n] = Fibonacci(n - 1, memo) + Fibonacci(n - 2, memo)
    return memo[n]
}

function fibonacciAdvance (n) {
    const memoObj = Array(n + 1).fill(0)
    return Fibonacci(n, memoObj)
}

console.log(fibonacciAdvance(20))


// function getMinCountsHelper (total, values) {
//     // 如果余额为0，说明当前组合成立，将组合加入到待选数组中
//     if (0 === total) { return 0; }

//     const valueLength = values.length;
//     let minCount = 0;
//     for (let i = 0; i < valueLength; i++) { // 遍历所有面值
//         const currentValue = values[i];

//         // 如果当前面值大于硬币总额，那么跳过
//         if (currentValue > total) { continue; }

//         const rest = total - currentValue; // 使用当前面值，得到剩余硬币总额
//         const restCount = getMinCountsHelper(rest, values);

//         // 如果返回-1，说明组合不可信，跳过
//         if (restCount === -1) { continue; }

//         const totalCount = 1 + restCount; // 保留最小总额
//         if (totalCount < minCount) { minCount = totalCount; }
//     }

//     // 如果没有可用组合，返回-1
//     if (minCount === 0) { return -1; }

//     return minCount; // 返回最小硬币数量
// }

function getMinCountsHelper (coins, total, memo) {
    const saveMinCount = memo[total]
    if (saveMinCount !== -2) { return saveMinCount }
    if (total === 0) return 0

    const coinsLength = coins.length

    let minCoinCount = Number.MAX_VALUE;

    for (let i = 0; i < coinsLength; i++) { // 遍历所有面值
        const currentValue = coins[i]

        if (currentValue > total) continue // 如果当前面值大于硬币总额，那么跳过

        const restTotal = total - currentValue; // 使用当前面值，得到剩余硬币总额

        const restCoinCount = getMinCountsHelper(coins, restTotal, memo)

        if (restCoinCount === -1) continue // 如果返回-1，说明组合不可信，跳过

        const totalCount = 1 + restCoinCount; // 保留最小总额
        if (totalCount < minCoinCount) { minCoinCount = totalCount; }
    }

    if (minCoinCount === Number.MAX_VALUE) { // 如果没有可用组合，返回-1
        memo[total] = -1
        return -1
    }

    memo[total] = minCoinCount // 记录到备忘录

    return minCoinCount // 返回最小硬币数量
}

// function getMinCounts () {
//     const coins = [5, 3]
//     const total = 25
//     const memo = Array(25 + 1).fill(-2) // 备忘录，没有缓存的元素为-2

//     memo[0] = 0; // 其中0对应的结果也是0，首先存在备忘录中

//     return getMinCountsHelper(coins, total, memo)
// }
// console.log(getMinCounts())


// function getMinCounts (k, values) {
//     const memo = Array(k + 1).fill(-1)
//     memo[0] = 0; // 初始化状态

//     for (let v = 1; v <= k; v++) {
//         let minCount = k + 1; // 模拟无穷大
//         for (let i = 0; i < values.length; ++i) {
//             const currentValue = values[i];

//             // 如果当前面值大于硬币总额，那么跳过
//             if (currentValue > v) { continue; }

//             // 使用当前面值，得到剩余硬币总额
//             const rest = v - currentValue;
//             const restCount = memo[rest];

//             // 如果返回-1，说明组合不可信，跳过
//             if (restCount === -1) { continue; }

//             // 保留最小总额
//             const kCount = 1 + restCount;
//             if (kCount < minCount) { minCount = kCount; }
//         }

//         // 如果是可用组合，记录结果
//         if (minCount !== k + 1) { memo[v] = minCount; }
//     }

//     return memo[k];
// }

// function getMinCountsDPSol () {
//     const values = [ 3, 5 ]; // 硬币面值
//     const total = 22; // 总值

//     // 求得最小的硬币数量
//     return getMinCounts(total, values); // 输出答案
// }
// console.log(getMinCountsDPSol())


function getMinCounts (k, values) {
    const memo = Array(k + 1).fill(-1) // 创建备忘录
    memo[0] = 0; // 初始化状态
    for (let i = 1; i < k + 1; i++) { memo[i] = k + 1; }

    for (let i = 1; i < k + 1; i++) {
        for (const coin of values) {
            if (i - coin < 0) { continue; }
            memo[i] = Math.min(memo[i], memo[i - coin] + 1); // 作出决策
        }
    }

    return memo[k] === k + 1 ? -1 : memo[k];
}

function getMinCountsDPSolAdvance () {
    const values = [ 3, 5 ]; // 硬币面值
    const total = 22; // 总值

    return getMinCounts(total, values); // 输出答案
}

console.log(getMinCountsDPSolAdvance())

var longestPalindrome = function (s) {
    const len = s.length;
    if (len < 2) {
        return s;
    }
    let maxLen = 1;
    let begin = 0;
    const dp = new Array(len).fill(0).map(() => new Array(len).fill(true))

    for (let j = 1; j < len; j++) {
        for (let i = 0; i < j; i++) {
            if (s.charAt(i) !== s.charAt(j)) {
                dp[i][j] = false;
            } else {
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }
            // 只要 dp[i][L] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }
    return s.substring(begin, begin + maxLen);
};

console.log(longestPalindrome('abcba'))
