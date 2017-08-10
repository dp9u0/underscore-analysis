var _ = require('../underscore-1.8.3-analysis');
const MAX = 10;
const MIN = 0;
const MAX_COUNT = 100000000;
var randon = 0;
var start = Date.now();
for (var index = 0; index < MAX_COUNT; index++) {
    randon += _.random(MIN, MAX);
}
console.log(randon);
console.log(Date.now() - start);

console.log(`---------------------------------`)
var randon2 = 0;
var start2 = Date.now();
for (var index = 0; index < MAX_COUNT; index++) {
    randon2 += MIN + (~~(Math.random() * (MAX - MIN + 1)));
}
console.log(randon2);
console.log(Date.now() - start2);

// var random = Math.random() * (MAX - MIN + 1);
// console.log(random);
// console.log(~random);
// console.log(~~random);