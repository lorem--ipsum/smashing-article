describe('factories', function() {

  beforeEach(module('factories'));

  var chimp;

  beforeEach(inject(function(_chimp_, $log) {
    chimp = _chimp_;
    sinon.stub($log, 'warn', function() {});
  }));

  it('should say Ook', inject(function($log) {
    chimp.ook();

    expect($log.warn.callCount).to.equal(1);
    expect($log.warn.args[0][0]).to.equal('Ook.');
  }));
});
