// const fs = require('fs');
// // I/O 找文件 读入内容 控制台输出callback
// // 异步 callback 匿名函数
// fs.readFile('./index.html','utf-8',(err,data) => {
//     // if (err) {
//     //     console.log(err);
//     // }else{
//     //     console.log(data);
//     // }
//     // if (!err) {
//     //     console.log(data);
//     // }
// });

const width=800,
      heigth=600;
let   back,//背景
      mummy,//僵尸
      anim,//运动的对象
      loopText;//文本
var game=new Phaser.Game(width,heigth,Phaser.AUTO/*游戏引擎*/,'#game',{preload:preload,create:create,update:update})
function preload() {
    //预加载
    game.load.image('lazur','./image/tupian1.jpg');//背景图片
    game.load.spritesheet('mummy','./image/metalslug_mummy37x45.png',37,45,18)//精灵
    //创建对象
}
function create(){
    back = game.add.image(0,-400,'lazur');
    back.scale.set(2);
    back.smoothed = false;

    mummy = game.add.sprite(200, 360, 'mummy', 10);
    mummy.scale.set(4);
    mummy.smoothed = false;

    anim = mummy.animations.add('walk');
    anim.play(10, true);
}
function update(){}


// const width = 800,
//         height = 600;
//     let back, //背景
//         mummy, //僵尸
//         anim, //运动对象
//         loopText;//文本

//     // 游戏对象
//     var game = new Phaser.Game(width, height, 
//     Phaser.AUTO, '#game', { preload: preload,
//          create:create, update: update})
//     function preload () {
//         //预加载
//         game.load.image('lazur',
//          './image/thorn_lazur.png');//背景图片
//         game.load.spritesheet('mummy',
//          './image/metalslug_mummy37x45.png', 37, 45, 18)//精灵
//     }
//     // 1. 游戏对象
//     // 2. 背景等资源
//     // 3. player， enemy
//     function create() {
//         //scene 
//         back = game.add.image(0, -400, 'lazur');
//         back.scale.set(2);
//         back.smoothed = false;

//         mummy = game.add.sprite(200, 360, 'mummy', 10);
//         mummy.scale.set(4);
//         mummy.smoothed = false;

//         anim = mummy.animations.add('walk');
//         anim.play(10, true);
//     }
//     function update () {}