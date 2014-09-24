describe('saving a document', function() {

  var scope;
  var ctrl;

  beforeEach(module('textEditor'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('EditionCtrl', {$scope: scope});
  }));

  it('should have an initial documentSaved state', function(){
    expect(scope.state.documentSaved).to.equal(true);
  });

  describe('documentSaved property', function() {
    beforeEach(function() {
      // We don't want extra HTTP requests to be sent
      // and that's not what we're testing here.
      sinon.stub(scope, 'sendHTTP', function() {});

      // A call to $apply() must be performed, otherwise the
      // scope's watchers won't be ran through.
      scope.$apply(function () {
        scope.document.text += ' And some more text';
      });
    });

    it('should watch for document.text changes', function() {
      expect(scope.state.documentSaved).to.equal(false);
    });

    describe('when calling the saveDocument function', function() {
      beforeEach(function() {
        scope.saveDocument();
      });

      it('should be set to true again', function() {
        expect(scope.state.documentSaved).to.equal(true);
      });

      afterEach(function() {
        expect(scope.sendHTTP.callCount).to.equal(1);
        expect(scope.sendHTTP.args[0][0]).to.equal(scope.document.text);
      });
    });
  });
});
