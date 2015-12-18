import {expect} from 'chai';
var av = require('./index');

describe('Email', function() {
  it('should not be empty', function() {
    var email = '';
    expect(av.validateEmail(email)).to.equal('* Email must be in valid format');
  });

  it('should be in valid format', function() {
    var email = 'sdasd';
    expect(av.validateEmail(email)).to.equal('* Email must be in valid format');
    var email2 = 'asda@dssad.';
    expect(av.validateEmail(email2)).to.equal('* Email must be in valid format');
    var email3 = '@.dsd';
    expect(av.validateEmail(email3)).to.equal('* Email must be in valid format');
    var email4 = 'sadsa@.com';
    expect(av.validateEmail(email4)).to.equal('* Email must be in valid format');
    var email5 = 'valid@gmail.com';
    expect(av.validateEmail(email5)).to.equal('');
  });

  it('should not be longer than 150 characters', function() {
    var email = 'sedutperspiciatisundeomnisistenatuserrorsitvoluptatemaccusantiumdoloremquelaudantiumtotamremaperiameaqueipsaquaeabilloinventoreveritatissdad@amazon.com';
    expect(av.validateEmail(email)).to.equal('* Email is too long, please use shorter email address');
  });
});

describe('Passowrd', function() {
  it('should be less than 50 characters', function() {
    var password = 'sedutperspiciat!_-isundeomnisisteDnatuserrorsi5tvoluptatemaccusan';
    expect(av.validatePassword(password)).to.be.instanceof(Array);
    expect(av.validatePassword(password)).to.include('* Must be fewer than 50 chars');
  });

  it('should be longer than 7 characters', function() {
    var password = 'sedu7D!';
    expect(av.validatePassword(password)).to.be.instanceof(Array);
    expect(av.validatePassword(password)).to.include('* Must be longer than 7 chars');
    
    var password2 = '';
    expect(av.validatePassword(password2)).to.be.instanceof(Array);
    expect(av.validatePassword(password2)).to.include('* Must be longer than 7 chars');
  });

  it('should contian special characters(! @ # $ % ^ & *)', function() {
    var password = 'sedutperdsdfdsfds';
    expect(av.validatePassword(password)).to.be.instanceof(Array);
    expect(av.validatePassword(password)).to.include('* Missing a symbol(! @ # $ % ^ & *)');
    
    var password2 = 'ds4DsfdsdfdsfK';
    expect(av.validatePassword(password2)).to.be.instanceof(Array);
    expect(av.validatePassword(password2)).to.include('* Missing a symbol(! @ # $ % ^ & *)');
  });

  it('should contain a number', function() {
    var password = 'sedutperspiciSDJDHSDH%$#@!';
    expect(av.validatePassword(password)).to.be.instanceof(Array);
    expect(av.validatePassword(password)).to.include('* Missing a number');
  });

  it('should contain a lowercase alphabet', function() {
    var password = '23434@DFFKO*!@';
    expect(av.validatePassword(password)).to.be.instanceof(Array);
    expect(av.validatePassword(password)).to.include('* Missing a lowercase letter');
  });

  it('should contain an uppercase alphabet', function() {
    var password = 'sedutperspic34345!@#';
    expect(av.validatePassword(password)).to.be.instanceof(Array);
    expect(av.validatePassword(password)).to.include('* Missing an uppercase letter');
  });
});

describe('String (general)', function() {
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