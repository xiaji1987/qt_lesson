var status = 'global';
var obj = {
  status: 'obj',
  getStatus: function() {
    return this.status
  }
}
console.log(obj.getStatus());
var fun = obj.getStatus;
console.log(fun());