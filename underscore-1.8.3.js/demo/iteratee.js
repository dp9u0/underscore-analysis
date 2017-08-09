var _ = require('../underscore-1.8.3-analysis');

// No value
var iteratee1 = _.iteratee();
// => _.identity()

// Function
var func = function(n) { console.log(this); return n * 2; }
var context = { a: 'e' };
var iteratee2 = _.iteratee(func, context);

func();
iteratee2();

// => function(n) { return n * 2; }

// Object
var iteratee3 = _.iteratee({ firstName: 'Chelsea' });
// => _.matcher({ firstName: 'Chelsea' });

// Anything else
var iteratee4 = _.iteratee('firstName');
// => _.property('firstName');