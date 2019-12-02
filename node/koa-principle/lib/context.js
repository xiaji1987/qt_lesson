let proto = {}

function defineGetter(prop, name) {
  proto.__defineGetter__(name, function() {
    return this[prop][name] // this ===>ctx 所以ctx.url得到的就是ctx.request.url
  })
}

function defineSetter (prop, name){
  proto.__defineSetter__(name, function(val) {
    this[prop][name] = val
  })
}
defineGetter('request', 'url')
defineGetter('request', 'path')

defineGetter('response', 'body')
defineSetter('response', 'body')

module.exports = proto