/**
 * @description 暴力递归
 * @param {*} coins
 * @param {*} amount
 */
// function getMinCounts (coins, amount) {
//     function dp (n) {
//         let result = 0;
//         for (let coin = 0; coin < coins.length; coin++) {
//             result = Math.min(result, dp(n - coin))
//         }
//         return result;
//     }

//     return dp(amount)
// }





function getMinCounts (coins, amount) {
    // 相当于初始化为正无穷，便于后续取最小值
    const memo = Array(amount + 1).fill(-1)

    memo[0] = 0;
    // 迭代，算出 金额 1 ～ amount 之间每一个金额所需的硬币数
    for (let i = 1; i <= amount; i++) {

        let minCount = amount + 1; // 模拟无穷大

        for (let coin = 0; coin < coins.length; coin++) {
            const currentCoin = coins[coin]
            if (i < currentCoin) { continue }

            // 剩下的金额数目
            const restAmount = i - currentCoin;
            // 剩下的金额所需硬币数
            const restAmountCount = memo[restAmount]

            if(restAmountCount == -1) continue

            // 所需的硬币数，因为初始值是 -1，所以这里要加1
            const needCoinCount = 1 + restAmountCount;

            if (needCoinCount < minCount) {
                minCount = needCoinCount
            }
        }
        // 如果是可用组合，记录结果
        if (minCount !== amount + 1) { memo[i] = minCount; }
    }
    return memo[amount];
}



const coins = [1, 2, 5]
const amount = 11;
// const coins = [2]
// const amount = 3;

console.log(getMinCounts(coins, amount))
