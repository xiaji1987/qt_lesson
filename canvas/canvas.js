const canvas=document.querySelector('#draw');
// console.log(canvas);
//canvas步骤
const ctx=canvas.getContext('2d');
//绘画环境
// BOM Browser Object Model
// DOM Document Object Model
// window(js 的宙斯)
// document(js 的)
canvas.width=window.innerWidth-100;
canvas.height=window.innerHeight-100;

ctx.strokeStyle='#BADA55';//描边颜色
ctx.lineWidth=1;
ctx.lineJoin='round';
ctx.lineCap='round';
//全局变量
let lastX=0,
    lastY=0,
    isDrawing=false,
    hue=0,
    diretion=true;
// ctx.moveTo(100,100);
// ctx.lineTo(200,200);
// ctx.stroke();
function draw(event){
    // console.log(event.offsetX,event.offsetY);
    if (!isDrawing) return;
    // console.log(event);
    ctx.strokeStyle='hsl('+hue+',100%,50%)';
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();
    lastX=event.offsetX;
    lastY=event.offsetY;

    hue+=50;
    if (hue>=360) {
        hue=0;
    }
    if (ctx.lineWidth>=100||ctx.lineWidth<=1) {
        diretion=!diretion;
    }
    if (diretion) {
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }
}
canvas.addEventListener('mousedown',function(event){
    // console.log(event.offsetX,event.offsetY);
    isDrawing=true;//boolean mousemove要画画
    lastX=event.offsetX;
    lastY=event.offsetY;
});
//画完
canvas.addEventListener('mousemove',draw);
// canvas.addEventListener('mouseup',function(event){
//     isDrawing=false;
// });
canvas.addEventListener('mouseup',()=>isDrawing=false)
canvas.addEventListener('mouseout',()=>isDrawing=false)