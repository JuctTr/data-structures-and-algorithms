class EdgeNode {
    /**
     *
     * @param {*} data 顶点值
     * @param {*} weight 权重
     */
    constructor(data, weight) {
        this.data = data || '';
        this.weight = weight || 0;
        this.next = null;
    }
}

/**
 * @description 用链表的方式实现邻接表
 */
export default class AdjacencyList {
    constructor(verticeList) {
        this.vertices = verticeList;
        this.adjList = new Map();
        this.init(verticeList);
    }
    init(verticeList) {
        const len = verticeList.length;
        for (let i = 0; i < len; i++) {
            this.addVertex(verticeList[i]);
        }
    }
    addVertex(v) {
        if (!this.adjList.has(v)) {
            this.adjList.set(v, null); // 初始化邻接表
        }
    }
    addEdge(vi, vj) {
        let vertexNode = this.adjList.get(vi);
        if (vertexNode === null) return this.adjList.set(vi, new EdgeNode(vj, 0));
        while (vertexNode.next != null) {
            vertexNode = vertexNode.next;
        }
        vertexNode.next = new EdgeNode(vj, 0);
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
            let neighbors = this.adjList.get(this.vertices[i]);
            while (neighbors) {
                s += `${neighbors.data} `;
                neighbors = neighbors.next;
            }
            s += '\n';
        }
        return s;
    }
}
