import DS from 'ember-data';
import Ember from "ember";

// $.ajaxSetup({
//   xhrFields: {
//     withCredentials: true
//   }
// });

DS.RESTAdapter.reopen({
  coalesceFindRequests: true
});

export default DS.Model.extend({
  url: DS.attr('string'),
  tags: DS.attr('string'),
  hashtags: DS.hasMany('Hashtag', { async: true }),
  bookmark_img: Ember.computed( "url", function() {
    return "http://img.bitpixels.com/getthumbnail?code=21000&size=200&url=" + this.get("url");
  })
});