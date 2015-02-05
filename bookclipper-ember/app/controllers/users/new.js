import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newUser = this.store.createRecord('user', {
        email: this.get('email'),
        name: this.get('name'),
        password: this.get('password'),
        password_confirmation: this.get('password_confirmation'),
      success:function(data) {
        console.log(data);
      },
      error: function() { alert('something bad happened'); }
      });
      newUser.save().then(function (){
      window.location.href = 'bookmarks';
  });


    }
  }
});