var name = 'WindowName';
var a = {
    name: 'Cherry',
    fn: function() {
        console.log(this.name);
    }
}
a.fn();// Cherry
var b = a.fn;
b();

b.apply(a);