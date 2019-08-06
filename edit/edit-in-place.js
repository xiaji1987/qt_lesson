/**
 * @function 就地编辑
 * @author 作者/浮
 * 网站的基础类 不要重复
 * 不是具体的业务 抽象的公共业务
 */
function EditInPlace(id, parent, initVal) {
    // constructor
    this.id = id;
    this.parent = parent;
    this.initVal = initVal || "default value";
    this.createElement();//动态的DOM
    this.attachEvent();
}

EditInPlace.prototype.createElement = function(){
    this.containertElement = document.createElement('div');
    this.parentElement = document.createElement('div');
    this.statictElement = document.createElement('span');
    this.statictElement.innerText = this.initVal;
    this.containertElement.appendChild(this.statictElement);
    this.parent.appendChild(this.containertElement);
    this.fileElement = document.createElement('input');
    this.fileElement.type = 'text';
    this.fileElement.value = this.initVal;
    // this.fileElement.style.display = 'none';
    this.containertElement.appendChild(this.fileElement);

    // // 两个状态
    this.converToText();
    // this.converToAdd();
}
//文本状态
EditInPlace.prototype.converToText = function() {
    this.fileElement.style.display = 'none';
    this.statictElement.style.display = 'inline';
}
//编辑状态
EditInPlace.prototype.converToAdd = function() {
    this.fileElement.style.display = 'inline';
    this.statictElement.style.display = 'none';
}

EditInPlace.prototype.attachEvent = function(){
    let seft = this;//对象
    // this.statictElement.addEventListener('click', function(){
    //     // console.log(this);
    //     seft.converToAdd();
    // },false);
    this.statictElement.onclick = function(){
        seft.converToAdd();
    };
    this.fileElement.addEventListener('keydown', (event) => {
        if (event.keyCode == 13) {
            this.statictElement.innerHTML = this.fileElement.value;
            this.converToText();
        }
    }, false)
}