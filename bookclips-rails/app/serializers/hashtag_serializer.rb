class HashtagSerializer < ActiveModel::Serializer
  attributes :id, :topic, :bookmarks

  def bookmarks
    object.bookmark_ids
  end

end
