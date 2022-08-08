将以下数据结构转换为 Tree 结构：

```javascript
let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
];
```

输出结果：

```javascript
[
    {
        id: 1,
        name: '部门1',
        pid: 0,
        children: [
            {
                id: 2,
                name: '部门2',
                pid: 1,
                children: [],
            },
            {
                id: 3,
                name: '部门3',
                pid: 1,
                children: [
                    // 结果 ,,,
                ],
            },
        ],
    },
];
```

## 参考：

https://juejin.cn/post/6983904373508145189
