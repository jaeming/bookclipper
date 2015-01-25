import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin);

export default Ember.Route.extend({
  beforeModel: function() {
    return this.csrf.fetchToken();
  }
});

export default Ember.Route.extend({
  model: function() {
    return this.store.find('session', 'current');
  }
});

// export default Ember.Route.extend({
// model: function() {
//   return Ember.$.getJSON('/sessions/current');
//   }
// });