var lib = require(__dirname + '/../../lib')

buster.spec.expose()

describe('lib', function() {
  describe('foo', function() {
    it('returns foo', function() {
      expect(lib.foo()).toEqual('foo')
    })
  })
})
