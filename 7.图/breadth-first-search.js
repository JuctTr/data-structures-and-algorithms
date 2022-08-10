import Queue from '../4.队列/Queue.js';

const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2,
};

const initializeColor = vertices => {
    const color = {};
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE;
    }
    return color;
};

/**
 *     a
 *    / \
 *   c   b
 *      / \
 *     d   e
 *
 * 【访问路线】：
 *
 * 队列：a
 * 输出：
 *
 * 队列：c b
 * 输出：a
 *
 * 队列：b
 * 输出：a c
 *
 * 队列：d e
 * 输出：a c b
 *
 * 队列：e
 * 输出：a c b d
 *
 * 队列：
 * 输出：a c b e
 *
 * @param {*} graph
 * @param {*} startVertex
 * @param {*} callback
 */
export const breadthFirstSearch = (graph, startVertex, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const queue = new Queue();

    queue.enqueue(startVertex);

    while (!queue.isEmpty()) {
        const u = queue.dequeue();
        const neighbors = adjList.get(u);
        color[u] = Colors.GREY;
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i];
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY;
                // 把目前顶点的相邻节点推入队列
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
        if (callback) {
            callback(u);
        }
    }
};
