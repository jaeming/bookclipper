import Ember from 'ember';
export default Ember.ObjectController.extend({
  queryParams: ['url'],
  url: null,
  actions: {
    save: function() {
      var _this = this;
      var newBookmark = this.store.createRecord('bookmark', {
        url: this.get('url'),
        tags: this.get('tags'),
      });
      newBookmark.save().then(function(bookmark) {
        _this.set('url', '');
        _this.set('tags', '');
        _this.transitionToRoute('bookmarks.show', bookmark);
      });
      }
    }
  });
