var _ = require('../underscore-1.8.3-analysis');

_.map({ one: 1, two: 2, three: 3 }, function(num, key) { return num * 3; });