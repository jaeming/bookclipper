import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    signout: function() {
      Ember.$.ajax({
        url: '/users/sign_out',
        type: 'DELETE',
        success: function(result) {
          console.log(result);
          location.reload();
        }
      });
    }
  }
});