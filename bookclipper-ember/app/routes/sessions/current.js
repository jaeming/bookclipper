import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {

  this.get('store').find('session', 'current'); // Find the post from the store
  // sessions.reload(); // Force a reload
  // return sessions;  // Return the fetched p



    // var session = this.get('store').find('session', 'current'); // Find the post from the store
    // session.reload(); // Force a reload
    // return session;  // Return the fetched p
    // // return this.store.find('session', 'current');
  }
});