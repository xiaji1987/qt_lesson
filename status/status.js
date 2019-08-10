function Light() {
    this.status = 'off';//状态
    this.button = null;
    this.init();
}
Light.prototype.init = function() {
    var button = document.createElement('button');
    button.innerHTML = "关";
    this.button = document.body.appendChild(button);
    this.button.onclick = () => {
        this.buttonPressed();
    }
}
Light.prototype.buttonPressed = function() {
    if(this.status == 'off') {
        console.log("开灯");
        this.status = 'on';
        this.button.innerText = "开";
    }else{
        console.log("关灯");
        this.status = 'off';
        this.button.innerText = "关";
    }
}