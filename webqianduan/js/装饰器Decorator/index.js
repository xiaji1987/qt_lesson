@eat
class Person {
  constructor() {}
}

function eat(target, key, descriptor) {
  console.log('吃饭');
  console.log(target);
  console.log(key);
  console.log(descriptor);
  target.prototype.act = '我要吃饭';
}

const jack = new Person();
console.log(jack.act);