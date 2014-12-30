import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),
  hashtag_id: DS.belongsTo('hashtag',{async: true})
});