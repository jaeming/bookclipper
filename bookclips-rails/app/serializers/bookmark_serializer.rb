class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :url, :title, :description, :hashtags, :user

  def hashtags
    object.hashtags
  end

  def user
    object.user.id
  end

end
