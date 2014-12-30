import DS from 'ember-data';

export default DS.Model.extend({
  topic: DS.attr('string'),
  bookmark_ids: DS.hasMany('bookmark', {async: true})
});