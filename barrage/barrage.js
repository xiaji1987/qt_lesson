let data=[
    {value:'周杰伦-听妈妈的话，我我我我哦我',time:5,color:'red',speed:1,fontsize:22},
    {value: '想快快长大，才能保护她', time: 10, color: '#00a1f5', speed: 1, fontSize: 30},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 6},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', color:'red'},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', speed:2},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 35},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 20},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 18},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', fontsize:40}
]

//获取需要用到的所有dom结构
let doc=document,
    canvas=doc.getElementById('canves'),
    $text=doc.getElementById('text'),
    $btn=doc.getElementById('btn'),
    $video=doc.getElementById('video'),
    $color=doc.getElementById('color'),
    $range=doc.getElementById('range');

//创建CanvesBarrage类  
class CanvasBarrage {
    constructor(canvas, video, opts = {}) { //constructor 是一种用于创建和初始化class创建的对象的特殊方法。
        // opts = {}表示如果opts没传就设为{}，防止报错，ES6语法
        
        // 如果canvas和video都没传，那就直接return掉
        if (!canvas || !video) return;
        console.log(this)
        
        // 直接挂载到this上
        this.video = video;
        this.canvas = canvas;
        // window.location.reload()
        // 设置canvas的宽高和video一致
        this.canvas.width = video.width;
        this.canvas.height = video.height;
        // 获取画布，操作画布
        this.ctx = canvas.getContext('2d');
        
        // 设置默认参数，如果没有传就给带上
        let defOpts = {
            color: '#e91e63',
            speed: 1.5,
            opacity: 0.5,
            fontSize: 20,
            data: []
        };
        // 合并对象并全都挂到this实例上
        Object.assign(this, defOpts, opts);
       
       // 添加个属性，用来判断播放状态，默认是true暂停
       this.isPaused = true;
       // 得到所有的弹幕消息
       this.barrages = this.data.map(item => new Barrage(item, this));
       // 渲染
       this.render();
       console.log(this);
    }
    // 渲染canvas绘制的弹幕
    render() {
      // 渲染的第一步是清除原来的画布，方便复用写成clear方法来调用
      this.clear();
      // 渲染弹幕
      this.renderBarrage();
      // 如果没有暂停的话就继续渲染
      if (this.isPaused === false) {
          // 通过raf渲染动画，递归进行渲染
          requestAnimationFrame(this.render.bind(this));
      }
    }
    clear() {
        // 清除整个画布
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    renderBarrage() {
      // 首先拿到当前视频播放的时间
      // 要根据该时间来和弹幕要展示的时间做比较，来判断是否展示弹幕
      let time = this.video.currentTime;
      
      // 遍历所有的弹幕，每个barrage都是Barrage的实例
      this.barrages.forEach(barrage => {
          // 用一个flag来处理是否渲染，默认是false
          // 并且只有在视频播放时间大于等于当前弹幕的展现时间时才做处理
          if (!barrage.flag && time >= barrage.time) {
              // 判断当前弹幕是否有过初始化了
              // 如果isInit还是false，那就需要先对当前弹幕进行初始化操作
              if (!barrage.isInit) {
                  barrage.init();
                  barrage.isInit = true;
              }
              // 弹幕要从右向左渲染，所以x坐标减去当前弹幕的speed即可
              barrage.x -= barrage.speed;
              barrage.render(); // 渲染当前弹幕
              
              // 如果当前弹幕的x坐标比自身的宽度还小了，就表示结束渲染了
              if (barrage.x < -barrage.width) {
                  barrage.flag = true; // 把flag设为true下次就不再渲染
              }
          }
      });
    }
    add(obj) {
      // 实际上就是往barrages数组里再添加一项Barrage的实例而已
      this.barrages.push(new Barrage(obj, this));
    }
  }
  
//创建Barrage类，用来实例化每一个弹幕元素
class Barrage{
    constructor(obj,ctx){
        this.value=obj.value;//弹幕的内容
        this.time=obj.time;//弹幕的时间
        //把obj和ctx挂载到this上，方便获取
        this.obj=obj;
        this.context=ctx;
    }
    init(){
        //如果数据里没有涉及到下面四种参数，那就去默认参数
        this.color=this.obj.color||this.context.color;
        this.speed=this.obj.speed||this.context.speed;
        this.opacity=this.obj.opacity||this.context.opacity;
        this.fontSize=this.obj.fontSize||this.context.fontSize;
        //为了计算弹幕的宽度，我们必须创建一个p，然后计算文字的宽度
        let p=document.createElement('p');
        p.style.fontSize=this.fontSize+'px';
        p.innerHTML=this.value;
        document.body.appendChild(p);

        //设置弹幕的宽度
        this.width=p.clientWidth;
        // 得到弹幕的宽度后，就把p从body中删除
        document.body.removeChild(p);

        //设置弹幕出现的位置
        this.x=this.context.canvas.width;
        this.y=this.context.canvas.height*Math.random()
        //做一个超出范围的处理
        if (this.y<this.fontSize) {
            this.y=this.fontSize;
        }else if(this.y>this.context.canvas.height-this.fontSize){
            this.y=this.context.canvas.height-this.fontSize;
        }
    }
    //渲染每一个弹幕
    render(){
        //设置画布文字的字体和字号
        this.context.ctx.font=`${this.fontSize}px Arial`;
        //设置画布的颜色
        this.context.ctx.fillStyle=this.color;
        //绘制字体
        this.context.ctx.fillText(this.value,this.x,this.y);
    }
}
// 创建CanvasBarrage实例
let canvasBarrage = new CanvasBarrage(canvas, video, { data });
// 设置video的play事件来调用CanvasBarrage实例的render方法
video.addEventListener('play', () => {
    canvasBarrage.isPaused = false;
    canvasBarrage.render(); // 触发弹幕
});

// 发送弹幕的方法
function send() {
  let value = $text.value;  // 输入的内容
  let time = video.currentTime; // 当前视频时间
  let color = $color.value;   // 选取的颜色值
  let fontSize = $range.value; // 选取的字号大小
  let obj = { value, time, color, fontSize };
  // 添加弹幕数据
  canvasBarrage.add(obj);
  $text.value = ''; // 清空输入框
}
// 点击按钮发送弹幕
$btn.addEventListener('click', send);
