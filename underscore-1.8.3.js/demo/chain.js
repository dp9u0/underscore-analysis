var _ = require('../underscore-1.8.3-analysis');

// 非 OOP 链式调用
_.chain([1, 2, 3])
    .map(function(a) { return a * 2; })
    .reverse()
    .value(); // [6, 4, 2]

// OOP 链式调用
_([1, 2, 3])
    .chain()
    .map(function(a) { return a * 2; })
    .first()
    .value(); // 2