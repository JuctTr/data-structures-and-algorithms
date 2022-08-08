import Queue from './Queue.js';

/**
 * @description 循环队列——击鼓传花游戏
 * @param {*} elementsList ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'] 有多少个人
 * @param {*} num 传🌹的次数
 * @returns
 */
export default function hotPotato(elementsList, num) {
    const queue = new Queue();
    const eliminatedList = [];

    // 把所有人推入队列
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]);
    }

    while (queue.size() > 1) {
        // 遍历队列，front（队头指针）不断地循环移动（也就是你把🌹传给旁边的人，你被淘汰的威胁就立即解除了）
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        // 选中淘汰的人
        eliminatedList.push(queue.dequeue());
    }

    return {
        eliminated: eliminatedList,
        winner: queue.dequeue(),
    };
}
