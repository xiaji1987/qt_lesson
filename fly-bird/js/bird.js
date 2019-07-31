var bird = {
    flyTime:null,//小鸟飞行定时器
    wingTime:null,//小鸟翅膀摆动的时间

    div:document.createElement('div'),
    showBird: function(parentObj){
        this.div.style.width = '40px';
        this.div.style.height = '28px';
        this.div.style.backgroundImage = 'url(img/bird0.png)';
        this.div.style.backgroundRepeat = 'no-repeat';
        this.div.style.position = 'absolute';
        this.div.style.left = '50px';
        this.div.style.top = '200px';
        this.div.style.zIndex = '1';

        parentObj.appendChild(this.div);//在html中加入场景
    },
    fallSpeed:0,//小鸟下落的速度
    flyBird: function(){//控制小鸟下落的函数
        bird.flyTime = setInterval(fly,60);
        function fly(){
            bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ + 'px';
            if(bird.div.offsetTop < 0){
                bird.fallSpeed = 8;//小鸟不能飞出顶部
            }
            if(bird.div.offsetTop >= 395){
                bird.fallSpeed = 0;//小鸟不能飞出顶部
                clearInterval(bird.flyTime);//一旦飞到地面清除定时器
                clearInterval(bird.wingTime);//飞到地面翅膀摆动定时器
            }
            if(bird.fallSpeed > 12){
                bird.fallSpeed = 12;//控制小鸟下落的速度最大不能超过120
            }
        }
    },
    wingWave: function(){
        var up = ['url(../img/up_bird0.png)','url(../img/up_bird1.png)'];
        var down = ['url(../img/down_bird0.png)','url(../img/down_bird1.png)']
        var i = 0 , j = 0;
        bird.wingTime = setInterval(wing,120);
        function wing(){
            if(bird.fallSpeed > 0){
                bird.div.style.backgroundImage = down[i++];
                if(i == 2){
                    i = 0;
                }
            }

            if(bird.fallSpeed < 0){
                bird.div.style.backgroundImage = up[j++];
                if(j == 2){
                    j = 0;
                }
            }
        }
    }
}