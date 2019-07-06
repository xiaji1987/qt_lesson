window.addEventListener('keydown', function (event) {
    // 1.按哪个键 API可以给你键值
    // console.log(event);
    const keyCode = event.keyCode;
    console.log(keyCode);
    // 2.相应的声音
    // 找到音乐元素 CSS
    // querySelector audio
    //一般方法
    // const audioEle = document.getElementById('audio_'+keyCode);
    // id太多会影响页面性能
    const audioEle = document.querySelector('audio[data-key="' + keyCode + '"]');
    const keyELe = document.querySelector('.key[data-key="' + keyCode + '"]');
    // 3.播放
    if (audioEle) {
        keyELe.classList.add('playing');
        audioEle.currentTime = 0;
        audioEle.play();
    }


})
window.addEventListener('keyup', function (event) {
    const keyCode = event.keyCode;
    const keyELe = document.querySelector('.key[data-key="' + keyCode + '"]');
    if (keyELe) {
        keyELe.classList.remove('playing');
    }
})