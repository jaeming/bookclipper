import DS from 'ember-data';
import Ember from "ember";

export default DS.Model.extend({
  url: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  hashtags: DS.hasMany('hashtag', { async: true }),
  users: DS.hasMany('user', { async: true }),
  bookmark_img: Ember.computed( "url", function() {
    return "http://img.bitpixels.com/getthumbnail?code=21000&size=200&url=" + this.get("url");
  })
});