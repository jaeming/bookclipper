import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),
  hashtag_topic: DS.attr('string')
});