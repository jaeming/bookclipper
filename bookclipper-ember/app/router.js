import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('application');
  this.resource('bookmarks', function() {
    this.route('show', {path: ':bookmark_id'});
    this.route('new');
  });
  this.resource('hashtags', function() {
    this.route('show', {path: ':hashtag_id'});
  });
  this.resource('sessions', function() {
    this.route('show', {path: 'current'});
    this.route('new');
    this.route('destroy');
  });
  this.route('login');
  // this.route('currentuser');
  this.resource('users', function() {
    this.route('show', {path: ':user_id'});
    this.route('new');
    this.route('account');
  });
});

export default Router;
