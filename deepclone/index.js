const datalength = 200000;
let objInt = {}; //Object可以枚举的对象
for (var i = 0; i < datalength; ++i) {
    objInt[i] = {};
}

function runTestCode(obj) {
    console.time('for-in');
    for (var key in obj) {

    }
    console.timeEnd('for-in');

    console.time('keys');
    let keys = Object.keys(obj);
    console.timeEnd('keys');

    console.time('for')
    for (var i = 0; i < keys.length; i++) {
        var val = obj[keys[i]]
    }
    console.timeEnd('for')
}
runTestCode(objInt);