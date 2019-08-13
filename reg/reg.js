// 一个字符
// let phoneReg = /^1[3-9][0-9]{9}$/;
// console.log(phoneReg.test("13884845444"));


// let phoneReg = /(1[3-9][0-9])[0-9]{8}/;
// let str = "我的手机号是13888888888，收下吧还有15478964";
// // 得到手机号判断服务商
// console.log(str.match(phoneReg));
// console.log(str.match(phoneReg)[1]);

// 匹配邮箱
let emailReg = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]+$/;
console.log(("754200506@qq.com").match(emailReg));