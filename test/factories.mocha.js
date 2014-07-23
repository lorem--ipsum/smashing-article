describe('factories', function() {

  beforeEach(module('factories'));

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
});
