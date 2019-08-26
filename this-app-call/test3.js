var a = {
    name: 'Cherry',
    fun1: function() {
        console.log(this.name);
    },
    fun2: function() {
        console.log(this,'.---------');
        // this 丢失
        var that = this;
        setTimeout(function() {
            // this window
            console.log(this);
            this.fun1();
        }.apply(this),1000)// call(this)
        setTimeout(() => {
            console.log(this);
            this.fun1();
        }, 1000);
    }
}
a.fun2();