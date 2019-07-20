//咖啡机
// OO 面向对象 属性和方法
var Coffee=function(){

}
Coffee.prototype.boilWater=function(){
    console.log("把水烧开");
}
Coffee.prototype.brewCoffeeGrienfs=function(){
    console.log("用水泡咖啡");
}
Coffee.prototype.pourInCup=function(){
    console.log("把咖啡倒进杯子");
}
Coffee.prototype.addSugerAndMilk=function(){
    console.log("加糖和牛奶");
}
Coffee.prototype.cook=function(){
    this.boilWater();
    this.brewCoffeeGrienfs();
    this.pourInCup();
    this.addSugerAndMilk();
}
var Coffee=new Coffee();
Coffee.cook();
