var _ = require('../underscore-1.8.3-analysis');
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
//  => [2, 4, 6]
console.log(evens);

evens = _.filter([1, 2, 3, 4, 5, 6], '1');
//  => [2, 4, 6]
console.log(evens);