import DS from 'ember-data';
import Ember from "ember";
export default DS.RESTSerializer.extend( {
  serializeIntoHash: function(hash, type, record, options) {
  Ember.merge(hash, this.serialize(record, options));
  }
});

