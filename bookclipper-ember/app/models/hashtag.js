import DS from 'ember-data';

export default DS.Model.extend({
  topic: DS.attr('string'),
  bookmark_count: DS.attr('string')
});