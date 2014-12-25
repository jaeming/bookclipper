class CreateHashtags < ActiveRecord::Migration
  def change
    create_table :hashtags do |t|
      t.string :topic
      t.references :bookmark, index: true

      t.timestamps
    end
  end
end
