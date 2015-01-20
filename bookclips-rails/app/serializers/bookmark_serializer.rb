class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :url, :user_id, :title, :description, :hashtags

  def hashtags
    object.hashtag_ids
  end
end
