describe('http', function() {

  beforeEach(module('factories_2'));

  var chimp = undefined;

  beforeEach(inject(function(_chimp_) {
    chimp = _chimp_;
  }));

  it('should say Ook', inject(function($log) {
    sinon.stub($log, 'warn', function() {});

    chimp.ook();

    expect($log.warn.callCount).to.equal(1);
    expect($log.warn.args[0][0]).to.equal('Ook.');
  }));

  it('should send a message', inject(function($httpBackend) {
    $httpBackend.expectPOST('http://chimps.org/messages', {message: 'Ook.'})
      .respond(200, {message: 'Ook.', id: 0});

    chimp.sendMessage();
    $httpBackend.flush();

    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));
});
