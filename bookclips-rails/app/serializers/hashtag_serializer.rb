class HashtagSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :topic
  has_many :bookmarks
end
