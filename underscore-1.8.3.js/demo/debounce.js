var _ = require('../underscore-1.8.3-analysis');

var count = 0;

var log = function(count) {
    console.log(`${_.now()}:${count}`);
};

// immediate : 是否立刻执行

var throttle = _.debounce(log, 100, true);

var run = function() {
    var c = ++count;
    throttle(c);
    setTimeout(run, _.random(90, 110));
};

setTimeout(run, 100);