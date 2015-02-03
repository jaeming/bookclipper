import Ember from 'ember';
export default Ember.ArrayController.extend({
  actions: {
    clipIt: function() {
      Ember.$.ajax({
      url : '/favorites',
      type: 'POST',
      dataType : "json",
      data: {"id":"1"},
      success:function(data) { console.log(data); },
      error: function() { alert('something bad happened'); }
      });
    }
  }
});