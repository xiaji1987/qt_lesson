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
    canves=doc.getElementById('canves'),
    text=doc.getElementById('text'),
    btn=doc.getElementById('btn'),
    video=doc.getElementById('video'),
    color=doc.getElementById('color'),
    range=doc.getElementById('range');

//创建CanvesBarrage类  
class   CanvesBarrage{
    //constructor是一种用于创建初和初始化class创建的对象
    constructor(canves,video,opts={}){//opts={}如果没有传值，也不会报错
        //如果canves和video都没传，就直接return
        if (!canves || !video) {
            return
        }
        //直接挂载到this上
        this.canves=canves;
        this.video=video;
        //设置canves的宽高和video一致
        this.canves.width=video.width;
        this.canves.height=video.height;
        //获取画布，操作画布
        this.ctx=canves.getContext('2d');
        //设置默认参数，如果没有传，就给带上
        let defOpts={
            color:'#e91e63',
            speed:1.5,
            opacity:0.5,
            fontSize:20,
            data:[]
        }
        Object.assign(this,defOpts,opts)
        //添加一个属性来判断当前是播放状态还是暂停状态
        this.isPaused=true;//默认true为暂停
        //得到所有的弹幕消息
        this.barrage=this.data.map(item=>new Barrage(item,this));
        //渲染
        this.reader()
    }
    //渲染Canvas绘制的弹幕
    reader(){
        //渲染的第一步是清除画布
        this.clear();
        //渲染弹幕
        this.readerBarrage();
        //如果没有暂停就继续渲染
        if (!this.isPaused) {
            //通过raf渲染动画，递归进行渲染
            requestAnimationFrame(this.render.bind(this));   
        }
    }
    clear(){
        //清除整个画布
        this.ctx.clearRect(0,0,this.canves.width,this.canves.height);
    }
    readerBarrage(){
        //首先拿到当前视频播放的时间
        //根据该时间来和弹幕要展示的时间作比较，来判断是否出现
        let time=this.video.currentTime;

        //遍历所有的弹幕
        this.barrages.forEach(barrage => {
            //用一个flag来处理是否渲染，默认是否false
            if (!barrage.flag&&time>=barrage.time) {
                //判断当前弹幕是否有过初始化
                //如果isInit还是false，那就对当前弹幕初始化
                if (!barrage.isInit()) {
                    barrage.init();
                    barrage.isInit=true;
                }
                //从右往左渲染，所有x的坐标减去当前弹幕的
                barrage.X-=barrage.speed;
                barrage.reader();//渲染当前弹幕

                //如果弹幕X坐标比自身的宽度还小，就表示结束
                if(barrage.X<-barrage.width){
                    barrage.flag=true;
                }
            }
        });
    };
    add(obj){
        //往barrages数组中添加一项barrage的数据
        this.barrages.push(new this.Barrage(obj.this));
    }
}

//创建Barrage类，用来实例化每一个弹幕元素