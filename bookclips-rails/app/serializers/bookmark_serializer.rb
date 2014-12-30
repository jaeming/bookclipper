class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :url, :hashtag_id
end
