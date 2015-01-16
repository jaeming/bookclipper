class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :url, :user_id, :hashtags

  def hashtags
    object.hashtag_ids
  end
end
