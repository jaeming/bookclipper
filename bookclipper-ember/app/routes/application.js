import Ember from 'ember';


export default Ember.Route.extend({
  beforeModel: function() {
    return this.csrf.fetchToken();
  },
  model: function() {
    return this.store.find('session', 'current');
  }
});




