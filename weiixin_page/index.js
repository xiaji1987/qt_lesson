var send=document.getElementById('send');
var parent=document.getElementById('parent');
send.addEventListener('click',function(){
    //原生js
    // var li=document.createElement('li');
    // li.setAttribute('class','content-item');
    // parent.appendChild(li);
    
    // var divpic=document.createElement('div');
    // divpic.setAttribute('class','left-pic');
    // li.appendChild(divpic);
    
    // var img=document.createElement('img');
    // img.setAttribute('src','./images/user.jpg');
    // divpic.appendChild(img);

    // var message=document.createElement('div');
    // message.setAttribute('class','message');
    // li.appendChild(message);

    // var p1=document.createElement('p');
    // p1.setAttribute('class','name');
    // var p1txt=document.createTextNode('不知');
    // p1.appendChild(p1txt);
    // message.appendChild(p1);

    // var p2=document.createElement('p');
    // p2.setAttribute('class','detail');
    // var p2txt=document.createTextNode('消息');
    // p2.appendChild(p2txt);
    // message.appendChild(p2);

    // var time=document.createElement('div');
    // time.setAttribute('class','time');
    // li.appendChild(time);

    // var span=document.createElement('span');
    // var spantxt=document.createTextNode('上午7：00');
    // span.appendChild(spantxt);
    // time.appendChild(span);

    //jquery
    var html=$('<li class="content-item">'+
                    '<div class="left-pic">'+
                        '<img src="./images/user.jpg" alt="">'+
                    '</div>'+
                    '<div class="message">'+
                        '<p class="name">某某某</p>'+
                        '<p class="detail">消息详情</p>'+
                    '</div>'+
                    '<div class="time">'+
                        '<span>下午11：11</span>'+
                    '</div>'+
                '</li>');
    html.appendTo(parent);
});
