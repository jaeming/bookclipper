class CreateJoinTableBookmarkHashtag < ActiveRecord::Migration
  def change
    create_join_table :bookmarks, :hashtags do |t|
      t.index [:bookmark_id, :hashtag_id]
      t.index [:hashtag_id, :bookmark_id]
    end
  end
end
