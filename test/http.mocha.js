describe('http', function() {

  beforeEach(module('factories_2'));

  var chimp;
  var $httpBackend;

  beforeEach(inject(function(_chimp_, _$httpBackend_) {
    chimp = _chimp_;
    $httpBackend = _$httpBackend_;
  }));

  describe('when sending a message', function() {
    beforeEach(function() {
      $httpBackend.expectPOST('http://chimps.org/messages', {message: 'Ook.'})
      .respond(200, {message: 'Ook.', id: 0});

      chimp.sendMessage();
      $httpBackend.flush();
    });

    it('should send an HTTP POST request', function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
  });
});
