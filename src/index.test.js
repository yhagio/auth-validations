var expect = require('chai').expect;
var av = require('./index');

describe('Email', function() {
  it('should not be empty', function() {
    var email = '';
    expect(av.validateEmail(email)).to.equal('* Email must be in valid format');
  });

  it('should be in valid format', function() {
    var email = 'sdasd';
    expect(av.validateEmail(email)).to.equal('* Email must be in valid format');
    var email = 'asda@dssad.';
    expect(av.validateEmail(email)).to.equal('* Email must be in valid format');
    var email = '@.dsd';
    expect(av.validateEmail(email)).to.equal('* Email must be in valid format');
    var email = 'sadsa@.com';
    expect(av.validateEmail(email)).to.equal('* Email must be in valid format');
    var email = 'valid@gmail.com';
    expect(av.validateEmail(email)).to.equal('');
  });

  it('should not be longer than 150 characters', function() {
    var email = 'sedutperspiciatisundeomnisistenatuserrorsitvoluptatemaccusantiumdoloremquelaudantiumtotamremaperiameaqueipsaquaeabilloinventoreveritatissdad@amazon.com';
    expect(av.validateEmail(email)).to.equal('* Email is too long, please use shorter email address');
  });
});

describe('Validate String Length 0 to 50', function() {
  it('should not be empty', function() {
    var text = '';
    expect(av.validateStringLength0to50(text)).to.equal('* Cannot be empty');
  });

  it('should not be longer than 50 characters', function() {
    var text = 'sedutperspiciatisundeomnisistenatuserrorsitvoluptatemaccusan';
    expect(av.validateStringLength0to50(text)).to.equal('* Cannot be more than 50 characters');
  });

  it('should be no message if text is between 0 to 50 characters', function() {
    var text = 'seoluptatemaccusan';
    expect(av.validateStringLength0to50(text)).to.equal('');
  });
});