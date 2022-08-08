let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
];
/**
 * @description 递归实现
 * @param {*} data
 * @param {*} result
 * @param {*} pid
 */
function getChildren(data, result, pid) {
    for (const item of data) {
        if (item.pid === pid) {
            const obj = { ...item, chidren: [] };
            result.push(obj);
            getChildren(data, obj.chidren, item.id);
        }
    }
}

function arrayToTree(data, pid) {
    const result = [];
    getChildren(data, result, pid);
    return result;
}

// console.log(JSON.stringify(arrayToTree(arr, 0)))
console.log(arrayToTree(arr, 0));

function arrayToTreeV2(arr) {
    const result = [
        // { id: 1, name: '部门1', pid: 0 },
    ];
    const hashMap = {
        // 1: { id: 1, name: '部门1', pid: 0, children: [] },
        // 2: { id: 2, name: '部门2', pid: 1, children: [] },
        // 3: { id: 3, name: '部门3', pid: 1, children: [] },
        // 4: { id: 4, name: '部门4', pid: 3, children: [] },
        // 5: { id: 5, name: '部门5', pid: 4, children: [] },
    };

    // 先转成map存储
    for (const item of arr) {
        hashMap[item.id] = { ...item, children: [] };
    }

    for (let arrItem of arr) {
        const pid = arrItem.pid;
        const id = arrItem.id;
        if (pid === 0) {
            result.push(hashMap[id]);
        } else {
            if (!hashMap[pid]) {
                hashMap[pid] = {
                    children: [],
                };
            }
            hashMap[pid].children.push(hashMap[id]);
        }
    }

    return result;
}
console.log(arrayToTreeV2(arr));

function arrayToTreeV3(items) {
    const result = []; // 存放结果集
    const itemMap = {}; //
    for (const item of items) {
        const id = item.id;
        const pid = item.pid;

        if (!itemMap[id]) {
            itemMap[id] = {
                children: [],
            };
        }

        itemMap[id] = {
            ...item,
            children: itemMap[id]['children'],
        };

        const treeItem = itemMap[id];

        if (pid === 0) {
            result.push(treeItem);
        } else {
            if (!itemMap[pid]) {
                itemMap[pid] = {
                    children: [],
                };
            }
            itemMap[pid].children.push(treeItem);
        }
    }
    return result;
}

console.log(arrayToTreeV3(arr));
