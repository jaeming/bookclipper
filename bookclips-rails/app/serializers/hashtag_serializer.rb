class HashtagSerializer < ActiveModel::Serializer
  attributes :id, :topic, :bookmark_count
  has_many :bookmarks

  def bookmark_count
    object.bookmarks.size
  end

end
