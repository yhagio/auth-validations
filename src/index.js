module.exports = {

  validateEmail: function(email){
    var regex = /\S+@\S+\.\S+/;
    var eamil = email.trim();
    if(!regex.test(email) || email.length === 0) {
      return false;
    } else {
      return true;
    }
  }
};
