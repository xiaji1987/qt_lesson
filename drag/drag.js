// //html 标签 不适合 canvas
// //物理引擎，碰撞检测
// var page=new Phaser.Game(800,600,Phaser.CANVAS,'game',
// {preload:preload,create:create})

// function preload(){
//     game.load.image('block','./block.png');
// }

// function create(){
//     //舞台
//     game.stage.backgroundColor='#124184';
//     //add block
//     game.physics.box2d.setBoundToWorld();
//     game.physics.box2d.gravity.y=500;

//     for(var i=0;i<5;i++){
//         var blockSprite=game.add.sprite(150+i*125,300-i*50,'block');
//         game.physics.box2d.enable(blockSprite);
//         blockSprite.body.angle=30; 
//     }
// }


// html 标签 不适合  CANVAS
// 物理引擎, 碰撞检测
var game = new Phaser.Game(800, 600,
    Phaser.CANVAS,
    'game', {
        preload: preload,
        create: create
    })
function preload() {
    game.load.image('block', './block.png')
}
function create() {
    // 舞台 
    game.stage.backgroundColor = '#124184';
    // add block
    game.physics.startSystem(Phaser.Physics.BOX2D)
    game.physics.box2d.setBoundsToWorld();
    game.physics.box2d.gravity.y = 500;
    
    for (var i = 0; i < 5; i++) {
        var blockSprite = 
        game.add.sprite(150 + i*125, 
            300 - i * 50, 'block');
        game.physics.box2d.enable(blockSprite);
        blockSprite.body.angle=45;
    }
    game.input.onDown.add(mouseDragStart,this);
    game.input.addMoveCallback(mouseDragMove,this);
    game.input.onUp.add(mouseDragEnd,this);
}
function mouseDragStart(){
    game.physics.box2d.mouseDragStart(game.input.mousePointer);
}
function mouseDragMove(){
    game.physics.box2d.mouseDragMove(game.input.mousePointer);
}
function mouseDragEnd(){
    game.physics.box2d.mouseDragEnd(game.input.mousePointer);
}