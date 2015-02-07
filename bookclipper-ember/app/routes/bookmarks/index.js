import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('bookmark');
  },

// beforeModel: function() {
//   Ember.$.ajax({
//   url : '/sessions/current',
//   type: 'GET',
//   dataType : "json",
//   success:function(data) {
//     console.log(data);
//   },
//   error: function() { alert('something bad happened'); }
//   });
// }

});
