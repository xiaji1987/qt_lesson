const box = document.querySelector('.box');
const inner = document.querySelector('.inner');

document
    .getElementById('login-a')
    .addEventListener('click',function(event){
        event.preventDefault();
        alert('打开弹窗');
    });
box.addEventListener('click',() =>{
    alert('I am a box');
},false);
inner.addEventListener('click',(event) =>{
    // event.stopPropagation();
    alert('I am a inner');
},false);