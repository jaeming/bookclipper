import DS from 'ember-data';

DS.RESTAdapter.reopen({
  coalesceFindRequests: true
});

export default DS.Model.extend({
  topic: DS.attr('string'),
  bookmarks: DS.hasMany('Bookmark', { async: true })
});