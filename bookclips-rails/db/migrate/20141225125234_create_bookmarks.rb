class CreateBookmarks < ActiveRecord::Migration
  def change
    create_table :bookmarks do |t|
      t.string :url
      t.references :hashtag, index: true

      t.timestamps
    end
  end
end
