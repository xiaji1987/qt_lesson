function Parent(name) {}

function Clild() {
  Parent.apply(this, name)
}

Child.prototype = new Parent('ncia')
Child.prototype.constroct = Child