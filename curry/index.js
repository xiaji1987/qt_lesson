// 普世
const curry = require('./b.js');
function checkByRegExp(reg, string) {
    return reg.test(string);
}
console.log(checkByRegExp(/1[3-9]\d{9}/,'15345768932'));
console.log(checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'3094889356@qq.com'));


let checkCellphone = curry(checkByRegExp)(/1[3-9]\d{9}/);
console.log(checkCellphone('13345678901'));

let checkEmail = curry(checkByRegExp)(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);
console.log(checkCellphone('3094889356@qq.com'));
// checkByRegExp(/1[3-9]\d{9}/,'15345768932');
// checkByRegExp(/1[3-9]\d{9}/,'15478962448');
// checkByRegExp(/1[3-9]\d{9}/,'16789641258');

// checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'3094889356@qq.com');
// checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'245678965356@qq.com');
// checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'15647896542@qq.com');
