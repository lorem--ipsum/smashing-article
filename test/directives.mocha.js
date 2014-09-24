describe('directives', function() {

  beforeEach(module('myDirectives'));

  var element;
  var outerScope;
  var innerScope;

  beforeEach(inject(function($rootScope, $compile) {
    element = angular.element('<super-button label="myLabel" on-click="myCallback()"></super-button>');

    outerScope = $rootScope;
    $compile(element)(outerScope);

    innerScope = element.isolateScope();

    outerScope.$digest();
  }));

  describe('label', function() {
    beforeEach(function() {
      outerScope.$apply(function() {
        outerScope.myLabel = "Hello world.";
      });
    })

    it('should be rendered', function() {
      expect(element[0].children[0].innerHTML).to.equal('Hello world.');
    });
  });

  describe('click callback', function() {
    var mySpy;

    beforeEach(function() {
      mySpy = sinon.spy();
      outerScope.$apply(function() {
        outerScope.myCallback = mySpy;
      });
    });

    describe('when the directive is clicked', function() {
      beforeEach(function() {
        var event = document.createEvent("MouseEvent");
        event.initMouseEvent("click", true, true);
        element[0].children[1].dispatchEvent(event);
      });

      it('should be called', function() {
        expect(mySpy.callCount).to.equal(1);
      });
    });
  });
});
