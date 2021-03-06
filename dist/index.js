module.exports = {
  /**
   * Validate user's email format
   *
   **/
  validateEmail: email => {
    let errorMessage = '';
    let regex = /\S+@\S+\.\S+/;
    let trimmedEmail = email.trim();

    if (trimmedEmail.length > 150) {
      errorMessage = '* Email is too long, please use shorter email address';
    }

    if (!regex.test(trimmedEmail) || trimmedEmail.length === 0) {
      errorMessage = '* Email must be in valid format';
    }

    return errorMessage;
  },

  /**
   * Validate user's password format
   *
   **/
  validatePassword: password => {
    let errorMessages = [];

    if (password.length > 50) {
      errorMessages.push('* Must be fewer than 50 chars');
    }

    if (password.length < 8) {
      errorMessages.push('* Must be longer than 7 chars');
    }

    if (!password.match(/[\!\@\#\$\%\^\&\*]/g)) {
      errorMessages.push('* Missing a symbol(! @ # $ % ^ & *)');
    }

    if (!password.match(/\d/g)) {
      errorMessages.push('* Missing a number');
    }

    if (!password.match(/[a-z]/g)) {
      errorMessages.push('* Missing a lowercase letter');
    }

    if (!password.match(/[A-Z]/g)) {
      errorMessages.push('* Missing an uppercase letter');
    }

    return errorMessages;
  },

  /**
   * Validate user's text input length
   * Must be 1 - 50 characters
   **/
  validateStringLength0to50: text => {
    let errorMessage = '';
    if (text.trim().length > 50) {
      errorMessage = '* Cannot be more than 50 characters';
    } else if (text.trim().length <= 0) {
      errorMessage = '* Cannot be empty';
    } else {
      errorMessage = '';
    }
    return errorMessage;
  }
};
