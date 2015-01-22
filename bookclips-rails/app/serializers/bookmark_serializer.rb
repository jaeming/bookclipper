class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :url, :user, :title, :description, :hashtags

  def hashtags
    object.hashtag_ids
  end
end
