function who (name) {
  // console.log(target);
  // target.pname = '蜗牛';
  // return target;
  return function (target) {
    // target === function Man() {} === class Man {}
    console.log(name);
    console.log(target);
    target.pname = name;
    return target;
  }
}
// @who
@who('蜗牛123')
// @who({
//   name: '蜗牛'
// })
class Man {
  xiangqin () {
    console.log(`蜗牛去相亲了`);
    console.log(`${Man.pname}去相亲了`);
  }
}
var man = new Man();
man.xiangqin();
class Man1 {
  xiangqin () {
    console.log(`蜗牛弟弟去相亲了`);
    console.log(`${Man1.pname}去相亲了`);
  }
}
var man1 = new Man1();
man1.xiangqin();