[![travis build](https://img.shields.io/travis/yhagio/auth-validations.svg?style=flat-square)](https://travis-ci.org/yhagio/auth-validations)
[![codecov coverage](https://img.shields.io/codecov/c/github/yhagio/auth-validations.svg?style=flat-square)](https://codecov.io/github/yhagio/auth-validations)
[![version](https://img.shields.io/npm/v/auth-validations.svg?style=flat-square)](http://npm.im/auth-validations)
[![downloads](https://img.shields.io/npm/dm/auth-validations.svg?style=flat-square)](http://npm-stat.com/charts.html?package=auth-validations&from=2015-12-16)
[![MIT License](https://img.shields.io/npm/l/auth-validations.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)


### Auth-Validations
This is a npm module that validates common inputs for
user registration process.

## Install
```
npm install auth-validations
```
In your javascript file,
```
var av = require('auth-validations');
```
---

## API

### validateEmail(email)
Return error message (String). 
If the error message length is 0, the validation passed successfully.

### validatePassword(password)
Returns an array of error messages (String).
If the array is empty, the validation passed successfully.

### validateStringLength0to50(text)
Return error message (String).
If the error message length is 0, the validation passed successfully.

#### Notes:
In babel v6, The CLI has been moved into the package 'babel-cli'. So, use `babel-cli` instead of `babel`