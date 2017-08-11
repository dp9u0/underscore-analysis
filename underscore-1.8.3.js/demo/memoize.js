var _ = require('../underscore-1.8.3-analysis');

var fibonacci = _.memoize(function(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(6));
console.log(fibonacci(10));

// 尾递归版本

var fibonacci2 = function(num, first, second) {
    first = first || 0;
    second = second || 1;
    if (num === 1) {
        return second;
    }
    return fibonacci2(--num, second, first + second);
}

console.log(fibonacci2(1));
console.log(fibonacci2(2));
console.log(fibonacci2(10));