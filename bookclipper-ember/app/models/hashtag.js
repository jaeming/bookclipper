import DS from 'ember-data';

export default DS.Model.extend({
  topic: DS.attr('string'),
  bookmarks: DS.hasMany('bookmark', { async: true })
});