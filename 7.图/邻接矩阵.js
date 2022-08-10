/**
 * @description 邻接矩阵(Adjacency Matrix)存储方式是用两个数组来表示图。
 * 一个一维数组存储图中顶点信息，一个二维数组(称为邻接矩阵)存储图中的边或弧的信息
 * 【特点】：如果是无向图，它的边数组是一个对称矩阵
 *
 * 【缺点】：如果边数相对顶点较少的图（不是强连通（稀疏图）图），使用邻接矩阵来表示，存在对存储空间的极大浪费，还有就是二维数组不太灵活
 */
export default class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.vertices = []; // 一维数组来存储图的顶点
        this.adjList = []; // 邻接矩阵，也可以看作边表

        this.INDEX = {}; // 存储顶点的索引
    }
    /**
     * @description 初始化邻接矩阵
     */
    init(vertices) {
        const len = vertices.length;
        for (let i = 0; i < len; i++) {
            this.addVertex(vertices[i]);
            this.adjList.push(new Array(len).fill(0));
            this.INDEX[vertices[i]] = i;
        }
        console.table(this.adjList);
        console.log(this.INDEX);
    }
    /**
     * @description 增加顶点
     * @param {*} v
     */
    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v);
        }
    }
    /**
     * @description 增加顶点Vi到Vj之间的边或者弧
     * @param {*} a 顶点Vi
     * @param {*} b 顶点Vj
     */
    addEdge(vi, vj) {
        const viIndex = this.INDEX[vi];
        const vjIndex = this.INDEX[vj];
        this.adjList[viIndex][vjIndex] = 1;
        this.adjList[vjIndex][viIndex] = 1; /* 因为是无向图，矩阵对称 */
    }
    getVertices() {
        return this.vertices;
    }
    getAdjList() {
        return this.adjList;
    }
    toString() {
        let s = '';
        for (let i = 0; i < this.vertices.length; i++) {
            s += `${this.vertices[i]} -> `;
            const index = this.INDEX[this.vertices[i]];
            const neighbors = this.adjList[index];
            for (let j = 0; j < neighbors.length; j++) {
                s += `${neighbors[j]} `;
            }
            s += '\n';
        }
        return s;
    }
}
