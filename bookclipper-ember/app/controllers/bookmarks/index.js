import Ember from 'ember';
export default Ember.ArrayController.extend({
  needs: ['application'],
  actions: {
    clipIt: function(id) {
      console.log(id);
      Ember.$.ajax({
      url : '/favorites',
      type: 'POST',
      dataType : "json",
      data: {"bookmark_id": id},
      success:function(data) { console.log(data); },
      error: function() { alert('something bad happened'); }
      });
    }
  }
});