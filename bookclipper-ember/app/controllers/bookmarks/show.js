import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    clipIt: function(id) {
      Ember.$.ajax({
      url : '/favorites',
      type: 'POST',
      dataType : "json",
      data: {"bookmark_id": id},
      success:function() {
        Ember.$('body').prepend("<div id='flash-wrapper'><div class='flash-message'> <h3 class='flash-text'>Added to your clips!</h3></div></div>");
        setTimeout(function(){
          Ember.$("#flash-wrapper").fadeOut("slow", function () {
          Ember.$("#flash-wrapper").remove();
      }); }, 2000);
      },
      error: function() { alert('something bad happened'); }
      });
    },
    remove: function(id) {
      Ember.$.ajax({
      url : '/favorites/'+id,
      type: 'DELETE',
      dataType : "json",
      success:function() {
        Ember.$('body').prepend("<div id='flash-wrapper'><div class='flash-message'> <h3 class='flash-text'>Removed from your clips!</h3></div></div>");
        setTimeout(function(){
          Ember.$("#flash-wrapper").fadeOut("slow", function () {
          Ember.$("#flash-wrapper").remove();
      }); }, 2000);
      },
      error: function() { alert('something bad happened'); }
      });
    }
  }
});