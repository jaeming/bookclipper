import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newUser = this.store.createRecord('user', {
        email: this.get('email'),
        name: this.get('name'),
        password: this.get('password'),
        password_confirmation: this.get('password_confirmation'),
      });

      newUser.save();
      this.transitionToRoute('bookmarks');
      this.get('target.router').refresh();
    }
  }
});