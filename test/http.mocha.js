describe('http', function() {

  beforeEach(module('factories_2'));

  var chimp;

  beforeEach(inject(function(_chimp_) {
    chimp = _chimp_;
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
