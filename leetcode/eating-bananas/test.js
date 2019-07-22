//Math.max
const IMath={};//namespace命名空间
/*
 * @parmas:number NaN
 * @return:number 返回最大值
*/
IMath.max=function(...args){
    // console.log(arguments,arguments.length);

    for (let i = 0; i < args.length; i++) {
        //类型检测
        // nodconsole.log(arguments[i]);
        if (typeof args[i]!=='number') {
            return NaN;
        }
    }
}

console.log(IMath.max(...[2,6,8,9]));