// import Dictionary from './dictionary'; // 可以使用ECMAScript 2015 新增了 Map 类

/**
 * @description 把这种数组与链表相结合的存储方法称为邻接表(Adjacency List)
 */
export default class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.vertices = []; // 一维数组来存储图的顶点
        this.adjList = new Map(); // 邻接表
    }
    /**
     * @description 增加顶点
     * @param {*} v
     */
    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v);
            this.adjList.set(v, []); // 用数组初始化邻接表
        }
    }
    /**
     * @description 增加顶点Vi到Vj之间的边或者弧
     * @param {*} a 顶点Vi
     * @param {*} b 顶点Vj
     */
    addEdge(a, b) {
        if (!this.adjList.get(a)) {
            this.addVertex(a);
        }
        if (!this.adjList.get(b)) {
            this.addVertex(b);
        }
        this.adjList.get(a).push(b);
        if (this.isDirected !== true) {
            this.adjList.get(b).push(a);
        }
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
            const neighbors = this.adjList.get(this.vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                s += `${neighbors[j]} `;
            }
            s += '\n';
        }
        return s;
    }
}
