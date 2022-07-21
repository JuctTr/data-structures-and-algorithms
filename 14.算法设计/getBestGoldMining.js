
/**
 * 题目描述：很久很久以前，有一位国王拥有5座金矿，每座金矿的黄金储量不同，需要参与挖掘的工人人数也不同。例如有的金矿储量是500kg黄金，需要5个工人来挖掘;有的金矿储量是200kg黄金，需要3个工人来挖 掘......
 *  */

const workers = 10;
const needWorders = [3, 4, 3, 5, 5]
const glodWeight = [200, 300, 350, 400, 500]


/**
 * 很久很久以前，有一位国王拥有5座金矿，每座金矿的黄金储量不同，需要参与挖掘的工人人数也不同。例如有的金矿储量是500kg黄金，
 * 需要5个工人来挖掘;有的金矿储量是200kg黄金，需要3个工人来挖 掘......
 * @param {*} workers 工人数量
 * @param {*} n 可选金矿数量
 */
function getBestGoldMining (workers, n) {
    if (workers === 0 || n === 0) {
        return 0
    }

    const index = n - 1;

    if (needWorders[index] > workers) {
        return getBestGoldMining(workers, index);
    }

    return Math.max(getBestGoldMining(workers, index), getBestGoldMining(workers - needWorders[index], index) + glodWeight[index])
}


console.log(getBestGoldMining(workers, glodWeight.length))



function getBestGoldMiningV2 (workers, n) {

    let resultTable = new Array(n + 1).fill(0).map(() => new Array(workers + 1).fill(0))
    console.log(resultTable)
    for(let i = 1; i <= glodWeight.length; i++) {
        for(let j = 1; j <= workers; j++) {
            if(j < needWorders[i-1]){
                resultTable[i][j] = resultTable[i-1][j];
            }else{
                resultTable[i][j] = Math.max(resultTable[i-1][j], resultTable[i-1][j-needWorders[i-1]]+ glodWeight[i-1]);
            }
        }
   }
   //返回最后1个格子的值
   return resultTable[glodWeight.length][workers];
}
88
console.log(getBestGoldMiningV2(workers, glodWeight.length))

function getBestGoldMiningV3 (workers, n) {

    let results = new Array(workers + 1).fill(0)
    console.log(results)
    for(let i=1; i<= glodWeight.length; i++){
        for(let j = workers; j>=1; j--){
            if(j >= needWorders[i-1]){
                results[j] = Math.max(results[j], results[j - needWorders[i-1]]+ glodWeight[i-1]);
            }
        }
   }
    //返回最后1个格子的值 return results[w];
    return results[workers];
}

console.log(getBestGoldMiningV3(workers, glodWeight.length))





