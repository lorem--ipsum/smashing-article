describe('saving a document', function() {

  var scope = undefined;
  var ctrl = undefined;

  beforeEach(module('textEditor'));

  beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('EditionCtrl', {$scope: scope});

      // We don't want extra HTTP requests to be sent
      // and that's not what we're testing here.
      sinon.stub(scope, 'sendHTTP', function() {});
  }));

  it('should update the documentSaved property', function() {
      expect(scope.state.documentSaved).to.equal(true);

      // A call to $apply() must be performed, otherwise the
      // scope's watchers won't be ran through.
      scope.$apply(function () {
        scope.document.text += ' And some more text';
      });

      expect(scope.state.documentSaved).to.equal(false);

      scope.saveDocument();

      expect(scope.state.documentSaved).to.equal(true);
      expect(scope.sendHTTP.callCount).to.equal(1);
      expect(scope.sendHTTP.args[0][0]).to.equal(scope.document.text);
  });
});
