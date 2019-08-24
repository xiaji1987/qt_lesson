const Event = require('events');
const ev = new Event();

// 订阅
function price1() {
  console.log('大米涨价了');
}
ev.on('price', price1);
ev.on('price', function(thing) {
  console.log(`${thing}涨价了`);
})
// 发布者
ev.emit('price', '大蒜');
ev.removeListener('price', price1);
ev.emit('price', '大蒜');

// once 只订阅一次
ev.once('eat', ()=>{
    console.log('eat1');
});
ev.once('eat', ()=>{
    console.log('eat2');
})
ev.emit('eat');
ev.emit('eat');