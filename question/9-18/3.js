const add = () => {
  const cache = {};
  return num => {
    console.log(num);
    if(num in cache) {
      return `from cache ${num}`
    } else {
      const r = num +10;
      cache[num] = r;
      return `calcul ${r}`
    }
  }
}
// add是个
// addFunc 是个函数
const addFunc = add();
console.log(addFunc(10)); // calcul 20
console.log(addFunc(10)); // from cache 10
console.log(addFunc(2 * 5)); // from cache 10