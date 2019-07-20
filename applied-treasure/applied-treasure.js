const tab=document.querySelectorAll('.tab');
const ul=document.querySelectorAll('.recommend-ul');
for(let i=0;i<tab.length;i++){
    tab[i].addEventListener('click',function(){
        showTab.call(this);
    });
}
function showTab(){
    for(let j=0;j<ul.length;j++){
        if(tab[j]===this){
            tab[j].classList.add('tab-botton');
            ul[j].classList.add('recommend-chioce');
        }else{
            tab[j].classList.remove('tab-botton');
            ul[j].classList.remove('recommend-chioce');
        }
    }
}


const list_tab=document.querySelectorAll('.list-tab');
const list_ul=document.querySelectorAll('.list-ul');
for(let i=0;i<list_tab.length;i++){
    list_tab[i].addEventListener('click',function(){
        list_showTab.call(this);
    });
}
function list_showTab(){
    for(let j=0;j<list_ul.length;j++){
        if(list_tab[j]===this){
            list_tab[j].classList.add('list-botton');
            list_ul[j].classList.add('list-chioce');
        }else{
            list_tab[j].classList.remove('list-botton');
            list_ul[j].classList.remove('list-chioce');
        }
    }
}

const list_app=document.querySelectorAll('.list-app');
const list_app_hover=document.querySelectorAll('.list-app-hover');
for(let i=0;i<list_app.length;i++){
    list_app[i].addEventListener('click',function(){
        list_show(this);
    });
}
function list_show(){
    for(let j=0;j<list_app.length;j++){
        if(list_app[j]===this){
            list_app_hover[j].classList.add('list-show');
        }else{
            list_app[j].classList.remove('list-show');
            list_app_hover[j].classList.add('list-show');
        }
    }
}
