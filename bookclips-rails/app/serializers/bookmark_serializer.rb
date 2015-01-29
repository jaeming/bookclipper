class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :url, :title, :description
  has_many :hashtags, embed: :ids, include: true
  has_many :users, embed: :ids, include: true

  # def users
  #   object.user_ids
  # end

  # def hashtags
  #   object.hashtag_ids
  # end

end
