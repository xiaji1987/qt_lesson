window.onload = function() {
    var container = document.querySelector('.container');
    var lists = document.querySelector('.lists');
    var buttons = document.querySelector('.buttons').getElementsByTagName('span');
    var prev =document.querySelector('.prev');
    var next =document.querySelector('.next');   
    var index = 1;
    var animated = false;
    var timer;
    function showButton(){
        for (let i = 0; i < buttons.length; i++) {
           if(buttons[i].className == 'on'){
                // buttons[i].classList.remove('on');
                buttons[i].className = '';
                break;
           }
        }
        // buttons[index - 1].classList.add('on');
        buttons[index - 1].className = 'on';
    }
    function play() {
        timer = setInterval(function(){
            next.onclick();
        },3000);
    }
    function stop(){
        clearInterval(timer);
    }
    function animate(offset) {
        animated = true;
        var newLeft = lists.offsetLeft + offset;
        var time = 500; //位移时间
        var interval = 10; //位移时间间隔
        var speed  = offset / (time / interval);
        function go(){
            if (( speed < 0 && lists.offsetLeft > newLeft ) || ( speed > 0 && lists.offsetLeft < newLeft )) {
                lists.style.left = lists.offsetLeft + speed + 'px';
                setTimeout(go, interval);
            }else{
                animated = false;
                lists.style.left =  newLeft + 'px';
                if(lists.offsetLeft > -960){
                    lists.style.left = -4800 + 'px';
                }
                if(lists.offsetLeft < -4800){
                    lists.style.left = -960 + 'px';
                }
            }
        }
        go();
    }
    prev.onclick = function() {
        if(animated){
            return;
        }
        if(index <= 1){
            index = 5;
        }else {
            index--;
        }       
        showButton();
        animate(960);
    }
    next.onclick = function() {
        if(animated){
            return;
        }
        if(index >= 5){
            index = 1;
        }else {
            index++;
        } 
        showButton();
        animate(-960);
    }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if(this.className == 'on' || animated){
                return;
            }
            var myIndex = this.getAttribute('index');
            var offset = -960 * (myIndex - index);
            animate(offset);
            index = myIndex;
            showButton();
        }       
    }
    container.onmouseover = stop;
    container.onmouseout = play;

    play();
}
