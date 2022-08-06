module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'prettier',
        'plugin:prettier/recommended', // 添加`prettier`拓展 用于和`prettier`冲突时覆盖`eslint`规则
    ],
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        impliedStrict: true,
    },
    /**
     * 定义额外的全局，开发者自定义的全局变量，让其跳过no-undef 规则
     */
    globals: {
        // Vue: false,
    },
    plugins: ['prettier'], // 期望报错的来源依旧是 ESLint ，使用这个，相当于把 Prettier 推荐的格式问题的配置以 ESLint rules 的方式写入，这样相当于可以统一代码问题的来源
    rules: {
        'prettier/prettier': 'error',
        // 强制使用一致的缩进
        indent: ['error', 4, { SwitchCase: 1 }],
        // 要求使用 let 或 const 而不是 var
        'no-var': 'off',
        // 函数名后面括号前面留两个空格
        // 'space-before-function-paren': ['error', 'always'], // 问题点查看README.md
        // 要求使用分号代替 ASI
        // semi: ['error', 'always'],
        // 自定义规则，方便格式化代码
        'comma-dangle': [
            'warn',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'ignore',
                functions: 'ignore',
            },
        ],
    },
};
