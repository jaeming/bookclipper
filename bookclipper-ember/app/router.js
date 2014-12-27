import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('bookmarks', function() {
    this.route('show', {path: ':bookmark_id'});
  });
});

export default Router;
