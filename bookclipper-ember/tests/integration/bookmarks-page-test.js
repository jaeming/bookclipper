import Ember from 'ember';
import startApp from 'bookclipper/tests/helpers/start-app';

var App, server;

module('integration - Bookmarks page', {
  setup: function() {
    App = startApp();
    var bookmarks = [
      {
        id: 1,
        url: 'http://www.ember.js',
        hashtag_topic: "Javascript"
      },
      {
        id: 2,
        url: 'http://www.benjidalton.com',
        hashtag_topic: "developers"
      },
      {
        id: 3,
        url: 'http://angular.js',
        hashtag_topic: "TheDarkSide"
      }
    ];

    server = new Pretender(function() {
      this.get('/bookmarks', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({bookmarks: bookmarks})];
      });

      this.get('/bookmarks/:id', function(request) {
        var bookmark = bookmarks.find(function(bookmark) {
          if (bookmark.id === parseInt(request.params.id, 10)) {
            return bookmark;
          }
        });

        return [200, {"Content-Type": "application/json"}, JSON.stringify({bookmark: bookmark})];
      });
    });

  },
  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

test('Should be able to navigate to a create form for bookmarks', function() {
  visit('/bookmarks').then(function() {
    click("a:contains('Create New')").then(function() {
      equal(find('h3').text(), 'New Bookclip');
    });
  });
});