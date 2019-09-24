function betterWn(target, name, descriptor) {
  console.log(target, name, descriptor);
  const originalXiangqin = descriptor.value;
  console.log(originalXiangqin);
  descriptor.value = () => {
    console.log('我家在红谷滩有房');
    console.log('我家有车');
    originalXiangqin();
  }
}
class Man {
  @betterWn
  xiangqing() {
    // console.log('我家在红谷滩有房');
    // console.log('我家有车');
    console.log('和我在一起');
  }
}
var man = new Man();
man.xiangqing();
