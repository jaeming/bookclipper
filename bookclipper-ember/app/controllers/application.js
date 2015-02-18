import Ember from 'ember';

export default Ember.ObjectController.extend({
  menuVisible: false,
  actions: {
    toggleMenu: function() {
      console.log("menu");
      this.toggleProperty('menuVisible');
    }
  }
});
