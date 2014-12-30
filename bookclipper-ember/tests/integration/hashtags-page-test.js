import Ember from 'ember';
import startApp from 'bookclipper/tests/helpers/start-app';

var App, server;

module('integration - Hashtags page', {
  setup: function() {
    App = startApp();
    var hashtags = [
      {
        id: 1,
        topic: "Javascript",
        bookmark_count: 2
      },
      {
        id: 2,
        topic: "developers",
        bookmark_count: 11
      },
      {
        id: 3,
        topic: "TheDarkSide",
        bookmark_count: 5
      }
    ];

    server = new Pretender(function() {
      this.get('/hashtags', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({hashtags: hashtags})];
      });

      this.get('/hashtags/:id', function(request) {
        var hashtag = hashtags.find(function(hashtag) {
          if (hashtag.id === parseInt(request.params.id, 10)) {
            return hashtag;
          }
        });

        return [200, {"Content-Type": "application/json"}, JSON.stringify({hashtag: hashtag})];
      });
    });

  },
  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

test('Should be able to navigate to a Hashtag page', function() {
  visit('/hashtags').then(function() {
    click("a:contains('Javascript')").then(function() {
      equal(find('h3').text(), "#Javascript");
    });
  });
});