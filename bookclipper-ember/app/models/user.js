import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  password_confirmation: DS.attr('string'),
  name: DS.attr('string'),
  bookmarks: DS.hasMany('Bookmark', {async: true})
});
