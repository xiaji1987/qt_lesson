// 事件监听
// addEventListener(event_type,callback)
// 事件 点击(事件触发)才会执行? 注册:submit
// 发生时，body广播出去 注册了事件的回调函数
// 执行

// 买房
// 售楼部 body
// 买房的人们 
var saleOffice = {
    name:'万达星城',
}
//买房？
saleOffice.clientList = [];//购房者
// saleOffice.clientList.push();//增加购房者
// fn 参数
saleOffice.listen = function(fn){
    saleOffice.clientList.push(fn);
};
saleOffice.listen((price,squareMeter)=>{
    console.log(price,squareMeter);
    if (price>15000) {
        console.log('但阿萨大大青蛙完全');
    }
});
saleOffice.listen((price,squareMeter)=>{
    if(squareMeter<100){
        console.log('太小了');
    }else{
        console.log('满意');
    }
});
saleOffice.trigger = function(){
    for (var i = 0; i < saleOffice.clientList.length; i++) {
        typeof saleOffice.clientList[i]=='function'?saleOffice.clientList[i](2000,112):null;    
    }
}