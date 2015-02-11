import Ember from 'ember';
export default Ember.ObjectController.extend({
  actions: {
    logIn: function() {
      var email = this.get('email');
      var password = this.get('password');
      Ember.$.ajax({
      url : 'api/users/sign_in',
      type: 'POST',
      dataType : "json",
      data: {"user":{"email": email, "password": password}},
      success:function(data) {
        console.log(data);
        window.location.href = 'bookmarks';
      },
      error: function() { alert('something bad happened'); }
      });
    }
  }
});