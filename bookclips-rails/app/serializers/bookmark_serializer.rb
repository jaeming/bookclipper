class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :url, :title, :description, :hashtags, :users
  # has_many :hashtags, embed: :ids, include: true
  # has_many :users, embed: :ids, include: true

  def hashtags
    object.hashtag_ids
  end

  def users
    object.user_ids
  end

end
