import DS from 'ember-data';
import Ember from "ember";

// DS.RESTAdapter.reopen({
//   coalesceFindRequests: true
// });

export default DS.Model.extend({
  url: DS.attr('string'),
  // tags: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  hashtags: DS.attr(),
  // hashtags: DS.hasMany('Hashtag', { async: true }),
  user: DS.belongsTo('user', {async: true}),
  bookmark_img: Ember.computed( "url", function() {
    return "http://img.bitpixels.com/getthumbnail?code=21000&size=200&url=" + this.get("url");
  })
});