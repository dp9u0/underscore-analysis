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


var fun = function() {

}

fun.prototype = {
    info: {
        name: 'peter',
        age: 25
    }
}

// var fun = function() {
//     this.info = {
//         name: 'peter',
//         age: 25
//     }
// }

// fun.prototype = {
//     info: {
//         name: 'peter',
//         age: 25
//     }
// }

var a = new fun();
var b = new fun();

a.info.name = 'jack';
b.info.name = 'tom';

console.log(a.info.name);
console.log(b.info.name);
console.log(b.__proto__.info.name);