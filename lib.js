var lib = {
  foo: function() {
    return 'foo'
  }
}

if(typeof module !== 'undefined') {
  module.exports = lib
}
