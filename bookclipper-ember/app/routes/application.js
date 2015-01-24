import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin);

export default Ember.Route.extend({
  beforeModel: function() {
    return this.csrf.fetchToken();
  }
});





