var _ = require('../underscore-1.8.3-analysis');

// Returns the same value that is used as the argument. In math: f(x) = x
// This function looks useless, but is used throughout Underscore as a default iteratee.

var stooge = { name: 'moe' };
console.log(stooge === _.identity(stooge));
// => true