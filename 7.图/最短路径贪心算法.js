/**
 *        v0 v1 v2 v3 v4 v5
 *    v0：[0, 2, 4, 0, 0, 0],
 *    v1：[0, 0, 2, 4, 2, 0],
 *    v2：[0, 0, 0, 0, 3, 0],
 *    v3：[0, 0, 0, 0, 0, 2],
 *    v4：[0, 0, 0, 3, 0, 2],
 *    v5：[0, 0, 0, 0, 0, 0],
 */
const graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 2, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0],
];

function Dijkstra(graph, src) {
    const disance = [];
    const visited = [];
    const graphLength = graph.length;
    // 初始化
    for (let i = 0; i < graphLength; i++) {
        disance[i] = Number.MAX_SAFE_INTEGER;
        visited[i] = false;
    }

    disance[src] = 0; // v0 到自己的距离为 0

    /**
     * 1、寻找v0到 v1, v2, v3, v4, v5 的最短路径（前提是他们之间有边，也就是graph[minIndex][v] !== 0）
     * 2、寻找v1到 v0, v2, v3, v4, v5 的最短路径（前提是他们之间有边）
     * 3、寻找v2到 v0, v1, v3, v4, v5 的最短路径（前提是他们之间有边）
     * 。。。。。。。
     */
    for (let i = 0; i < graphLength - 1; i++) {
        let min = Number.MAX_SAFE_INTEGER;
        let minIndex = -1;

        for (let v = 0; v < disance.length; v++) {
            if (visited[v] === false && disance[v] <= min) {
                min = disance[v];
                minIndex = v;
            }
        }

        visited[minIndex] = true;

        // console.log('disance, visited => ', disance, visited);
        for (let v = 0; v < graphLength; v++) {
            if (
                !visited[v] &&
                graph[minIndex][v] !== 0 &&
                disance[minIndex] !== Number.MAX_SAFE_INTEGER &&
                disance[minIndex] + graph[minIndex][v] < disance[v]
            ) {
                disance[v] = disance[minIndex] + graph[minIndex][v];
                console.log(`v${src} 到 v${v} 的最短距离为 => `, disance[v]);
            }
        }
    }
    return disance;
}

console.log("********* Dijkstra's Algorithm - Shortest Path ***********");

var dist = Dijkstra(graph, 0);

for (let i = 0; i < dist.length; i++) {
    console.log(i + '\t\t' + dist[i]);
}
