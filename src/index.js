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

function getMinCounts(coins, amount) {
    // 相当于初始化为正无穷，便于后续取最小值
    const memo = Array(amount + 1).fill(-1);

    memo[0] = 0;
    // 迭代，算出 金额 1 ～ amount 之间每一个金额所需的硬币数
    for (let i = 1; i <= amount; i++) {
        let minCount = amount + 1; // 模拟无穷大

        for (let coin = 0; coin < coins.length; coin++) {
            const currentCoin = coins[coin];
            if (i < currentCoin) {
                continue;
            }

            // 剩下的金额数目
            const restAmount = i - currentCoin;
            // 剩下的金额所需硬币数
            const restAmountCount = memo[restAmount];

            if (restAmountCount == -1) continue;

            // 所需的硬币数，因为初始值是 -1，所以这里要加1
            const needCoinCount = 1 + restAmountCount;

            if (needCoinCount < minCount) {
                minCount = needCoinCount;
            }
        }
        // 如果是可用组合，记录结果
        if (minCount !== amount + 1) {
            memo[i] = minCount;
        }
    }
    return memo[amount];
}

const coins = [1, 2, 5];
const amount = 11;
// const coins = [2]
// const amount = 3;

console.log(getMinCounts(coins, amount));

const permute = nums => {
    const res = [];
    const used = {};

    function dfs(path) {
        if (path.length == nums.length) {
            // 个数选够了
            res.push(path.slice()); // 拷贝一份path，加入解集res
            return; // 结束当前递归分支
        }
        for (const num of nums) {
            // for枚举出每个可选的选项
            if (used[num]) continue; // 使用过的，跳过
            path.push(num); // 选择当前的数，加入path
            used[num] = true; // 记录一下 使用了
            dfs(path); // 基于选了当前的数，递归
            path.pop(); // 上一句的递归结束，回溯，将最后选的数pop出来
            used[num] = false; // 撤销这个记录
        }
    }

    dfs([]); // 递归的入口，空path传进去
    return res;
};
console.log(permute([1, 2, 3]));

const a = function () {
    console.log('asdjfklsjd');
};
