import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin);

export default Ember.Route.extend({
  beforeModel: function() {
    return this.csrf.fetchToken();
  }
});


// export default Ember.Route.extend({
//   beforeModel: function() {

// //   var currentUser = Ember.$.get('/currentuser').then(function(data) {
// //     return data;
// //   });

// //   console.log(currentUser(data));

// //   // alert(moreShit);

// //     // this.store.createrecord('currentuser', user);
// //     // this.store.createRecord('currentuser', {

// //     // name: "Benji Dalton",
// //     // id: 4,
// //     // email: "8a518cd4-0912-4268-b207-27469869b4dd@shareup.com"

// //     // });
// //   }
// });


