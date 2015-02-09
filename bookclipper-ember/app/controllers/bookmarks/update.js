import Ember from 'ember';
export default Ember.ObjectController.extend({
  queryParams: ['url'],
  url: null,
  actions: {
    update: function() {
      var _this = this;
      var bookmark = this.get('model');
      var title = this.get('title');
      var description = this.get('description');
      var tags = this.get('tags');
      bookmark.set('title', title);
      bookmark.set('description', description);
      bookmark.set('tags', tags);
      bookmark.save().then(function(bookmark) {
        _this.transitionToRoute('bookmarks.show', bookmark);
      });
      }
    }
  });
