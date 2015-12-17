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