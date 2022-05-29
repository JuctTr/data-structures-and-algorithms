
function getMinCountsHelper (coins: number[], total: number, memo: number[]): number {
    const saveMinCount = memo[total]
    if (saveMinCount != -2) { return saveMinCount }
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

  function getMinCounts() {
    const coins = [5, 3]
    const total = 25
    let memo = Array(25 + 1).fill(-2)  // 备忘录，没有缓存的元素为-2

    memo[0] = 0; // 其中0对应的结果也是0，首先存在备忘录中

    return getMinCountsHelper(coins, total, memo)

  }
  console.log(getMinCounts())
