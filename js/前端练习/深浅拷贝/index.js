// let a = {
//   aa: 1,
//   bb: 2,
//   cc: 3,
//   dd: {
//     ee: 5,
//   },
//   ff: {
//     gg: 6,
//   },
//   hh: {
//     ii: 7
//   }
// };
// let d = JSON.parse(JSON.stringify(a));//深复制包含子对象
// let c = {...a};//拷贝一层但不包含子对象
// let b = a;//浅拷贝
// b.bb = 22;
// b.hh.ii = 77
// c.cc = 33;
// c.dd.ee = 55;
// d.ff.gg = 66;
// d.aa = 11
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

let obj = {
  a: 1,
  b: {
    c: 2
  },
  d: {
    e: 3
  }
}

let newobj = obj
let newobj2 = JSON.parse(JSON.stringify(obj))
newobj.a = 11
newobj.b.c = 22
newobj2.a = 111
newobj2.d.e = 333
console.log(obj)
console.log(newobj2)
console.log(newobj)