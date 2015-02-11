import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('bookmarks', { path: '/'}, function() {
    this.route('show', {path: ':bookmark_id'});
    this.route('new');
    this.route('update', {path: 'update/:bookmark_id'});
  });
  this.resource('hashtags', function() {
    this.route('show', {path: ':hashtag_id'});
  });
  this.resource('sessions', function() {
    this.route('current');
  });
  this.resource('users', function() {
    this.route('login');
    this.route('show', {path: ':user_id'});
    this.route('new');
    this.route('account');
  });
});

export default Router;
