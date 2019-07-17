//自己写的
// const weui=[];
// const panel=[];
// for(let i=0;i<4;i++){
//     weui[i]=document.getElementsByClassName('weui-tabbar__item')[i];
//     panel[i]=document.getElementsByClassName('weui-tab__panel')[i];
//     weui[i].addEventListener('click',function(){
//         panel[0].classList.remove('show');
//         panel[1].classList.remove('show');
//         panel[2].classList.remove('show');
//         panel[3].classList.remove('show');
//         panel[i].classList.add('show');
//     })
// } 

//优化版
const choose=document.querySelectorAll('.weui-tabbar__item');
// console.log(choose);
const tabs=document.querySelectorAll('.weui-tab__panel');
for(let i=0;i<choose.length;i++){
    choose[i].addEventListener('click',function(){
        showTab.call(this);
    });
}
function showTab(){
    console.log(this);
    for(let j=0;j<tabs.length;j++){
        if(choose[j]===this){
            choose[j].classList.add('weui-bar__item_on');
            tabs[j].classList.add('show');
        }else{
            choose[j].classList.remove('weui-bar__item_on');
            tabs[j].classList.remove('show');
        }
    }
}