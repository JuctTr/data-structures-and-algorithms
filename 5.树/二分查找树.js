import TreeNode from './TreeNode.js';

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(key) {
        const newNode = new TreeNode(key);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
        console.log(this.root);
    }
    insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    searchNode(key, node) {
        // 如果node是null，说明树中没有要查找的值，返回false
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            // 如果要查找的值小于该节点，继续递归遍历其左侧节点
            return this.searchNode(key, node.left);
        } else if (key > node.key) {
            // 如果要查找的值大于该节点，继续递归遍历其右侧节点
            return this.searchNode(key, node.right);
        }
        // 如果要查找的值等于该节点，说明查找成功，返回改节点
        return node;
    }
    search(key, node) {
        // 同样的，search方法允许在子树中查找值
        node = node || this.root;
        return this.searchNode(key, node);
    }
    remove(key) {
        this.root = this.removeNode(this.root, key);
    }
    removeNode(node, key) {
        if (node === null) {
            return null;
        }

        // 找到要删除的节点
        node = this.search(key, node);

        // 第一种情况，该节点没有子节点
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }

        if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        if (key > node.key) {
            node.right = this.removeNode(node.right, key);
            return node;
        }

        // 第二种情况，该节点只有一个 子节点 的节点
        if (node.left === null) {
            // 只有右节点
            node = node.right;
            return node;
        } else if (node.right === null) {
            // 只有左节点
            node = node.left;
            return node;
        }
        // 第三种情况，有有两个 子节点 的节点
        // 将右侧子树中的最小值，替换到要删除的位置
        // 找到最小值
        var aux = this.min(node.right);
        // 替换
        node.key = aux.key;
        // 删除最小值
        node.right = this.removeNode(aux.key, node.right);
        return node;
    }
    // 在二叉搜索树里，不管是整个树还是其子树，最小值一定在树最左侧的最底层。
    min(node) {
        // min方法允许传入子树
        node = node || this.root;
        // 一直遍历左侧子节点，直到底部
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    }
    // 搜索最大值与搜索最小值类似，只是沿着树的右侧遍历。
    max(node) {
        // max方法允许传入子树
        node = node || this.root;
        // 一直遍历右侧子节点，直到底部
        while (node && node.right !== null) {
            node = node.right;
        }
        return node;
    }
    /**
     * @description 先序遍历
     * @param {*} node
     * @param {*} callback
     */
    preOrderTraverseNode(node, callback) {
        if (node !== null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }
    preOrderTraverse(callback) {
        return this.preOrderTraverseNode(this.root, callback);
    }
    /**
     * @description 中序遍历
     * @param {*} node
     * @param {*} callback
     */
    inOrderTraverseNode(node, callback) {
        if (node !== null) {
            // 判断这棵树是否为空？
            this.inOrderTraverseNode(node.left, callback); // 不为空的话，把节点的左孩子，在遍历左子树下去直到最左边最小的那个，
            callback(node.key); // printNode(node.key) // 找到整棵树的
            this.inOrderTraverseNode(node.right, callback); //
        }
    }
    inOrderTraverse(callback) {
        return this.inOrderTraverseNode(this.root, callback);
    }
    /**
     * @description 后序遍历
     * @param {*} node
     * @param {*} callback
     */
    postOrderTraverseNode(node, callback) {
        if (node !== null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }
    postOrderTraverse(callback) {
        return this.postOrderTraverseNode(this.root, callback);
    }
}

// const binarySearchTree = new BinarySearchTree();
// const arr = [11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25];
// console.log('输入 => ', arr);
// for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];
//     binarySearchTree.insert(value);
// }

// console.log('先序遍历：');
// var arr1 = [];
// binarySearchTree.preOrderTraverse(function (value) {
//     // console.log(value);
//     arr1.push(value);
// });
// console.log(arr1);
// console.log('中序遍历：');
// var arr2 = [];
// binarySearchTree.inOrderTraverse(function (value) {
//     // console.log(value);
//     arr2.push(value);
// });
// console.log(arr2);
// console.log('后序遍历：');
// var arr3 = [];
// binarySearchTree.postOrderTraverse(function (value) {
//     // console.log(value);
//     arr3.push(value);
// });
// console.log(arr3);
