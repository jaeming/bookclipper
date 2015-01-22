import Ember from 'ember';

// export function currentUser(input) {
//   return input;
// }

// Ember.CurrentUserHelper = {
//   beforeModel: function() {
//     if (!this.controllerFor('application').get('currentUser')) {
//       var auth_deferred = Ember.$.get(Ember.Host + '/sessions');

//       auth_deferred.then(function(user) {
//         this.controllerFor('application').set('currentUser', user);
//       }.bind(this));

//       return auth_deferred;
//     }
//   },
//   currentUser: function() {
//     return this.controllerFor('application').get('currentUser');
//   }.property()
// };

// export default Ember.Handlebars.makeBoundHelper(currentUser);
