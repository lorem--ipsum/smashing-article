describe('factories', function() {

  beforeEach(module('factories'));

  var chimp;
  var $log;

  beforeEach(inject(function(_chimp_, _$log_) {
    chimp = _chimp_;
    $log = _$log_;
    sinon.stub($log, 'warn', function() {});
  }));

  describe('when invoked', function() {

    beforeEach(function() {
      chimp.ook();
    });

    it('should say Ook', function() {
      expect($log.warn.callCount).to.equal(1);
      expect($log.warn.args[0][0]).to.equal('Ook.');
    });
  });
});
