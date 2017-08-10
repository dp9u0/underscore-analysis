var _ = require('../underscore-1.8.3-analysis');


var stooges = [{ name: 'moe', age: 40 }, { name: 'curly', age: 60 }];
console.log(_.sortedIndex(stooges, { name: 'larry', age: 50 }));