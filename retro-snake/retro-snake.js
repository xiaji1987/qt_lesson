function imgLoaded(){
    console.log('哪吒来了')；
}
function hidWelcome(){
    console.log('隐藏welcome');
    document.querySelector('.welcome').style.display = 'none';
};
//资源加载完成
const loadAssets = (fn) =>{
    setTimeout(() => {
        fn(); 
        console.log('资源加载完成'); 
    },5000);
};
document.addEventListener('DOMContentLoaded',() => {
    console.log('页面执行渲染完成');
});
window.onload = () =>{
    // 资源加载之后，hidWelcome
    loadAssets(hidWelcome);
};