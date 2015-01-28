class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :url, :title, :description, :hashtags, :users

end
