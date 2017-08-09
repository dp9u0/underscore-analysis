var _ = require('../underscore-1.8.3-analysis');

var sum = _.reduce([1, 2, 3], function(memo, num) { return memo + num; }, 0);
// => 6
console.log(sum);

var list = [
    [0, 1],
    [2, 3],
    [4, 5]
];
var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
console.log(flat);
// => [4, 5, 2, 3, 0, 1]