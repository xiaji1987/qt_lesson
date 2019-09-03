let obj = {
    a: 1,
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    }
}

function clone(target) {
    let cloneTarget = {}; //浅拷贝  内存空间
    for (const key in target) {
        cloneTarget[key] = target[key];
    }
    return cloneTarget;
}
let obj1 = clone(obj);
obj1.a = 2;
obj1.field4.child = 'newChild';
console.log(obj.field4.child)
console.log(obj)
console.log(obj1)