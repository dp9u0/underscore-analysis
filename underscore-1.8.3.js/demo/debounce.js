// http://drupalmotion.com/article/debounce-and-throttle-visual-explanation

var _ = require('../underscore-1.8.3-analysis');
var count = 0;

var log = function(count) {
    console.log(`${_.now()}:${count}`);
};

// immediate : 是否立刻执行

var throttle = _.debounce(log, 100);
//var throttle = myDebounce(log, 100);

var run = function() {
    var c = ++count;
    throttle(c);
    setTimeout(run, _.random(90, 110));
};

setTimeout(run, 100);

function myDebounce(func, timeout, context) {
    context = context || this;
    return function() {
        var args = arguments;
        clearTimeout(func.__timeId__);
        func.__timeId__ = setTimeout(function() {
            func.apply(context, args);
        }, timeout);
    };
}