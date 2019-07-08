var wrapper=document.getElementById('wrapper');
var isActive=false;
// console.log(wrapper);
// wrapper.addEventListener('click',function(){
//     // wrapper.style.width='30rem';
//     isActive=!isActive;
//     if(isActive==true){
//         this.classList.add('wrapper1');
//     }else{
//         this.classList.remove('wrapper1');
//     }
// })
var num=0;
wrapper.addEventListener('click',function(){
    // wrapper.style.width='30rem';
    num++;
    if(num%2==1){
        this.classList.add('wrapper1');
    }else{
        this.classList.remove('wrapper1');
    }
})
