describe('timeouts', function() {

  beforeEach(module('timeouts'));

  var waiter;

  beforeEach(inject(function(_waiter_) {
    waiter = _waiter_;
  }));

  it('should briefly set somethign to true', inject(function($timeout) {
    var anyObject = {foo: 42};

    waiter.brieflySetSomethingToTrue(anyObject, 'foo');

    expect(anyObject.foo).to.equal(true);

    $timeout.flush();

    expect(anyObject.foo).to.equal(42);
  }));
});
