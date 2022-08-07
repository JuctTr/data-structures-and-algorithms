/**
 * @description 迭代方式
 * @param {*} n
 * @returns
 */
function fibonacci(n) {
    const resolution = [0, 1];
    if (n < 2) return resolution[n];

    let i = 1;
    let fib1 = 0;
    let fib2 = 1;
    let fib = 0;
    while (i < n) {
        fib = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib;
        i++;
    }
    return fib;
}

/**
 * @description 递归方式
 * @param {*} n
 * @returns
 */
function Fibonacci(n) {
    if (n < 0) return 0;
    if (n === 0 || n === 1) return n;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

/**
 * @description 递归方式（剪枝优化）
 * @param {*} n
 * @returns
 */
function FibonacciOpt(n, memo) {
    if (n < 0) return 0;
    if (n === 0 || n === 1) return n;
    if (memo[n] !== 0) return memo[n];
    memo[n] = FibonacciOpt(n - 1, memo) + FibonacciOpt(n - 2, memo);
    return memo[n];
}

function fibonacciAdvance(n) {
    const memoObj = Array(n + 1).fill(0);
    return FibonacciOpt(n, memoObj);
}
