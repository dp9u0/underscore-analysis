var _ = require('../underscore-1.8.3-analysis');

var greet = function(greeting, append) {
    console.log(`${greeting} : ${this.name} ${append}`);
    return { retVal: 'adsfasdf' };
};

greet.prototype = { name: 'new' };

var func = _.bind(greet, { name: 'moe' }, 'hi');

var test1 = func('!');
var test2 = new func('!!!');
console.log(`---------------------`);