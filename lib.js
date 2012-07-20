var lib = {
  foo: function() {
    return 'foo'
  }
}

if(module && module.exports) {
  module.exports = lib
}
