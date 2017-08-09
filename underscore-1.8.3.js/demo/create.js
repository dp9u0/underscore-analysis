var _ = require('../underscore-1.8.3-analysis');

var protoType = { a: '2' };

var test = _.create(protoType);

console.log(test.__proto__ === protoType);
console.log(test.constructor);
console.log(test.constructor === Object);

console.log(this === exports);
console.log(this === module.exports);

// console.log(`------------------------------`);


// 理解 ctor 原型
function ctor() {

}
ctor.prototype = protoType;
var result1 = new ctor;
var result2 = new ctor();
console.log(result1);
console.log(result1.constructor === Object);
console.log(result1.__proto__);
console.log(result2);
console.log(result2.constructor === result1.constructor);
console.log(result2.__proto__);

console.log(`------------------------------`);

function ctor2() {

}
var result12 = new ctor2;
var result22 = new ctor2();
console.log(result12);
console.log(result12.constructor === ctor2);
console.log(result12.__proto__);
console.log(`------------------------------`);
console.log(result22);
console.log(result22.constructor === result12.constructor);
console.log(result22.__proto__);