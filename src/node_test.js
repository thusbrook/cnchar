var cnchar = require('./main/index');
var order = require('./plugin/order');
var trad = require('./plugin/trad');
var poly = require('./plugin/poly');
cnchar.use(order, trad, poly);
console.log(cnchar.stroke('一个', 'order'));
console.log(cnchar.stroke('長城', 'count', 'order', 'name'));
console.log(cnchar.orderToWord(['横', '撇', '捺']));
console.log('美好的地方'.spell('tone'));
// module.exports = cnchar