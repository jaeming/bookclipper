import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('user');
  },
  setupController: function(controller, model) {
      this.store.find(model).then(function(result) {
        controller.set('model', result);
      });
  },
      serialize: function(model) {
          return {user_id:model};
      }
});