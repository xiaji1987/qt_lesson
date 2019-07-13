(function(window,document){
    var prefixes = ['webkit','Moz','ms','o',''],
        book = document.querySelectorAll('.book')[0],
        page = document.querySelectorAll('.front-cover')[0],
        dino = document.querySelectorAll('.dino')[0],
        shadow = document.querySelectorAll('.shadow')[0],
        hold = false,
        CenterPoint = window.innerWidth/2,
        pagewidth = 300,
        clamp = function(val,min,max){
            return Math.max(min,Math.min(val,max))
        }

    //鼠标按下时执行的事件
    page.onmousedown = function(){
        hold=true;
    }
    //鼠标松开执行的事件
    window.onmouseup = function(){
        if(hold){
            hold=false;
        }
    }
    //在窗口被调整执行的事件
    window.onresize = function(){
        CenterPoint =window.innerWidth/2;
        // console.log(CenterPoint);
    }
    //鼠标移动的时候执行的事件
    window.onmousemove=function(evt){
        if (!hold) {
            return
        }
        // console.log(evt);
        var angle = clamp((CenterPoint-evt.pageX+pagewidth)/pagewidth*-90,-180,0),
            i,
            j;
        for (i = 0,j=prefixes.length;i<j;i++) {
            book.style[prefixes[i]+'Transform']=`rotateX(${30+angle/16}deg)`;
            page.style[prefixes[i]+'Transform']=`rotateY(${angle}deg)`;
            dino.style[prefixes[i]+'Transform']=`rotateX(${angle/4}deg)`;
            shadow.style[prefixes[i]+'Transform']=`translateZ(1px) skewX`;
        }
    }
})(window,document)