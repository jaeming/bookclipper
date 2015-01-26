import Ember from 'ember';
// export default Ember.Controller.extend({

//   // actions: {
//   // signout: function(session) {

//   // return false; }
//   // }



// //   actions: {
// //     logout: function() {
// //       var currentUser = this.store.createRecord('session', {

// //       });

// //       currentUser.delete();
// //       this.transitionToRoute('bookmarks');
// //       this.get('target.router').refresh();
// //     }
//   // }
// });

export default Ember.ObjectController.extend({
  actions: {
    signout: function() {
      $.ajax({
        url: '/users/sign_out',
        type: 'DELETE',
        success: function(result) {
          // Do something with the result
        }
      });
      return false;
    }
  }

});