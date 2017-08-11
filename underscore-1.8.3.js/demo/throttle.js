var _ = require('../underscore-1.8.3-analysis');

var count = 0;

var log = function(count) {
    console.log(`${_.now()}:${count}`);
};

// leading : 是否忽略 第一次调用
// trailing : 执行 wait时间 区间内的第一次 还是最后一次
var throttle = _.throttle(log, 2000, { leading: false, trailing: false });

setInterval(
    function() {
        var c = ++count;
        throttle(c);
    }, 100);

// [1,2,3],[4,5,6][7,8,9]