let proto = {}

function defineGetter(prop, name) {
  proto.__defineGetter__(name, function() {
    return this[prop][name] // this ===>ctx 所以
  })
}

defineGetter('request', 'url')
defineGetter('request', 'path')

module.exports = proto