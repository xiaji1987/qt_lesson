document.addEventListener('DOMContentLoaded',()=>{
    var gameCanvas = 
    document.getElementById('gameCanvas');
    var ctx = gameCanvas.getContext('2d');
    var snake = [
    {
        x:150,
        y:150,
    },
    {
        x:140,
        y:150,
    },
    {
        x:130,
        y:150,
    },
    {
        x:120,
        y:150,
    },
    {
        x:110,
        y:150,
    }];
    init();
    drawSanke();
    function init(){
        ctx.fillStyle = 'white'; 
        ctx.strokeStyle= 'black';
        ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        ctx.strokeRect(0, 0, gameCanvas.width,gameCanvas.height);
    }
    //画一个格子，坐标，foreach  
    function drawSanke() {
        snake.forEach(draSnakePart);
    }
    function draSnakePart(snakePart) {
        console.log(snakePart);
        ctx.fillStyle = 'lightgreen'; 
        ctx.strokeStyle= 'darkgreen';
        ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
        ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }
})