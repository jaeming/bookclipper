import Ember from 'ember';

export default Ember.Controller.extend({
  isSignedIn: function() {
      return this.get('content') && this.get('content').get('isLoaded');
    }.property('content.isLoaded')
});