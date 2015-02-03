import Ember from 'ember';
export default Ember.Controller.extend({
  // needs: ['application'],
  actions: {
    logIn: function() {
      var email = this.get('email');
      var password = this.get('password');
      Ember.$.ajax({
      url : '/users/sign_in',
      type: 'POST',
      dataType : "json",
      data: {"user":{"email": email, "password": password}},
      success:function(data) {
        // store.createRecord('user', {
        //   name: data.user.name,
        // })
// {"session":{"id":"current","user_name":"benji2","user_id":7,"user_email":"daylightsavings@gmail.com","authenticated":true}}
        console.log(data); },
      error: function() { alert('something bad happened'); }
      });
      // this.get('controllers.application').set('authenticated', true);
      // var session = this.get('store').find('session', 'current');
      // session.reload();
      // return session;
      // this.store.find('session', 'current');
      // this.transitionToRoute('bookmarks');
      // this.get('target.router').refresh();
    }
  }
});