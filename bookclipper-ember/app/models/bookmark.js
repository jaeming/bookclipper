import DS from 'ember-data';
import Ember from "ember";

export default DS.Model.extend({
  url: DS.attr('string'),
  hashtag_id: DS.belongsTo('hashtag',{async: true}),
  bookmark_img: Ember.computed( 'url', function() {
    return "http://img.bitpixels.com/getthumbnail?code=21000&size=200&url=" + this.get('url');
  })
});