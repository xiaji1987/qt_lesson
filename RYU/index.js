let currentPlayer=null;
const Ryu={
    name:'ryu',
    gender:"男",
    attack:function(){
        console.log('攻击');
    },
    defense:function(){
        console.log('防御');
    },
    jump:function(){
        console.log('跳跃');
    },
    crouch:function(){
        console.log('蹲下');
    }
}
const ChunLi={
    name:'春丽',
    gender:"女",
    attack:function(){
        console.log(`${this.name}攻击`);
    },
    defense:function(){
        console.log(`${this.name}防御`);
    },
    jump:function(){
        console.log(`${this.name}跳跃`);
    },
    crouch:function(){
        console.log(`${this.name}蹲下`);
    }
}
currentPlayer=ChunLi;
const commandStack=[];
const commands={
    119:'jump',//w
    115:'crouch',//s
    97:'attack',//a
    100:'defense'//d
}
document.onkeypress=function(ev){
    console.log(ev.key+'  '+ev.keyCode);
    // keyCode对应的动作 动起来
    // 1. 抽象  {ev.keyCode:动作}   obj[key]=obj中key对应的value,如果value是方法则在后面加上 obj[key]()
    let keyCode=ev.keyCode,
        command=command[ev.keyCode]?makeCommand(currentPlayer,commands[ev.keyCode]):null;
    if(command){
        command();
        commandStack.push(command);
    }else{
        console.log('error!');
    }
    // if(command){
    //     //谁，发出的动作 参数
    //     makeCommand(Ryu, command);
    //     // Ryu[commands[ev.keyCode]]();
    // }
    // switch (ev.keyCode) {
    //     case 119://jump
    //         Ryu.jump();
    //         break;
    //     case 115://crouch
    //         Ryu.crouch();
    //         break;
    //     case 97:
    //         Ryu.attack();
    //         break;
    //     case 100:
    //         Ryu.defense();
    //         break;
    //     default:
    //         break;
    // }
}
//封装
var makeCommand=function(receiver,state){
    return function(){
        receiver[state]();
    }
}
document.getElementById('replay').onclick=function(){
    let command;
    while(command=commandStack.shift()){
        command();
    }
}