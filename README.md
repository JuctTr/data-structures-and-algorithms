# JavaScript 的数据结构与算法

本仓库参考[Learning JavaScript Data Structures and Algorithms - Third Edition](https://github.com/PacktPublishing/Learning-JavaScript-Data-Structures-and-Algorithms-Third-Edition)以及看 **《大话数据结构》（溢彩加强版）** 的一些笔记 和 demo 代码

-   本人觉得源仓库的代码有些语义化不太友好，记笔记期间对一些变量做了一些修改和调整
-   基本概念和定义建议看《大话数据结构》，《学习 javascript 数据结构与算法》对于一些算法的讲解是直接上代码，太过简单粗暴

## 参考

-   [Learning JavaScript Data Structures and Algorithms - Third Edition](https://github.com/PacktPublishing/Learning-JavaScript-Data-Structures-and-Algorithms-Third-Edition)
-   《大话数据结构》（溢彩加强版）程杰 • 著

## Q&A

### Eslint 结合 Prettier 来格式化代码程序

在使用 Eslint 结合 Prettier 来格式化代码程序时，遇到一个问题，就是函数关键字后面的空格，Prettier 是不让添加的，当你在 vscode 编辑器的 setting.json 中设置 ` "editor.formatOnSave": true,`时，
每当保存，就会把空格去掉，如下：

```JavaScript
function identity (value) {
  //             ^ space here
  return value;
}

function identity <T>(value: T): T {
  //             ^ space here
  return value;
}

class A {
  method () {
    //  ^ space here
  }
}

const obj = {
  method () {
    //  ^ space here
  }
}
```

即使你在.eslintrc.js 文件中设置 `'space-before-function-paren': ['error', 'always']`，保存后仍然是把空格去掉了

```JavaScript
function identity(value) {
  return value;
}

function identity<T>(value: T): T {
  return value;
}

class A {
  method() {

  }
}

const obj = {
  method() {
  }
}
```

这个空格是否保留，官方 GitHub 上存在很大争议

-   函数声明后面的空格：https://github.com/prettier/prettier/issues/3845

-   匿名函数关键字后面的空格：https://github.com/prettier/prettier/issues/3847

最终`匿名函数后面留空格`这个提议被纳入了，Pull Request：https://github.com/prettier/prettier/pull/3903
而函数声明后面留空格的提议不被采纳。

https://github.com/prettier/prettier-eslint
中也提到，prettier 是一个更强大的自动格式化程序。prettier 的好处之一是它是多么的固执己见

当然也有开发者自己实现了一些 options，具体见 issues。
