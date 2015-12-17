### Auth-Validations
This is a npm module that validates common inputs for
user registration process.

## Install
```
npm install auth-validations
```
In your javascript file,
```
var av = require('av');
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